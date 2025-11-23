// src/pages/PatentAnalyzer.jsx

import { useState, useRef, useEffect } from "react";
import SearchSection from "../components/SearchSection";
import KeywordExpansion from "../components/KeywordExpansion";
import SimilarPatents from "../components/SimilarPatents";
import PositionAnalysis from "../components/PositionAnalysis";
import TechIdentity from "../components/TechIdentity";
import AnalysisProcess from "../components/AnalysisProcess";
import { analyzeIdea } from "../api/analyze";

export default function PatentAnalyzer() {
  const [analyzing, setAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisData, setAnalysisData] = useState(null);

  // 타이머 정리를 위한 ref
  const timersRef = useRef([]);

  // 컴포넌트 언마운트 시 타이머 정리
  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  const handleReset = () => {
    // 진행 중인 타이머 모두 정리
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];

    setAnalyzing(false);
    setCurrentStep(0);
    setAnalysisData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getStepStyles = (step) => {
    const map = {
      1: { rowActive: "bg-blue-50 border-blue-200", icon: "bg-blue-600" },
      2: { rowActive: "bg-indigo-50 border-indigo-200", icon: "bg-indigo-600" },
      3: { rowActive: "bg-purple-50 border-purple-200", icon: "bg-purple-600" },
      4: { rowActive: "bg-pink-50 border-pink-200", icon: "bg-pink-600" },
    };

    const base = map[step];

    if (currentStep < step) {
      return {
        row: "bg-gray-50 border border-gray-200",
        iconBg: "bg-gray-300",
      };
    }
    return {
      row: `border ${base.rowActive}`,
      iconBg: base.icon,
    };
  };

  const handleAnalyze = async (idea) => {
    setAnalyzing(true);
    setCurrentStep(0);
    setAnalysisData(null);

    // 기존 타이머 정리
    timersRef.current.forEach((timer) => clearTimeout(timer));
    timersRef.current = [];

    // 각 단계별 타이밍 (총 20초 고려)
    const STEP_TIMINGS = {
      step1: 3000, // 3초 후 키워드 확장
      step2: 8000, // 8초 후 유사 특허 검색
      step3: 8000, // 8초 후 포지션 분석
    };

    // 단계별 애니메이션
    const timer1 = setTimeout(() => setCurrentStep(1), STEP_TIMINGS.step1);
    const timer2 = setTimeout(() => setCurrentStep(2), STEP_TIMINGS.step2);
    const timer3 = setTimeout(() => setCurrentStep(3), STEP_TIMINGS.step3);

    timersRef.current.push(timer1, timer2, timer3);

    try {
      const startTime = Date.now();

      // 실제 API 호출
      const apiResult = await analyzeIdea(idea);

      const elapsedTime = Date.now() - startTime;
      const MIN_DISPLAY_TIME = 18000; // 최소 18초는 보여주기

      // API가 너무 빨리 끝나면 추가 대기
      const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);

      const finalTimer = setTimeout(() => {
        setAnalysisData({
          ...apiResult,
          userIdea: idea,
        });
        setCurrentStep(4);
        setAnalyzing(false);
        timersRef.current = [];
      }, remainingTime);

      timersRef.current.push(finalTimer);
    } catch (error) {
      // 에러 발생 시 타이머 정리
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current = [];

      console.error(error);
      setAnalyzing(false);
      setCurrentStep(0);
      // TODO: 에러 토스트 표시
      alert("분석 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* HEADER */}
      <header className="w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center gap-3">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleReset}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <i className="ri-search-eye-line text-white text-xl"></i>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 hover:opacity-80">
                PatentLens
              </span>
              <p className="text-xs text-gray-600">
                AI 기반 특허 인사이트 플랫폼
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* 초기 HERO 화면 */}
        {!analysisData && !analyzing && (
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              아이디어 한 문장으로 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                특허 분석 완료
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              AI가 자동으로 키워드를 확장하고 <br />
              유사 특허와 기술 포지션을 분석합니다.
            </p>
          </div>
        )}

        {/* 4단계 화살표 UI */}
        {!analysisData && !analyzing && <AnalysisProcess />}

        <SearchSection onAnalyze={handleAnalyze} analyzing={analyzing} />

        {/* PROGRESS BAR */}
        {analyzing && (
          <div className="mt-12 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                AI 분석 중...
              </h3>

              {[1, 2, 3, 4].map((step) => {
                const style = getStepStyles(step);

                return (
                  <div
                    key={step}
                    className={`p-4 rounded-xl flex items-center gap-4 mb-4 ${style.row}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${style.iconBg}`}
                    >
                      {currentStep > step ? (
                        <i className="ri-check-line text-xl"></i>
                      ) : currentStep === step ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        step
                      )}
                    </div>
                    <p className="font-medium text-gray-700">
                      {step === 1
                        ? "키워드 확장"
                        : step === 2
                        ? "유사 특허 검색"
                        : step === 3
                        ? "포지션 분석"
                        : "최종 리포트 생성"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* RESULT */}
        {analysisData && !analyzing && (
          <div className="mt-12 space-y-8">
            {/* 입력 아이디어 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
              <h3 className="text-xl font-bold mb-4">📌 입력 아이디어</h3>
              <p className="text-gray-800 text-lg">{analysisData.userIdea}</p>
            </div>

            {/* Step 1 */}
            <KeywordExpansion keywords={analysisData.steps.step1.keywords} />

            {/* Step 2 */}
            <SimilarPatents
              patents={analysisData.steps.step2.items.map((p) => ({
                title: p.title,
                applicant: p.applicantName,
                applicationDate: p.applicationDate,
                publicationNumber: p.applicationNumber,
                similarity: p.similarity_percent,
                whySimilar: p.why,
              }))}
            />

            {/* Step 3 */}
            <PositionAnalysis
              analysis={{
                similarityScore:
                  analysisData.steps.step3.avg_similarity_percent,
                riskLevel: analysisData.steps.step3.risk_level,
                recommendation: analysisData.steps.step3.ai_recommendation,
                diffPoints: analysisData.steps.step3.diff_points,
                avoidPoints: analysisData.steps.step3.avoid_points,
              }}
            />

            {/* Step 4 */}
            <TechIdentity
              identity={analysisData.steps.step4.one_liner}
              fields={analysisData.steps.step4.tech_fields}
              core={analysisData.steps.step4.core_tech}
              apps={analysisData.steps.step4.application}
            />
          </div>
        )}
      </main>
    </div>
  );
}
