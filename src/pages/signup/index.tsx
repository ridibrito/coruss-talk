import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import qs from "query-string";

interface User {
  name: string;
  email: string;
  phone: string;
  password: string;
  planId: string;
}

const SignUp = () => {
  const router = useRouter();
  let companyId: string | null = null;

  const params = qs.parse(router.asPath.split(/\?/)[1]);
  if (params.companyId !== undefined) {
    companyId = params.companyId as string;
  }

  const initialState: User = {
    name: "",
    email: "",
    phone: "",
    password: "",
    planId: "",
  };

  const [user, setUser] = useState<User>(initialState);
  const dueDate = moment().add(3, "day").format();

  const handleSignUp = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Implemente a lógica para obter os planos
    }
    fetchData();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implemente a lógica de envio do formulário
  };
  return (
    <div className="flex">
      <div className="min-h-screen max-w-lg block p-8 items-center justify-center w-1/3  bg-gray-100 dark:bg-gray-800 z-10">
        <div className="bg-gray-100 dark:bg-gray-800 ">
          <Image
            className="mx-auto w-full"
            src="/logo.png"
            alt="Whats"
            width={150}
            height={50}
          />
        </div>

        <form className=" dark:bg-gray-800">
          <label
            htmlFor="large-input"
            className="block text-sm mt-2 font-medium text-gray-900 dark:text-white"
          >
            Nome
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu nome"
            value={user.name}
            onChange={handleSignUp}
            required
          />
          <label
            htmlFor="large-input"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu melhor email"
            value={user.email}
            onChange={handleSignUp}
            required
          />
          <label
            htmlFor="large-input"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telefone
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu telefone"
            value={user.phone}
            onChange={handleSignUp}
            required
          />
          <label
            htmlFor="large-input"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Senha
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            value={user.password}
            onChange={handleSignUp}
            required
          />
          <label
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="plan-selection"
          >
            Plano
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="plan-selection"
            label="Plano"
            name="planId"
            required
          >
            {plans.map((plan, key) => (
              <option key={key} value={plan.id}>
                {plan.name} - Atendentes: {plan.users} - WhatsApp:{" "}
                {plan.connections} - Filas: {plan.queues} - R$ {plan.value}
              </option>
            ))}
          </select>

          <button className="mt-4 p-3 rounded w-full bg-blue-600 text-white dark:text-gray-100">
            Cadastrar
          </button>
          <div className="mt-2 text-center">
            <Link href="/login">
              <p className="text-blue-500">Já tem uma conta? Entre!</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="z-0">
        <Image
          src="/bg_login.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default SignUp;
