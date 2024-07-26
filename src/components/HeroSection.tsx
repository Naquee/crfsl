import { Box, Flex, Image } from "@chakra-ui/react";
import { HeadingWithSubheading } from "./HeadingWithSubheading";
import FinanceMainheading from "../Assets/FinanceMainheading"; // Unused import, consider removing if not needed
import { MainButton } from "./MainButton";
import fintech from "../Assets/fintech.svg"
import homeScreen from "../Assets/homescreen4.svg"
import OurServices from "./OurServices";
// import Fin from "../Assets/Fin";

interface HeroSectionProps {
  titleSize: string;
}

const HeroSection = () => {
  return (
    <Box mt="5rem" px={["0","1rem"]}>
      <Flex flexDir={["column", "row"]}>
        <Box w={["100%", "50%"]} p={["0", "1rem"]}>
          <HeadingWithSubheading
            titleSize="3xl"
            title="Reach your financial goals with CRFSL"
            subtitle={`Our consultancy offers a comprehensive range of services tailored to meet your financial needs. Whether you're looking to secure a loan, manage your investments, or seek expert advice on credit risk, we have you covered. 
            \n\nSecured Loans: Get access to funds with the security of collateral, offering you lower interest rates and flexible repayment terms.
            \n\nUnsecured Loans: Obtain the financing you need without collateral, based on your creditworthiness and financial profile.
            \n\nInsurances: Protect your assets and ensure financial security with our diverse range of insurance products, including life, health, and property insurance.
            \n\nMutual Funds: Diversify your investment portfolio with our expertly managed mutual funds, designed to maximize returns and minimize risks.
            \n\nCredit Risk Rating Advisory: Benefit from our specialized advisory services to assess and improve your credit risk rating, ensuring better loan terms and financial stability.
            \n\nOur team of experienced consultants is dedicated to providing personalized solutions that align with your financial goals. Partner with us to navigate the complexities of financial planning and achieve your aspirations with confidence.`}
          />
          <MainButton title="Get Started"/>
        </Box>
        <Image
          w={["100%", "45%"]}   
          // objectFit="cover"
          // objectPosition="left top"
          src={homeScreen}
        />
      </Flex>
      <OurServices/>
    </Box>
  );
};

export default HeroSection;
