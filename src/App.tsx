import { RxHamburgerMenu } from "react-icons/rx";
import logo from './assets/Master+Barber+Los+Angeles.jpg';

const App = (() => {
  return (
    <div className="text-zinc-300">
      <div className="flex flex-col bg-black p-2 gap-4 md:p-8 md:gap-10">
        <div className="flex flex-row items-center gap-4 font-semibold font-title md:justify-center">
          <RxHamburgerMenu className="md:hidden" size={24} color="#ccc5b2"/>
          <p className="flex flex-row items-center gap-2 text-zinc-300 md:hidden">BARBER SUPREME
            <div className="w-3 h-0.5 bg-zinc-300"/>
            MELHOR DO NORDESTE
          </p>
          <div className="hidden md:flex flex-col p-2 justify-center items-center text-2xl font-title font-semibold text-zinc-100 tracking-wider">
            <p>BARBER SUPREME</p>
            <h1>MELHOR DO NORDESTE</h1>
          </div>
        </div>
        <div className="hidden md:flex flex-row justify-center items-center gap-16">
          <NavbarButton title="Início" url="http://localhost:5173/"/>
          <NavbarButton title="SERVIÇOS"/>
          <NavbarButton title="APLICATIVO"/>
          <NavbarButton title="SUA BARBEARIA"/>
          <NavbarButton title="FAQ"/>
          <NavbarButton title="PRODUTOS"/>
        </div>
        <div className="hidden md:flex flex-row justify-center items-center">
          <NavbarButton title="// DEMONSTRAÇÃO"/>
        </div>
        <div className="w-full text-center mt-24 text-zinc-100 font-semibold">
          <span>Conhecida por todos como a melhor plataforma de agendamento & administração do nordeste</span>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <img src={logo}/>
          <button className="text-black bg-zinc-100 p-2 rounded-md border font-semibold hover:bg-black hover:text-zinc-100 transition-all">REGISTRE SUA BARBEARIA</button>
        </div>
        <div className="h-4"/>
      </div>
    </div>
  );
});

interface NavbarButtonProps {
  title: string,
  url ?: string,
}

const NavbarButton = ((props: NavbarButtonProps) => {
  return <a href={props.url} className="uppercase tracking-widest font-offtext font-semibold border-t-2 text-2xl text-color-text border-color-text hover:cursor-pointer hover:opacity-80 transition-opacity">
    {props.title}
  </a>
})

export default App