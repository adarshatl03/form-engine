export const GuidePage = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20 space-y-8">
      <div className="border-b border-border pb-6">
        <h1 className="text-4xl font-extrabold mb-2">Publishing & Versioning Guide</h1>
        <p className="text-xl text-muted-foreground">
          Step-by-step instructions for publishing, versioning, and maintaining the FormEngine
          package.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">🔄 Version Bumping</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-blue-500 font-bold mb-1">PATCH (x.x.1)</div>
            <p className="text-sm text-muted-foreground mb-3">Bug fixes, backward compatible.</p>
            <code className="block bg-surface-900 p-2 rounded text-xs select-all cursor-pointer hover:bg-surface-800">
              npm version patch
            </code>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-green-500 font-bold mb-1">MINOR (x.1.x)</div>
            <p className="text-sm text-muted-foreground mb-3">New features, backward compatible.</p>
            <code className="block bg-surface-900 p-2 rounded text-xs select-all cursor-pointer hover:bg-surface-800">
              npm version minor
            </code>
          </div>
          <div className="p-4 bg-card border border-border rounded-xl">
            <div className="text-red-500 font-bold mb-1">MAJOR (1.x.x)</div>
            <p className="text-sm text-muted-foreground mb-3">Breakfast changes.</p>
            <code className="block bg-surface-900 p-2 rounded text-xs select-all cursor-pointer hover:bg-surface-800">
              npm version major
            </code>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">🚀 Publishing to npm</h2>

        <div className="space-y-4">
          <div className="p-6 bg-surface-50 dark:bg-surface-900/40 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-lg">1. Prerequisites</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">✅ Clean working tree</li>
              <li className="flex items-center gap-2">✅ Tests passing (`npm run test`)</li>
              <li className="flex items-center gap-2">✅ Build successful (`npm run build:lib`)</li>
              <li className="flex items-center gap-2">✅ Logged in to npm (`npm login`)</li>
            </ul>
          </div>

          <div className="p-6 bg-surface-50 dark:bg-surface-900/40 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-lg">2. Execution</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-1">Build Library</div>
                <pre className="bg-slate-950 text-slate-50 p-3 rounded-lg text-sm overflow-x-auto">
                  npm run build:lib
                </pre>
              </div>
              <div>
                <div className="text-sm font-medium mb-1">Publish (Public)</div>
                <pre className="bg-slate-950 text-slate-50 p-3 rounded-lg text-sm overflow-x-auto">
                  npm publish --access public
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">🛠️ Essential Commands</h2>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="p-3 font-medium">Command</th>
                <th className="p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-mono">npm run dev</td>
                <td className="p-3 text-muted-foreground">Start development server</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">npm run build:lib</td>
                <td className="p-3 text-muted-foreground">Build the library for distribution</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">npm run lint</td>
                <td className="p-3 text-muted-foreground">Run ESLint check</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">npm pack</td>
                <td className="p-3 text-muted-foreground">Create a tarball for local testing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
