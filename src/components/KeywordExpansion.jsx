export default function KeywordExpansion({ keywords }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
          <i className="ri-key-2-line text-white text-2xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Step 1. AI 키워드 자동 확장
          </h3>
          <p className="text-sm text-gray-600">
            기술 용어를 모르셔도 AI가 자동으로 확장합니다
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex flex-wrap gap-3">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white rounded-lg border border-emerald-200 text-gray-800 font-medium text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <i className="ri-hashtag text-emerald-600 mr-1"></i>
              {keyword}
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-700">
          <i className="ri-information-line text-emerald-600 mr-1"></i>이 키워드
          조합으로 KIPRIS 특허 데이터베이스를 검색합니다
        </p>
      </div>
    </div>
  );
}
