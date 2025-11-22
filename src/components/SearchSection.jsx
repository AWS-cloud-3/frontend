import { useState } from "react";

export default function SearchSection({ onAnalyze, analyzing }) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim()) {
      onAnalyze(searchText);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg font-bold text-gray-900 mb-3">
            당신의 아이디어를 한 문장으로 설명해주세요
          </label>
          <textarea
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="예: 스마트폰 카메라로 실시간 객체 인식하는 AI 기술을 만들고 싶어요"
            rows={4}
            maxLength={500}
            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-base cursor-text transition-all"
          />
          <p className="mt-3 text-sm text-gray-500 flex items-center justify-between">
            <span>AI가 자동으로 키워드를 확장하고 관련 특허를 분석합니다</span>
            <span className="font-medium">{searchText.length}/500</span>
          </p>
        </div>

        <button
          type="submit"
          disabled={analyzing || !searchText.trim()}
          className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg whitespace-nowrap cursor-pointer transition-all shadow-lg shadow-blue-500/30"
        >
          {analyzing ? (
            <>
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              AI 분석 진행 중...
            </>
          ) : (
            <>
              <i className="ri-sparkling-line mr-2"></i>
              AI 분석 시작하기
            </>
          )}
        </button>
      </form>
    </div>
  );
}
