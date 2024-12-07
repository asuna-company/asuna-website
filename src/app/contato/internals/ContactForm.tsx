import PrimaryButton from "@/app/shared/components/buttons/PrimaryButton";
import MaskedInput from "react-text-mask";

export default function ContactForm() {
  return (
    <form className="bg-gray-50/80 p-6 rounded-lg space-y-4 max-w-7xl mx-auto border border-gray-200">
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

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
        <input
          type="email"
          id="email"
          placeholder="seu@email.com"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>

      <PhoneInput/>
      <InvestmentSelector/>

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

      <div className="pt-4"><PrimaryButton title="Enviar mensagem" textClass="text-p1" onClick={() => {}} fullWidth={true} /></div>
    </form>
  )
}


function InvestmentSelector() {
  return (
    <div className="flex flex-col">
      <label htmlFor="investment" className="text-sm font-medium text-gray-700">
        Quanto você pretende investir no projeto? *
      </label>
      <select
        id="investment"
        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" required
        defaultValue=""
      >
        <option value="" disabled hidden>Selecione</option>
        <option value="low">Até R$50.000</option>
        <option value="medium">R$50.000 à R$100.000</option>
        <option value="high">R$100.000 à R$200.000</option>
        <option value="very-high">Acima de R$200.000</option>
      </select>
    </div>
  )
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