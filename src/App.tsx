function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Bem-vindo!
        </h1>
        <p className="text-slate-600 text-lg">
          Seu projeto está configurado e pronto para uso.
        </p>
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-800 font-medium">
            ✓ Supabase conectado
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
