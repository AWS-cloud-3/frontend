// src/components/SimilarPatents.jsx

export default function SimilarPatents({ patents }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
          <i className="ri-file-list-3-line text-white text-2xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Step 2. 유사 특허 Top 5
          </h3>
          <p className="text-sm text-gray-600">
            Embedding 기반으로 가장 유사한 특허를 찾았습니다
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {patents.map((patent, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    {patent.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <i className="ri-building-line text-indigo-600"></i>
                      {patent.applicant}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-calendar-line text-indigo-600"></i>
                      {patent.applicationDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="ri-file-text-line text-indigo-600"></i>
                      {patent.publicationNumber}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 ml-4">
                <div className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold text-lg whitespace-nowrap">
                  {(patent.similarity * 100).toFixed(0)}%
                </div>
                <span className="text-xs text-gray-600">유사도</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border border-indigo-200">
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <i className="ri-lightbulb-line text-indigo-600"></i>왜
                유사한가요?
              </h5>
              <ul className="space-y-2">
                {patent.whySimilar.map((reason, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="flex-1 leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-indigo-50 rounded-lg p-5 border border-indigo-200">
        <div className="flex items-start gap-3">
          <i className="ri-information-line text-indigo-600 text-xl mt-0.5"></i>
          <div className="flex-1">
            <h5 className="font-bold text-gray-900 mb-2">분석 방법</h5>
            <p className="text-sm text-gray-700 leading-relaxed">
              KIPRIS 검색 결과 중 당신의 아이디어와 특허 초록(abstract)을
              Embedding하여 코사인 유사도를 계산했습니다. 각 특허마다 AI가
              유사한 이유를 3가지로 요약했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
