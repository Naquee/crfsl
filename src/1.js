const consultancyServices = {
    securedLoans: {
        description: "Secured loans are a vital financial tool that provides borrowers with significant benefits by using assets as collateral. At [Your Company Name], we offer a variety of secured loan options tailored to meet different needs.",
        types: {
            homeLoan: {
                title: "Home Loan",
                content: "Owning a home is a significant milestone, and our home loan offerings make this dream achievable. We provide competitive interest rates, flexible repayment options, and expert guidance throughout the process. Whether you're a first-time homebuyer or looking to upgrade, our customized home loan solutions are designed to suit your unique requirements."
            },
            loanAgainstProperty: {
                title: "Loan Against Property (LAP)",
                content: "For those who already own property, a Loan Against Property can be an excellent way to unlock its financial potential. By mortgaging your property, you can access substantial funds for various needs such as business expansion, education, medical emergencies, or even personal projects. Our LAP offers attractive interest rates, longer tenure, and easy repayment options, ensuring that you can manage your finances effectively without selling your valuable asset."
            },
            loanAgainstInvestments: {
                title: "Loan Against Insurance and Mutual Funds",
                content: "If you have investments in insurance policies or mutual funds, you can leverage them to meet your immediate financial needs without having to liquidate them. Our Loan Against Insurance and Mutual Funds allows you to borrow against the value of your investments. This option is ideal for those who require funds urgently but do not wish to disturb their long-term investment plans. We offer quick processing and flexible repayment terms to suit your financial situation."
            },
            vehicleLoan: {
                title: "Vehicle Loan",
                content: "Whether you're planning to buy a new car, bike, or even a commercial vehicle, our vehicle loan solutions provide you with the financial support you need. We offer competitive interest rates, flexible repayment tenures, and minimal documentation, ensuring a smooth and hassle-free process. With our vehicle loans, you can drive your dream vehicle home without financial strain."
            }
        }
    },
    unsecuredLoans: {
        description: "Unsecured loans are a perfect solution for individuals and businesses looking for financial support without the need for collateral. At [Your Company Name], we offer a variety of unsecured loan options designed to meet diverse financial needs with ease and flexibility.",
        types: {
            businessLoan: {
                title: "Business Loan (Fund Based/Non Fund Based)",
                content: "Our business loans cater to the financial needs of small, medium, and large enterprises. Whether you require funds for expansion, working capital, or other operational needs, our business loans provide the necessary support. Fund-based loans offer direct funding, while non-fund-based loans, such as letters of credit and bank guarantees, provide financial backing for your business operations without direct disbursement. We understand the dynamics of the business environment and offer tailored loan solutions with flexible repayment options and competitive interest rates to help your business thrive."
            },
            personalLoan: {
                title: "Personal Loan",
                content: "Our personal loan offerings are designed to meet your various personal financial needs, from funding a wedding, vacation, or home renovation to covering medical emergencies. With no collateral required, our personal loans provide quick and easy access to funds. We offer competitive interest rates, minimal documentation, and flexible repayment terms to ensure a hassle-free borrowing experience. Our goal is to provide you with the financial freedom to pursue your personal goals without stress."
            }
        }
    },
    insurances: {
        description: "Insurance is a crucial aspect of financial planning, providing protection and peace of mind in times of uncertainty. At [Your Company Name], we offer a wide range of insurance products to safeguard your future and ensure financial security for you and your loved ones.",
        types: {
            termInsurance: {
                title: "Term Insurance",
                content: "Term insurance is a cost-effective way to secure the financial future of your family. Our term insurance plans offer high coverage at affordable premiums, ensuring that your loved ones are financially protected in case of an untimely demise. With flexible policy terms and options to add riders for additional coverage, our term insurance plans provide comprehensive protection tailored to your needs."
            },
            healthInsurance: {
                title: "Health Insurance",
                content: "Medical emergencies can be financially draining. Our health insurance plans are designed to cover your medical expenses, ensuring that you receive the best possible treatment without worrying about the cost. We offer a variety of health insurance options, including individual plans, family floater plans, and critical illness coverage. With cashless hospitalization, wide network hospitals, and quick claim settlement, our health insurance plans provide you with the peace of mind you deserve."
            },
            motorInsurance: {
                title: "Motor Insurance",
                content: "Protect your vehicle against unforeseen events such as accidents, theft, and natural disasters with our motor insurance policies. We offer comprehensive coverage for cars, bikes, and commercial vehicles, ensuring that you are financially protected in case of damage or loss. Our motor insurance plans come with benefits such as cashless repairs, roadside assistance, and hassle-free claim settlement, providing you with complete peace of mind on the road."
            },
            familyFloaterInsurance: {
                title: "Family Floater Insurance",
                content: "Our family floater insurance plans are designed to cover your entire family under a single policy. With a family floater plan, you can ensure that all members of your family are protected against medical emergencies, with a sum insured that can be utilized by any member as needed. This option is cost-effective and convenient, offering comprehensive coverage and simplified policy management."
            }
        }
    },
    mutualFunds: {
        description: "Mutual funds are a popular investment option that offers diversification, professional management, and potential for higher returns. At [Your Company Name], we provide a wide range of mutual fund options to help you achieve your financial goals.",
        types: {
            openEndedFunds: {
                title: "Open Ended Mutual Funds",
                content: "Open-ended mutual funds offer the flexibility of entry and exit at any time. These funds are highly liquid, allowing you to redeem your investments whenever you need funds. We offer a variety of open-ended mutual funds, including equity funds, debt funds, and hybrid funds, catering to different risk appetites and investment horizons. Our open-ended mutual funds are managed by experienced fund managers who aim to maximize returns while managing risks."
            },
            closedEndedFunds: {
                title: "Closed Ended Mutual Funds",
                content: "Closed-ended mutual funds have a fixed maturity period, offering potentially higher returns compared to open-ended funds. These funds are suitable for investors with a long-term investment horizon. Our closed-ended mutual funds are designed to provide stable returns through a diversified portfolio of equities, bonds, and other securities. With a lock-in period, these funds can generate better performance by investing in opportunities that require a longer time to mature."
            },
            intervalFunds: {
                title: "Interval Mutual Funds",
                content: "Interval mutual funds combine the features of both open-ended and closed-ended funds. They allow investors to purchase or redeem units only during specific intervals. This provides a balance between liquidity and the potential for higher returns. Our interval mutual funds are carefully structured to provide periodic liquidity while aiming for capital appreciation through a diversified portfolio."
            }
        }
    },
    creditRiskRatingAdvisory: {
        description: "Credit risk rating is a critical aspect of financial health for businesses and individuals. It helps in assessing the creditworthiness and financial stability of entities, facilitating better decision-making for lenders and investors. At [Your Company Name], we offer expert credit risk rating advisory services to help you understand and improve your credit profile.",
        types: {
            bankLoanRating: {
                title: "Bank Loan Rating",
                content: "Our bank loan rating services evaluate the creditworthiness of borrowers, helping banks and financial institutions make informed lending decisions. We analyze various factors such as financial performance, market position, management quality, and business environment to provide accurate and reliable ratings. Our bank loan ratings assist borrowers in securing loans on favorable terms by showcasing their creditworthiness."
            },
            msmeRating: {
                title: "MSME Rating",
                content: "Micro, Small, and Medium Enterprises (MSMEs) play a vital role in the economy. Our MSME rating services are designed to evaluate the financial health and operational efficiency of MSMEs. These ratings help MSMEs gain better access to credit and financial resources, improving their credibility and marketability. By providing a comprehensive assessment of their credit profile, we help MSMEs enhance their financial standing and growth prospects."
            },
            gradingServices: {
                title: "Grading Services",
                content: "Our grading services offer insightful evaluations of various financial instruments and entities. We provide grading for educational institutions, infrastructure projects, and other specialized areas, helping stakeholders make informed decisions. Our grading methodology is based on rigorous analysis and industry expertise, ensuring that our clients receive accurate and meaningful insights."
            },
            bondRating: {
                title: "Bond Rating",
                content: "Bond ratings are crucial for investors looking to assess the risk associated with fixed-income securities. Our bond rating services evaluate the credit risk of bonds issued by corporations, governments, and other entities. We provide detailed analysis and ratings that help investors make informed investment choices, ensuring a balanced risk-return profile in their portfolios."
            },
            commercialPaperRating: {
                title: "Commercial Paper Rating",
                content: "Commercial papers are short-term debt instruments used by corporations to raise funds. Our commercial paper rating services assess the creditworthiness of these instruments, providing investors with confidence in their investment decisions. We analyze the issuer’s financial health, market position, and liquidity to deliver accurate ratings that reflect the credit risk associated with commercial papers."
            }
        }
    }
};

console.log(consultancyServices);
