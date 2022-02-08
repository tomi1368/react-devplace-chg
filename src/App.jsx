import Info from "./components/Info/Info"
import Loader from "./components/Loader/Loader"
import Select from "./components/Select/Select"
import {useCharacters} from "./hooks/useCharacters"
import "./App.scss"
function App() {
  const {characters,uniqueInfo,changeUniqueInfo,error,loading} = useCharacters()

  return (
    <div className="container">
      <h1>Rick And Morty Select</h1>
      { loading && <Loader/>}
      { !loading &&  <Select error={error} setUniqueInfo={changeUniqueInfo} characters={characters}/>  }
      { uniqueInfo && <Info info={uniqueInfo}/> }
    </div>
  )
}

export default App
