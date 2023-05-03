import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountdownContainer, Separator, StartCountdownButton, TaskInput, MinutesAmountInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder="Dê um nome para o seu projeto"/>

          <datalist id="task-suggestions">
            <option value="Peojeto 1" />
            <option value="Peojeto 2" />
            <option value="Peojeto 3" />
            <option value="Peojeto 4" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60}/>

          <span>minutos.</span>
        </FormContainer>
      

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit"> <Play size={24}/> Começar</StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
