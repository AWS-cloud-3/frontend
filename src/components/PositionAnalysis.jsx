// src/components/PositionAnalysis.jsx

export default function PositionAnalysis({ analysis }) {
  const getRiskColor = (level) => {
    switch (level) {
      case "high":
        return {
          bg: "from-red-50 to-orange-50",
          border: "border-red-200",
          text: "text-red-700",
          badge: "bg-red-600",
        };
      case "medium":
        return {
          bg: "from-yellow-50 to-orange-50",
          border: "border-yellow-200",
          text: "text-yellow-700",
          badge: "bg-yellow-600",
        };
      case "low":
        return {
          bg: "from-green-50 to-emerald-50",
          border: "border-green-200",
          text: "text-green-700",
          badge: "bg-green-600",
        };
      default:
        return {
          bg: "from-gray-50 to-slate-50",
          border: "border-gray-200",
          text: "text-gray-700",
          badge: "bg-gray-600",
        };
    }
  };

  const colors = getRiskColor(analysis.riskLevel);

  const getRiskLabel = (level) => {
    switch (level) {
      case "high":
        return "높음";
      case "medium":
        return "보통";
      case "low":
        return "낮음";
      default:
        return "알 수 없음";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <i className="ri-compass-3-line text-white text-2xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Step 3. 기술 포지션 분석
          </h3>
          <p className="text-sm text-gray-600">
            당신의 아이디어가 어디에 위치하는지 분석했습니다
          </p>
        </div>
      </div>

      <div
        className={`bg-gradient-to-br ${colors.bg} rounded-xl p-6 border ${colors.border} mb-6`}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              평균 유사도 점수
            </h4>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-900">
                {analysis.similarityScore}
              </span>
              <span className="text-xl text-gray-600">/ 100</span>
            </div>
          </div>
          <div
            className={`px-4 py-2 ${colors.badge} text-white rounded-lg font-bold whitespace-nowrap`}
          >
            위험도: {getRiskLabel(analysis.riskLevel)}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-4 bg-white rounded-full overflow-hidden border border-gray-200">
            <div
              className={`h-full ${colors.badge} transition-all duration-1000`}
              style={{ width: `${analysis.similarityScore}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <i className="ri-alert-line text-purple-600"></i>
            AI 추천 사항
          </h5>
          <p className="text-gray-700 leading-relaxed text-sm">
            {analysis.recommendation}
          </p>
        </div>
      </div>

      {/* Bottom 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 차별화 포인트 */}
        <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <i className="ri-shield-check-line text-purple-600 text-xl"></i>
            <h4 className="font-bold text-gray-900">차별화 포인트</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
              <span>독창적인 알고리즘 설계</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
              <span>특정 산업 맞춤 최적화</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
              <span>새로운 하드웨어 구조</span>
            </li>
          </ul>
        </div>

        {/* 회피 설계 방향 */}
        <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <i className="ri-route-line text-purple-600 text-xl"></i>
            <h4 className="font-bold text-gray-900">회피 설계 방향</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
              <span>다른 기술 조합 활용</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
              <span>새로운 응용 분야 개척</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
              <span>성능 개선 방법 차별화</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
