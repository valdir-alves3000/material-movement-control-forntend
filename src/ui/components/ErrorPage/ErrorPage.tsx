import Link from "next/link";
import { useRouter } from "next/router";
import {
  ErrorBack,
  ErrorContainer,
  ErrorContent,
  ErrorH2,
  ErrorH4,
  ErrorText,
} from "./ErrorPage.style";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorH2>404</ErrorH2>
        <ErrorH4>Opps! Página não encontrada</ErrorH4>
        <ErrorText>
          A página que você estava procurando não existe. Você pode ter digitado
          incorretamente o endereço ou a página pode ter sido movida.
        </ErrorText>
        <Link href={"/"}>
          <ErrorBack>Voltar a Home</ErrorBack>
        </Link>
      </ErrorContent>
    </ErrorContainer>
  );
};

export { ErrorPage };
