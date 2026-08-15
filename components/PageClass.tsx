export function PageClass({ className }: { className: string }) {
  const code = `document.body.className=${JSON.stringify(className)};`;
  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: code }} />;
}
