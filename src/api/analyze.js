export async function analyzeIdea(idea) {
  const res = await fetch("http://3.137.139.4:8000/rag", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: idea }),
  });

  if (!res.ok) {
    throw new Error("분석 API 호출 실패: " + res.status);
  }

  return await res.json();
}
