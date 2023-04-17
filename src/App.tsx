import Banner from "./Components/Banner";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

export function App() {
  return (
    <div className="dark:bg-galaxy-500 w-screen h-screnn flex flex-col items-center justify-center">

      <Header />
      <Banner />

      <Home title="Lançamentos" link="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80C64C0B63382CD3ED2653356125F275F63D036028A77D38DC3286AD851A6833/scale?width=400&aspectRatio=1.78&format=jpeg" />
      <Home title="Indicados ao Oscar" link="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/7E0F8AC042755CC459BF0307F77CEBE9B1CC52DC0C5AB56A2D8BE9AE6D759B5C/scale?width=400&aspectRatio=1.78&format=jpeg" />
      <Home title="Continue Assistindo"  link="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/863E75A035911DBA10F8D7EE1E433A12A1BF4915670B66597AC31C585A291942/scale?width=400&aspectRatio=1.78&format=jpeg"/>
      <Home title="Alugar" link="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4826879538A92B52B2B316E2E9D5A1BEC5C774C094FF9F96E3265E0D4220E3E6/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" />
    </div>
  )
}