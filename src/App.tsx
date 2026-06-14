import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HistoryCards from "./components/HistoryCard/HistoryCard"

function App() {

  return (
    <>
      <Header />
      <main>
        <HistoryCards
          title="Wilhelm Wundt"
          subtitle="Pai da Psicologia Esperimental"
          description="Wilhelm Wundt foi um médico, fisiologista e filósofo alemão reconhecido por fundar, em 1879, o primeiro laboratório dedicado exclusivamente à pesquisa em Psicologia Experimental. Seu trabalho marcou a separação da Psicologia da Filosofia e estabeleceu bases científicas para o estudo da mente e do comportamento humano por meio de métodos controlados de observação e experimentação."
          image="https://th.bing.com/th/id/OIP.IvKC37GTCIIeR3qzJA81pgHaFL?w=215&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        />
      </main>
      <Footer/>
    </>
  )
}

export default App
