import PrimaryButton from "@/app/shared/components/buttons/PrimaryButton";
import MaskedInput from "react-text-mask";

export default function ContactForm() {
  return (
    <form className="bg-gray-50/80 p-6 rounded-lg space-y-4 max-w-7xl mx-auto border border-gray-200">    
      <NameInput/>
      <EmailInput/>
      <PhoneInput/>
      <InvestmentSelector/>
      <DescriptionInput/>

      <div className="pt-4"><PrimaryButton title="Enviar mensagem" textClass="text-p1" onClick={() => {}} fullWidth={true} withoutOutline={true} /></div>
    </form>
  )
}


function NameInput() {
  return (
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-medium text-gray-700"> Nome * </label>
      <input
        type="text"
        id="name"
        placeholder="Nome completo"
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  )
}

function EmailInput() {
  return (
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail *</label>
      <input
        type="email"
        id="email"
        placeholder="E-mail corporativo"
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        required
      />
    </div>
  )
}

function InvestmentSelector() {
  return (
    <div className="flex flex-col">
      <label htmlFor="investment" className="text-sm font-medium text-gray-700">
        Quanto você pretende investir no projeto? *
      </label>
      <div className="relative mt-1">
        <select
          id="investment"
          className="custom-select block w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 appearance-none"
          required
          defaultValue=""
        >
          <option value="" disabled hidden>Selecione</option>
          <option value="low">Até R$50.000</option>
          <option value="medium">R$50.000 à R$100.000</option>
          <option value="high">R$100.000 à R$200.000</option>
          <option value="very-high">Acima de R$200.000</option>
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
        Telefone *
      </label>
      <div className="flex items-center mt-1">
        <span className="p-2 border border-gray-300 bg-gray-100 rounded-l-md text-gray-500">+55</span>
        <MaskedInput
          mask={["(", /[0-9]/,/[0-9]/,")", " ", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, "-", /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
          placeholder="(XX) XXXXX-XXXX"
          className="flex-1 p-2 border border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>
  )
}

function DescriptionInput() {
  return (
    <div className="flex flex-col">
      <label htmlFor="description" className="text-sm font-medium text-gray-700">Descrição *</label>
      <textarea
        id="description"
        placeholder="Escreva aqui uma descrição sobre o seu projeto!"
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        rows={4}
        required
      />
    </div>
  )
}
