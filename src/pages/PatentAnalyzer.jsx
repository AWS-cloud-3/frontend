import { useState } from "react";
import SearchSection from "../components/SearchSection";
import KeywordExpansion from "../components/KeywordExpansion";
import SimilarPatents from "../components/SimilarPatents";
import PositionAnalysis from "../components/PositionAnalysis";
import TechIdentity from "../components/TechIdentity";

export default function PatentAnalyzer() {
  const [analyzing, setAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [analysisData, setAnalysisData] = useState(null);

  // 홈으로 돌아가기
  const handleReset = () => {
    setAnalyzing(false);
    setCurrentStep(0);
    setAnalysisData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step별 색상 설정 함수
  const getStepStyles = (step) => {
    const colorMap = {
      1: {
        rowActive: "bg-blue-50 border-blue-200",
        icon: "bg-blue-600",
      },
      2: {
        rowActive: "bg-indigo-50 border-indigo-200",
        icon: "bg-indigo-600",
      },
      3: {
        rowActive: "bg-purple-50 border-purple-200",
        icon: "bg-purple-600",
      },
      4: {
        rowActive: "bg-pink-50 border-pink-200",
        icon: "bg-pink-600",
      },
    };

    const base = colorMap[step];

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

    // Step 진행 애니메이션
    setTimeout(() => setCurrentStep(1), 1500);
    setTimeout(() => setCurrentStep(2), 3000);
    setTimeout(() => setCurrentStep(3), 5000);

    // Mock AI 결과
    setTimeout(() => {
      const mockData = {
        userIdea: idea,
        keywords: [
          "객체 인식 (Object Detection)",
          "온디바이스 AI",
          "실시간 카메라 분석",
          "이미지 인식 모델",
          "모바일 프로세싱 최적화",
          "딥러닝 추론",
          "엣지 컴퓨팅",
        ],
        similarPatents: [
          {
            id: "KR-2023-0123456",
            title: "모바일 객체 인식 장치 및 방법",
            similarity: 0.87,
            applicant: "삼성전자주식회사",
            applicationDate: "2023-11-20",
            publicationNumber: "KR-2023-0123456",
            whySimilar: [
              "모바일 카메라로 실시간 분석 기능 제공",
              "딥러닝 기반 객체 분류 모델 적용",
              "모바일 AP에서 저전력 추론",
            ],
          },
          {
            id: "KR-2023-0098765",
            title: "이미지 분류 딥러닝 가속 처리기",
            similarity: 0.82,
            applicant: "LG전자",
            applicationDate: "2023-09-10",
            publicationNumber: "KR-2023-0098765",
            whySimilar: [
              "CNN 기반 이미지 분류",
              "모바일 최적화 모델 적용",
              "GPU 가속 기반 실시간 처리",
            ],
          },
        ],
        positionAnalysis: {
          similarityScore: 81,
          riskLevel: "high",
          recommendation:
            "유사 특허와 해결 방식이 대부분 일치합니다. 차별화된 기술 요소를 추가하는 것이 좋습니다.",
        },
        techIdentity:
          '해당 아이디어는 "온디바이스 실시간 객체 인식" 기술 범주에 속합니다.',
      };

      setAnalysisData(mockData);
      setCurrentStep(4);
      setAnalyzing(false);
    }, 6500);
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
        {/* HERO */}
        {!analysisData && !analyzing && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <i className="ri-sparkle-line"></i> AI 기반 특허 분석
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              아이디어 한 문장으로
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                특허 분석 완료
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12">
              AI가 자동으로 키워드를 확장하고 <br />
              유사 특허와 기술 포지션을 분석합니다.
            </p>
          </div>
        )}

        <SearchSection onAnalyze={handleAnalyze} analyzing={analyzing} />

        {/* 예시 프롬프트 */}
        {!analysisData && !analyzing && (
          <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-chat-smile-2-line text-indigo-600 text-xl"></i>
              이렇게 입력해보세요 👇
            </h3>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  (document.querySelector("textarea").value =
                    "스마트폰 카메라로 실시간 객체를 인식하는 AI 기술을 만들고 싶어요")
                }
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm hover:bg-indigo-100 cursor-pointer"
              >
                📱 스마트폰 실시간 객체 인식
              </button>

              <button
                onClick={() =>
                  (document.querySelector("textarea").value =
                    "공장 CCTV에서 위험 행동을 자동으로 감지하는 AI 기술을 만들고 싶어요")
                }
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 cursor-pointer"
              >
                🏭 산업안전 CCTV 분석
              </button>

              <button
                onClick={() =>
                  (document.querySelector("textarea").value =
                    "사진 속 상품을 자동으로 분류하는 AI 모델을 개발하고 싶어요")
                }
                className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm hover:bg-teal-100 cursor-pointer"
              >
                🛍 이미지 기반 상품 분류
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              예시를 눌러 바로 입력하거나 원하는 기술 아이디어를 자유롭게
              작성하세요.
            </p>
          </div>
        )}

        {/* PROGRESS */}
        {analyzing && (
          <div className="mt-12 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">
                  AI 분석 중...
                </h3>
                <p className="text-sm text-gray-500">{currentStep}/4</p>
              </div>

              {[1, 2, 3, 4].map((step) => {
                const style = getStepStyles(step);

                const label =
                  step === 1
                    ? "키워드 확장"
                    : step === 2
                    ? "유사 특허 검색"
                    : step === 3
                    ? "포지션 분석"
                    : "최종 리포트 생성";

                return (
                  <div
                    key={step}
                    className={`p-4 rounded-xl flex items-center gap-4 ${style.row}`}
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
                    <p className="font-medium text-gray-700">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* RESULT */}
        {analysisData && !analyzing && (
          <div className="mt-12 space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
              <h3 className="text-xl font-bold mb-4">📌 입력 아이디어</h3>
              <p className="text-gray-800 text-lg">{analysisData.userIdea}</p>
            </div>

            <KeywordExpansion keywords={analysisData.keywords} />
            <SimilarPatents patents={analysisData.similarPatents} />
            <PositionAnalysis analysis={analysisData.positionAnalysis} />
            <TechIdentity identity={analysisData.techIdentity} />
          </div>
        )}
      </main>
    </div>
  );
}
