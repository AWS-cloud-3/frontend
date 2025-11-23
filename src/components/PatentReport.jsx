// src/components/PatentReport.jsx

export default function PatentReport({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-10">
      {/* OVERALL SUMMARY */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">📌 전체 요약</h2>
        <p className="text-gray-700 leading-relaxed">{data.overallSummary}</p>
      </section>

      {/* COMPARISONS */}
      <section>
        <h2 className="text-2xl font-bold mb-6">🔍 유사 특허 분석</h2>

        <div className="space-y-8">
          {data.comparisons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">📄 {item.patentId}</h3>

              <p className="text-gray-500 mb-4">
                유사도 점수:{" "}
                <span className="font-bold text-blue-600">
                  {item.similarityScore}%
                </span>{" "}
                / 위험도:{" "}
                <span
                  className={
                    item.infringementRisk === "High"
                      ? "text-red-600 font-bold"
                      : item.infringementRisk === "Medium"
                      ? "text-yellow-600 font-bold"
                      : "text-green-600 font-bold"
                  }
                >
                  {item.infringementRisk}
                </span>
              </p>

              {/* Similarities */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  ✅ 주요 유사점
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.keySimilarities.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* Differences */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  ⚠️ 주요 차이점
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.keyDifferences.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIQUE POINTS */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">🌟 독창적 포인트</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {data.uniquePoints.map((u, i) => (
            <li key={i}>{u}</li>
          ))}
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">📘 결론</h2>
        <p className="text-gray-700 leading-relaxed">{data.conclusion}</p>
      </section>

      {/* TIMESTAMP */}
      <section className="text-right text-gray-500 text-sm">
        분석 시각: {new Date(data.timestamp).toLocaleString()}
      </section>
    </div>
  );
}
