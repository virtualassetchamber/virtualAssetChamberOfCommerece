export async function submitEmail(email: string, source?: string) {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source }),
  });

  const data = await res.json();

  if (!res.ok && res.status !== 200) {
    throw new Error(data.error || "Submission failed");
  }

  return data;
}