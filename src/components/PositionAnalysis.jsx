export default function PositionAnalysis({ analysis }) {
  const getRiskColor = (level) => {
    if (level === "높음")
      return {
        bg: "from-red-50 to-orange-50",
        border: "border-red-200",
        badge: "bg-red-600",
      };
    if (level === "보통")
      return {
        bg: "from-yellow-50 to-orange-50",
        border: "border-yellow-200",
        badge: "bg-yellow-600",
      };
    return {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200",
      badge: "bg-green-600",
    };
  };

  const colors = getRiskColor(analysis.riskLevel);

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
            평균 유사도 기반 위험도 및 분석 결과입니다
          </p>
        </div>
      </div>

      {/* Score Box */}
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
            className={`px-4 py-2 ${colors.badge} text-white rounded-lg font-bold`}
          >
            위험도: {analysis.riskLevel}
          </div>
        </div>

        {/* AI Recommendation */}
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <i className="ri-alert-line text-purple-600"></i>
            AI 추천 사항
          </h5>
          <p className="text-gray-700 text-sm leading-relaxed">
            {analysis.recommendation}
          </p>
        </div>
      </div>

      {/* Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Diff Points */}
        <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <i className="ri-shield-check-line text-purple-600 text-xl"></i>
            <h4 className="font-bold text-gray-900">차별화 포인트</h4>
          </div>

          <ul className="space-y-2 text-sm text-gray-700">
            {analysis.diffPoints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Avoid Points */}
        <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <i className="ri-route-line text-purple-600 text-xl"></i>
            <h4 className="font-bold text-gray-900">회피 설계 방향</h4>
          </div>

          <ul className="space-y-2 text-sm text-gray-700">
            {analysis.avoidPoints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
