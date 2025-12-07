// --- DATA ---
const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Volunteering', href: '#volunteer' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
];

const SKILLS = [
    "React", "Node.js", "MongoDB", "Python", "JavaScript (ES6+)", "TypeScript",
    "Deep Learning", "Machine Learning", "Data Visualization", "Full-Stack Development",
    "Team Leadership", "Project Management", "Strategic Planning"
];

const PROJECTS = [
    {
        title: 'FundReach Digital',
        liveUrl: 'https://fundreach.vercel.app/',
        description: 'Led the implementation of digital solutions for fundraising, stakeholder engagement, and beneficiary monitoring. Designed and developed a secure, user-friendly online donation platform, ensuring alignment of digital transformation with organizational goals.',
        tags: ['Digital Transformation', 'Web Development', 'Social Impact', 'Project Management'],
        imageUrl: 'https://lh3.googleusercontent.com/rd-d/ALs6j_F-w7xggMLtMehuK2Qotc4c0lxLci7pLzY6acY2eR406qiuhbnvL4iHPTWqDzeIr3Icfac-l3j1t-8ORi9zcYr8Oy3Lo7iN4TXdm7a653raKNoz27ynfViSU8r68mqL8DRAFkMkhkPMxMPu3gkvadZaDY4FmBBH0-x0Tfwg3e1syMJoymWmCDW-lzgYSJgnZ2xFesKWXcnyfZirqCclfV_Omvg80LyKkmmTGfXpeTsT9msj_eIQ23QLNRAv2LzMBc5vmj-uE2I0T8cUF_-IInzMXbtIACsAW5NRkXRRiIvEnw4g5RnfAAa2SZq6OCe4nV0VpmwEEN1s73RFwvO1nRUrgY3mH1tq5jBJbw4uBhS87O1AUsVQnVUAWZnOuHOmZl81OEA9dDm_J-6yhZRsFcGqli4E3stGBgfvNXftvezXjayYyLvKN2Ns5c8J9jfrEfFtpVJUlrbEBpTZfoumK0buSwanh6lyKkOrWRxDp7mIuNzBbcx1FfKJr0mykda2eaGGCq-t7ui9qs24YIaa0uh00xWIw3AW7jk8Je4N1tRH5KyI8RoKk4_SM1MAkseBwPnLoxpifba0dd1ZrsLMQDiQ08guix6maYYwq7VoVBbCcz0t-h0UV-f4_MIwfPaRiZJEULuqfI8vgQY5uY3nG--7HT1xU1II9PlF9S9OKZeD3u6TfWM0fU4W2Q1f7QpU0OWsgPzzx-SBDYCVZReZcPqEEDmTG79t9d1m-xSx9vJNj_sBvrp8xQr_qv4iQqJzdAtFW7fVlmbMmkO0zjhSJ0rBw9Juzq-wEFxSYC5FuhEFHQuCTLNoKa8YHhMTFzuqGAyJCZ6p-Q8-yxblsWImIEHdhZecKBuf9xBQXzP4CWN-ZcK_RIBsa9IRynS75JQAq3cer_MFA7MLyRBemTLFD-4zrRoZL3L_UIlvk20N47RaXS0Id4tec9PZ8a-Ijk_JalsVgy58I3C3R5FTuGQ0zegHwn6PGpiwhKxzCQaiVwb_B167XIubhq1aeWroVZc7bQpekVgrVkyP8dqtJ76w4rvRYi2hyP6QfkvVghlsi09dNAHSnsxk4ISOpnjJhUcEE6cIKv09lp0uYfTPpkn2anDgWgW1eUuoGwIaKS1hSlKSXLXdvaY=w1910-h982?auditContext=prefetch',
    },
    {
        title: 'EcoInsights Platform (Tech for SDGs)',
        liveUrl: 'https://ecoinsight-plum.vercel.app/',
        description: 'Designed and developed interactive data dashboards to track waste recycling, carbon emissions, and energy consumption across local communities. Applied data visualization to clearly communicate environmental trends and supported the integration of digital tools to optimize resource management.',
        tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Data Visualization'],
        imageUrl: 'https://lh3.googleusercontent.com/rd-d/ALs6j_HqoekTJTr48ZioEv6hOJ7odFWqmdFKvF_psSpU2dbeaXhBjv2ITazU-Db6tkPsrBZ8XhxHJl3KMsu5Mp896uCy0uQLuqsrHO5f0YIliSpmQ92MnrmF0sNFb3siKv1n-43yOBF-ADoMcqtEsBhORb2YE_HoUmDUrVEAzVJ51Ct7oZEvlw_M8dwuHszlooNwsKTnnW0vh3h2siy5K2OKv508TJKev2eJTRtng0VG-IivIf3HyREoOvn6JxpmNpJtsenJlIETZBGumOT4YcYx-ZGsXfG5jeJG4UNP1HL-4NYrzYbgXP7xl9Av6SQ5qsIrxha9g_zSJrtaglKikk9mYS6Axoajzqvmq9fJpJ5rNXqdnD3JIivi8pYIfJYKbfuGTSWMbQsxG4zId_9ckmSPrpPYv0Ljwi3fEqK9Z6qHN2MOX5rAggCsPWoolhqSYmQBLmswHXrNma8_BLZSO_FMQ8ncZOONYAJmL551UcvHakeKkLseMzthkWiVK1rm3SiPD4V4NljG89SigX8JtWfWL0obHsBdshxX8ozmnQuFDw6rmoeavc6VhdYnfBICWXw0qtcR0W6H4cjnUoi2HI1kN8uk88N6Il3-m2wA5r3bqv5tFRXDyia0HfCPbhbXpZ1OiQhQ4oBKD1pP_OcuzHU2SZfNTlZaeJEUL2W6zq0HUUlvM5Qe_RMOUs89IAN_kSa4LyA8uaaBFZMLDbmsCa_IjTIyOFvV3TfhwLxePFZpy5jUvB3fE0LoqhZdW2Qy7MATo7Jfo9X7rxNDhpvmvEbvteHXMypgTifOQhC1uwoVky-cAvN4j8e1ai2xJKk3PSYQsnGGaJHuJUbSt5deLaGnhspico1vQp7hjNj7uKLsCCn5qiuymOOBY8J_05tbsMhINK5mV7H2Dt24lLVGs_rcXgxMZAC9Y9z4-_ZdMm4ehkkcX3DzQsQ2WdyPSNwwGMdazpp5_Fn2QmJIP4_NmAGQJ7epep8txY6Y_YOnJ5HgqyJgc68A5Cv9m63FaFrQQ21xnoz03SdUeMy5-YYCQZCDFL0SBXaKxg8f8Qfd--MlgilCZv9ovD2AC7UEeSue7f0xw9ypqyiFHnA6EYtv2SsDv5icjzkUGyeZbCDuFqdVvFjRkOFSb2A=w1910-h982?auditContext=prefetch',
    },
    {
        title: 'Plant Diseases Detection using VGG16',
        liveUrl: 'https://colab.research.google.com/drive/1g_weCIAr53aYuelcsbeVp9NqR0X5UqXM?usp=sharing',
        description: 'Developed and fine-tuned a Convolutional Neural Network (CNN) model using VGG16 architecture for early and accurate detection of plant diseases, achieving 92.96% classification accuracy and outperforming traditional models.',
        tags: ['Deep Learning', 'Python', 'CNN', 'VGG16', 'AI'],
        imageUrl: 'https://lh3.googleusercontent.com/rd-d/ALs6j_F3z3I3ndOLKW0cfnQY7jKd9C2oKGuGTlzcHG3hvoI3uVw_UfJZA5w8ToN7coE0Dww2Y1mwscEV-T6hmSkSKWZECKHlL__rMcwFJyHwaDXwfkncXrlwAupghv8_txl5TTuNe4oTbMAPziNfaQwZ8cLsYPvl9R0j8PbkaaXE8gXqa2j9oAswWF2b1b-VxT6b-m-vvLVuPdtxJs9mCsLxJe5ufXWxB-4Ziv2G4KKtr2NUVRUWUO_dJn1zlXAQNEh-d3tVyd1kPtIGiGkyluWVwSaWQ4hoTNV0ZiM5RQXxHN3Q-o6IGTXLLRvvaNPtx444ycSph_wqEGJ2_IhbWd4zQukdMArqE8eZf1EWe9g4Trx-Y1RTpJWceqdgVmGyLJFhVAACdccygrUBsKGVdlMDFTJRu2f6DdogaghpmzcHaEZr0ALw6kDG38I-PXqKO0XLePXPezePkt1O5SSDU5WEceaY73S_XKzc-V0qdJsUMDBMuaP6llOrDEELmpYTtY5rcE8S0-oLdj7oeOyC542tk7q4I_8iwjX_OTMTtNrX3f-KQtaVliqkikGDhi90ZKjGgRZIdG2DOevuDYdWw69cq_o6CzTMV72zWzgO7Dy4C3nfWxk7gnakD6I8nbmP2VLVgKpc3RqQ4wjX9lrN_0iO7HYPO_x8z0R4ESOY1YUox4IfeL3hx_zJr-4vriRw6ee3qQoITgEX4KAlkWSkqu7C8k0uA_VCF_amAWk4JCDCUI4XSz5MoxVSSBiXxLTRlA0j9eShcNx_l7hR84hVj32aymh4D9JWLAfl93gCJVEDovMcH_V-HnGlFblAIjMvz4p_wmoLgLmNpqZoLzX4opcTjGuq44BKkh6f2KmbpuesGy4ViHoszxg0xXYlNXEqOrSRPsu_H7QC8jjQvSZOsUXmbfKd1G8uVtzqVm-bysFE5D8u_GJF1jmCYWVxRqzYT8Htt--B2ClRgUMVzmmAIvnbyCmSSpOM6iSHipam68o3KI47Bb3dtpTUeKsOoPSN6q7Qem_M76qOrWZIwupNWi2LYOfRHMJtoRg_tkshGhi_AjDSi3-YkvK9h32Do4-182BPVJc2iSBEy0Bc9KwnIOfcAUotO9BmcOe1m4a0ZBWSZIztUHZrQs8=w1910-h982?auditContext=prefetch',
    },
    {
        title: 'Construction Operations Suite for MB Construction',
        description: 'Designed and developed a full-stack web application to manage construction projects, finances, and operations. Implemented modules to track project progress, income, and expenses, enhancing operational efficiency and financial transparency.',
        tags: ['React', 'Node.js', 'Full-Stack', 'Project Management', 'FinTech'],
        imageUrl: 'https://lh3.googleusercontent.com/rd-d/ALs6j_EaCh3fo1mfoxGhZid7RgoYNl2zHu1ltBCR6hpNvPprEI6MYtWKkZcFqrdH-UgprNSSyLgpWQDaCyHKwgn0JdjsKQNrPqCBbm7HCPbFKGD3n2Z5Mxq8DBKyY8c1VbPAYiomdJ8--2Hjw1fFkZ6j6m2NDwIkBa6sV7jgCKPDmskI8sM3BrFQtt2Es5LZ0pZu5eXqv59-QAhZTEX2QUSdeheDROo9ZSw5_e0Zcc_UQqvQNzEoojuICptlvOFf80_MPuVcUo3FVnnrit5wr5FNho1ikiiOIhvzvqmWuJV3y_JpUZBpb7HwHmn7oEh-WwO5J7Kv_Ix4-bBY4PuIFYTx8AI-Wh9nkp487guM9xbkyWqSNI1T8j8ryB5yu0DiavbeW3T_X-TAmzh4XzgWkB7vZ_999fNSMG1r1OwObuac17nVxZaw_NynwX-mPMUg427dETactgGq3vEykQ2M_4dLBe0KgEwCpTVnYmk8psrKksnXZf0RzY3PzjsPzXjVKyZ_QvVhWoHAYwHx_31B89SoroaIrQOslOrxs824FskDENqoZdRMP8cZmJZClZPv5uObApmr1U5IGAPcMKPhpPGqqMoBQLNWNbTxkHUQxVbuX2NIiqTZKssMBZb-6_7E1HvSGZOojUHjsDO9opDPQHrkdE8VfrPNO_3Anbm-6Oh9smFTdT612tFpq38DNtXSpR0vCE7oUiJuhPSNqlrTmgYNx_r450VUzdPx4Y3OoVx_MprLAnu8ytxb2pXZaQHFjJlVm9oxhisJq0xJz-16-UjwP6dhZJCoWis1fVHWSGqqfYIHToDvAWIfnrN3fiGusszMk9PIQkteqvDP9Z0rJeRYT2pwnKUcfVzQbmdd-d85dFDZxWRToFCWKY_IN470hWHWsMK7gTN3ZUcxyEHff-LMLmnMBQse6Ixn_Ft2qjpKu0e2WoiF4NBQ5LUOZmn7Zs2X6sDTLYAl9BROqblTR1JDjKhu8BljNlhcV_2pSGl9mOzuqPittaWpy0S8T6wp-wmnSiSORH2aEZ4bnq_2vBvoK1thYDR3ZZod2bjDQAavvZW6JZKnULVr7ermNINKRUHRE7IenzS99k2LWUIqK7JGS_-Gz6gjJ_2l84Jw1mdWYgSnDK58Og=w1910-h982?auditContext=prefetch',
    },
];

const EXPERIENCES = [
    {
        role: 'Co-Founder & Operations Manager',
        company: 'MB EcoConstruct (Rukum-West, Nepal)',
        duration: 'FEB 2025 – CURRENT',
        description: [
            'Implemented digital management systems improving operational efficiency by 30% and enhancing project transparency for stakeholders.',
            'Developed machine learning model to optimize procurement process, reducing material costs while supporting local suppliers.',
        ],
        skills: ['Project Management', 'Financial Planning', 'Digital Transformation', 'Machine Learning'],
    },
    {
        role: 'Project Leader',
        company: 'Undergraduate Major & Minor Projects',
        duration: 'FEB 2022 — JAN 2025',
        description: [
            'Led cross-functional student teams developing three technology solutions addressing real-world challenges: AI plant disease detection for sustainable agriculture, personal cloud storage for secure low-cost data access, and Smart Education Platform for personalized learning.',
            'Managed end-to-end project lifecycles including requirement gathering, resource allocation, technical problem solving, and team communication.',
        ],
        skills: ['Team Leadership', 'Project Management', 'AI/ML', 'User-Centered Design'],
    },
    {
        role: 'Project Manager',
        company: 'Earthquake Relief Construction Project',
        duration: '2024',
        description: [
            'Coordinated 30+ workers and subcontractors ensuring quality standards, safety protocols, and community engagement throughout project lifecycle.',
            'Managed construction of 21 earthquake-resilient homes in post-disaster environment, delivering immediate housing solutions while incorporating long-term resilience features for vulnerable families.',
            'Delivered homes meeting immediate occupancy standards with limited resources and tight deadlines.',
        ],
        skills: ['Team Management', 'Quality Assurance', 'Agile Methodologies'],
    },
    {
        role: 'Educational Technology Volunteer',
        company: '"Art of Giving" Initiative at KISS',
        duration: 'MAY 2023 — MAR 2025',
        description: [
            'Tutored 50+ indigenous children in core subjects using creative, engaging teaching approaches to boost confidence and understanding. Developed cross-cultural communication skills and utilized community engagement to promote inclusive education. Addressed educational inequality in indigenous communities through technology-enhanced, culturally responsive teaching methods, significantly improving learning outcomes and opportunities for marginalized students.'
        ],
        skills: ['Tutoring', 'Communication', 'Problem-Solving', 'Community Engagement'],
    },
    {
        role: 'Coordinator',
        company: 'Binary Bomber Club (Technology & Management Club)',
        duration: '14 NOV 2019 – 12 MAY 2021',
        description: [
            'Built culture of collaboration, creativity, and peer learning within technology student community, engaging 500+ students in skill development and knowledge sharing.',
            'Coordinated college-wide programs including workshops, competitions, and tech events.',
        ],
        skills: ['Community Building', 'Event Management', 'Peer Learning', 'Leadership'],
    },
];

const PUBLICATIONS = [
    {
        title: 'Fraud Detection in Financial Institutions Using Machine Learning: A Comparative Study of Logistics Regression, Multi-Layer Perceptron and Decision Tree',
        authors: 'S. Sharma, B. Jha',
        journal: 'Viksit Bharat@2047',
        year: '2024',
        details: 'Vol. 3, p113-120. ISBN: 978-93-6678-383-3',
        url: 'https://www.mahipublication.com/bookdetails/viksit-bharat-2047-making-ai-in-india-and-making-ai-work-for-india/NDg3/',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_HgCvFk5T6GF7_a855FRd0f02Z0QaFv1OuHxai4zGvFeFNC--ML_ZuELLbCjIdaFzs_oi_sY_NHSBBu6M-ijz8dVJ_x7PFbvbTOAiBkwTf27cRaAXPmh1rdu0P6-grI1DBSjtn7rrEgQrgpdtrU0MjJzNV86duduHDNu7vwBcHYyk3x8JCbPuPb0B3T3TYPY8My-tDZnJWKvEk5YGfVCG1rKS4Vsq_f0OnQvY0vUXneKa_lyhw4CGwt4Dutu5s8BE7zGSjB6p8bGzldg3igy6lksr7xnA1UFoww_KkiPdxo3xWNljQUpAkdvBHSVuZfYMwlkWSJsT0ta0J7Ar3q6f3i82f8judkzd-wn3KnpMHhKaByVK6nU8vrkSa_Ay_7Ab6DHIWRYf7OV59WIvDtm1ZJejzfkyRmT_2MThfYtpz9JaFk0C7fB4lYvKsMwZdcFSRa8Ie77ifUXcIv06dFicqvCrSdXnEkb4i0FHiUiOvAKVO6qv32yFQw49Xqc38Dr9whYHEmaXXVees8N2Ce3ZEQleNfpQPhej6gO9RsFOKwMs_gPbW7UIELH1hpIFQDK93spUWMhvG_JgMFOjOYyaQQxzVn8_qNMsAtst4cWH8Irvdvhl3K6rnFQBM-JfwK0ScF9FRz1qzLNWnKxXcpp3Iq73qQ-Pujl0G4RwNOoWkrUe9z_uaroGlJPMyc_E7baS1NSFaJ9fByRdvP-aPIU3o5l42ypewUeAw_lisJ0bbY9tFPWJlmAi7dhJp2BtUCDIbrob6T2L5Kak6JlVcoVQ_Qiqfueff4qTp8R--LVwa-UBlrGUbvRiaBMzvmZay_lcKCY1j5PHZisTJ0mh5hHpV7s6TEVDkoWh_XESnlVLW3aA_tUNJv66O0_sUSqtAWjYeefl28FTBcWVmDSHOJUgf20tVxtToszM1npzDUIGS51S91uRHP0LmxqKkp_iwWiDtT2-DX9LOaxh5xnNeaUekV-7lhOUrZc-w-POaWM340ru_QaykPeOwKehHy0D3fDHSvP1UyhxhYW9PJDADcbwm5gC7hfPPihuDQ1m38hks6jJB2JciDNlGxqpgU5cAseBRIsFkXi2dgzerC-pnuTRlQ39gt8AJLgxijy-THjoDwijPXSw4=w1910-h982?auditContext=prefetch'
    }
];

const CERTIFICATIONS = [
    {
        title: 'Ministry of Youth Affairs and Sports | Government of India - BRICS Youth Council Entrepreneurship',
        description: 'Participated in the BRICS Youth Council Entrepreneurship, where youth representatives from BRICS countries gathered to discuss entrepreneurial solutions for sustainable growth.',
        link: 'https://sumansharma59.com.np/brics_entrepreneurship',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_FeK7GIkK_M5fPMkjmMU0eLBZLR2fQ07KVqSdw0n3ui4aq1e56n6fGCxwdkUsmzKkSbWdRn7oBPKgNq_BAxW4815QYLRg7tznsFsieGf-vbXKDiht_RkvVr4FMQqNQ5i_wNQycm1aorSQr7ihemvIwBa1U4PmXbj4IuWdQQnrPQiC0am2beZM8dVKgWDOgrEDyTAn3ZY3U3x5jNfgIp6SyItv4FSdIfWE465_L2A59imykvvsXTpgdiOb7PgGUwNXWBFzR-6MFeT2lkvQiP9MYglgtwHlJ22rILnK9y65V5mtyohe17ghdn53dowuKD7FkhH3O_NRasKVfGEwmQas4VDAr4jIgIXduVMeVyufTb-jYefGtZvlDdXar_dpuR8IMWXF69kZ4gCcVHwJEQhAFGO9PCgQtdLZvOYCWI4ufh0l-E_1I1CF9YF5xLMXIOcIqJvduI3W9JBuGo-_jZKVdyX_q2B0xY8ROxjGemWS1Fs0kvO90ZW7zY4xfv5YsarI8oVXBN_FJygTwW8ZKR_ccZmXi7fgwzGER0kaSrgpDPxt-DRqTM5kkQF4gApEaxVVP50qUkmzNoNF1envB6V58Tr4rej9CKXoqoA_KoF4CgPpzVoTDExqik-nHiIGtlZiems-wk1vCCz9YTlxetw3h__LaojOiRxK6BcX6Vuk2M5CAgyQOuzfKHSxzsj0AxhWMiDwFDcN5rXLuVoTn_4yLStjWfdm9Ts1eRVvjKwtRkD86odFVVqaPY8A88T7xzADOOeNWQTmq-SX6652wUrd-HIzTID0uBgSN-Nw4M9JqI3Nr3WpiCB0LKOFQ5RIuwhtCGsjQQdN0WSu9AtZpNeuQDdAdB82siH20dzCNCvJIOLb7bLCWpbFqUi7OPY_I3AAUhOphBI0ZxkLfvy218_s3Gkup7icvX400cvDmpIiyeqh8YGqytE5NbPIszVXA1TV4p2kGmlCKLnX2arPoKtEIfZF5NB0iAEUAfWNS4XuegKE3IjZUu1aMHRgBc8N_Kl8llOUovtZDy0sxML7A4rZn4e0uupNeA3GlK1UXg9p9q1e946SwppaHgVNKC6Y7JOEUZ1IQrhIUbiGMoCtzPZj9H2Otu2Ty_IirJY0DIqYRTq1f7nAg=w3000-h6495?auditContext=forDisplay',
    },
    {
        title: 'Biodiversity Finance Designing and Implementing finance plans for Nature',
        description: 'Developed finance strategies for biodiversity projects, focusing on sustainable funding, investment planning, and resource mobilization to support conservation and sustainability efforts.',
        link: 'https://sumansharma59.com.np/biodiversity_finance',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_Er1Pjg2kcQV2pBqCLaV4qHLqXJBw0B_epXipZ6bY4EHBUs9HID74ieQmfi82rGjyupy73ytYYy0GnN8EGUc-BmHp1BpGROzyx3N3swk4egkBmX4u4_-99iPJ0NdE3l2SpCCDwZpVXh0hjXicq1AfH6HSVt98FgvYx8oVGgu5P4Vg9jHeRSZbr--f77RCU9932tlG5Q8vqtvkvMAX-Rmi-8-0rxrOjH2UvTa0vrDJtSnjqWUn5DC9F9IKAWZVnG_wdUqiSvpBQ1MI8OHbXhjmBYlwDSd1QxgzWEHf-LmByd_qrQCNvYWGeeByH0EXmy3UuadytIG2GpQuH9lQOLoMYLhPBYMxt7inTcedE5jiNYS5Kq7kGwyK5TKtc_mJgdtYkMbagLwBK8eZJGTJKpeqMlyWTviKrQb6YgMUiiF2j_R_i3K1WsQYR-FiBqZhl5CT-kLOYgtSGUe94QXDz8chIKHBSpSs9AKrx34axH1SkwCebCps5PTSbB__ChKJcIdPcIyM08pVw5SU0WTw1JFCKsItEkv7uG-kkSr0mtK-WjA_JxQa3XgM2NpNl_4jQRvuyMCYvfBra2o2jPT_koyZJvus0xb9RB5biPAuvkcaOS02A328xYbNRPlqXF-CQtDEaUcUOu72fdWHU9DAIANnJM8CCsXYzczlzMQRzeDdTd3_hoIvKVicEzmHBUqvnG-mRKo7nqY673ogFTz9BvQ-VvP0yc-HHnxtHcFd19_NI3ME53qmgqLPU4dzJM8E6dMi1c2LQOgXdqHsaIJQwQjsSwJtVLED6pzG19WmlXfxV2OL6IBf-hWv5-qc-UlRaVqOgaRArh1Oq3_KGSbCsbjes3KTMPWuTfcQDMO7_XBLSN2Wd1ON5lJMvwvxzbNkaEakhPZT9xZwgT-3EN-LfCAE-YRy9eujoSJyI5S3CfgAGIIYDdFFvjNJNHAnlKsrh813V0q0Q2IuNhSKYDxfRMkfhB4nUBDM2ePxv2O4Z0AwJIK7P_GuwP649zEWcpUzTYFNEmm-TDdoTTUTY8yY7v8Z9I4qjsF1VYubS_jLV7-wDaqCSyZTvlHZMMLhfcvgOWwQAzpqtE2nFvZAXFcZCW1d0AZHrq5CnZFAfU0MTx3nrRYu-PwUM=w1265-h982?auditContext=prefetch',
    },
    {
        title: 'Competitiveness Through Enterprise Sustainability',
        description: 'Gained insights into industry best practices and real-world examples of businesses benefiting from sustainable measures to enhance competitiveness and long-term success.',
        link: 'https://sumansharma59.com.np/competitiveness_sustainability',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_F6xG3ZfYCuUK1WXEgXfxgYS9JKRkIclnPjbsNrMBUlVuZu-zbqanELe8eiXyRwvOiW_5DsFTAK3MYy5ZSehuBb4jQqPCPsIBNyuMCnAPnFoRB_0m8bNpltrvyhV1hodMVPkx4-ZEeD8c9wF-7vjiwDqGSxg_CjuzJ-9dzV8WTp1XjcQyfsIAm6GHXALyB6O68ahX6zG-2gMq-3xEkYHpVaq-SIXxslHGcEYfyYSPxVCkqMFAln1d3RxulbkzbQjeZ5NO_KHJ4u79vRG6vAhuW-WsnhSpSneYkuSB9Kl_Nrlrbbw5snfy-iSPWX8W1O2PCCpeKNBlcNW0cMuDhtiqeSiPhGpavtKVAmxuk7uQYHjIawVchEpApJ4bzV2ZL5ILUyGGEzkQyo1yMWDPOr8KgFgjfKFU8OtfwFlV_IwhbxkG4XTG9vcHXQEgmUH_aPBfJk1zEPvSNnBNIrldy5VqW41F0AOajUocHxSXk1iM7b6PfzGmvC5emZ5y-UHuuQZVegkZRC4-2xniSoVZTd8DJ_pxbhVlXZ09865yRbEGWP2ytltxsC0eKH_Xbebh7602EtuepXoULa_bJkkU4tu77z7N7vMo1WSPyZAz3UAxqinbqvUZlyr1Fly9Y1tTpCh7oSB_hG93m45Wb5ouPteOCs0EbcfQEYNW5aKtMNrFYPNQnjqJ8vtNFzOqDLYFL8bRyLVLAdA8BsCLleUAT2kn_3uu4JaUlnJ3KOrKFTjBdlDOPfX0mPbgmdbfRaw0eLNT0updFYTSJMMWS-Dp0ymCFM2obvbAT4JRn80-bXzVyu5R2bBHTk3Dr68iDejyFGMTRjjFWGOlPfT_A2ktTGPsVdnd5Yk6CmOEKogNPk9kA4HY5dv51s02D-DWqyh-8kNiLgbf4xGE25qfD5egabT5B6alWbVwDEmGIgSF1DDRpLiBfbhvtcYnecw_BMIkZxLy6HYgRv4dFeuTjXDwpPaMSMiyG87cbx6sBz1s81DxryLo9wEZHdy_TxalUyZ3wV-e4p2TL_CPdSB5xy9NIRsV-xWyrq5l5KChWCag9MF20MDxIjH7kc7-VXTSQMGPqYHE6xp-R8PJFftcP-yrzyV_hRiadxnE8NRzo59vHAJWVo52HKiSw=w1910-h982?auditContext=prefetch',
    },
    {
        title: 'Introduction to Green Economy',
        description: 'Completed a course on advancing sustainable economic practices, focusing on enabling conditions, sectoral opportunities, and international frameworks to support an inclusive green economy.',
        link: 'https://sumansharma59.com.np/',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_F3u6N8OuBpBmbgT3Gv_Gff7q_erBa0-WmHeHwUquoGp4zmmQ16QuVeploFWzwPtK9AaQW9ReHrNBmsC7FwFo6ZY2YL2LrTksbwClsPhzky5ao4--1GhzJ_OFBpQlA4vndwkoyvvbN3dLcbmSvg6-mAPJZ_k3ub_HI2X9lVSoJQT9YJkpvyaNB4RDFG22pPL0ctKMqNAyUOda8AF9PXJMmnLXAMb_SxZEIkdxgyLAkPV7XSrea_44772YjLOyrgX0eGgip1L8ZKxtAPQdUUu52YDYH9mIrmYdaN4iNujXsHVbFIkUVKPwX_rhqAuADoknd496JkoM5O9clcCnGLED8ooTtWng3EKLdZ30iL1-PS5v9AEKnruchI2jE7lWmRuCIn1Cwec8h8-VmiY6lPwnNURRossNYVxh8xB5NQm3vE5ChbfNcFRARu_bGBDk2EVbJDaVat7egOPY2iww9ADa5EFHo2aTcEI9VG0tzbti1204sfl9YBX3TkbmnBVc3lEhz6i25KSuT30Jhn3tBGvxmRVlqNOZdclC8ZCW5LyMLV_To80hZ1VCfgPcwc2iAokR5fqBZfaEbL4e3bosS2cjaxXavW-GpvJLwEjz9gNtmH1YzVZ2OPIOSuoPdEmvIQ-5LzgJQm5L4ExmqjquX5I7YZdnKIaUIPBLPRS6-Lxynjsr_KaCYq3VX4AGARMo1n2mSxWrKpNzke6tiLETxzbxpfWm_atZra9uxknTZvnY5wNZmmG0Z0EtjkjBT2eDbWulmcLCbFjOzwEYl_aeHB-slDMa-GL3TRYz4WEl9JVKrU7v4k9Dt88ciFD9tVVg0t79kvQbstbAAgNCbmdMY0JTtV7c-ZnwTBJxB7oZVE4KoPQPtGQuoPYz43y80auiDbdudKfALWeHmZtiq0ZeKWOQoH6SY3L5hsjBFq4yOpn-rIPWVjoUkVuAPYCRjhLwyClpWcklphCq56032gFlGynzv8GAPA4hK3Xi5myNhMLOCruBgvJcd5y_7rOf7mlIaVz-jnruMG1Ltlw16_gtal5zT1bxM90uGshIMJzwLreZrxIlUpDF1JC_XJ9crmanI9yZTJRudHMwh22ypFcyCwMGbym_bNaP4Po04mmFH9y53dCGmKehE=w1910-h982?auditContext=prefetch',
    },
    {
        title: 'Art of Giving Membership',
        description: 'Active member of community initiative supporting indigenous students through educational programs.',
        link: 'https://sumansharma59.com.np/art_of_giving',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_EDrP0hj3zV7zQXH4E2JJLH-xxxVfdc9Fw_7AYHCR7pWuIZKUab7njLD5zWRHcHR6ud3Nw5zyITxcZrB6oGVEVpW8q-ZTBp94vebVoEij888U_0T6Pg_80qwCMUxiycTrtMvNSM-CIHlFRnwyA_B4tCzOiCM6Q_1NqLF3oRyLNX4wghBHG2rGpBxIJ7GUgxTyEnlbMjB3auExPzmierm1sLnyfAFWKYKSmRRMM9jprwYuxsSp-wI410XY5UEbSxiROIfcDL6FvIrwsQS_Msl9N1xGX5abyMcAQc8LDntsFd8k2GYynNRyPZaSfNyXbSVMG5KWu683YlU7GU7goZibpGX90esfZlFQqmwaEpZKI5AURqyEVF86GusG8lHSk9cM7Jy4m6UGG1oJo2yILc0p8C6Jz_Ui8k-vScsJTDAuS14-99ClF6dyKeVIDnuxjRihCVjStvZ3cAJJlEiXY0BEmMXHzCM8wG8ZMpE1-p_13v2gX25gTtZc7kdTHacFaMImxD6BaVk3SoeOWB9kDz-XKe2zO1pmurWCibe6VW8QRi6iDiEXdAfq2spSZE0IAbMFMscUopN0seNIzI4cePOJYqbJ2yniRBR3jPfV1BYJ67la4S-FojT6sCuH6lsbDHURDVaXoTIQ68j9FN6YvdMFLZcxMJH_yBXwcUTOSgszvugkGa16IXeK3NylMBDLClc-51vNWkXIbNNhXB5_uUUaDNhgfrfNNd6APJQ17aaAPqroPMdribioUKZxxiY6vUq-FYHkdayEM0vyMykdHKPrMzQlLbT2NPylsUkBSBAQVeVhbvLpG_jF3uAHb65hpdPUqLc5fIvxwrScSlRWJAO85075afCUsrBiLhNlWYIgLWWi9l9fy21Owo9PSbgZtPwtzTJC9WIT88Cs9umuQm6g-exkBk5ZsY5JOa3kwGD9ard_QuxP3vdzKvvG5O905vIkWyFVl3odG6NKbtmbXpD29zqhDv4Bt5Go7NF1d7i3zqFq5oMWwUEvwBOG1uNoedPXVqMpvhE3vWA532qgs5dtQMep1ptJKFwW4bvpXbiDUdgE4cQ2WHUAo35LThKxgcGEBFa88IZyShgHvTr7aW1qjHSMJfC7gekanUxksmQkMQHsr-WO0=w1265-h982?auditContext=prefetch',
    },
    {
        title: 'Y-20 Certificate',
        description: 'Selected for Y20 Summit, contributing to policy discussions, international collaboration, and solution-oriented dialogues on global challenges.',
        link: 'https://sumansharma59.com.np/g20_y20',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_H8OEnst0daa8PjGExdWespiMdgBxU6w5DEn3qIijmzRK-1JLl68IiIU76LpMZLR9P_QQu0c8jeEWU7QQKFqhjtDCDrWcaP2NKPMKIH3rJwAH7e8VXroF5VFaXIiL3ZtDAu3yOgvpJ1zC-ttuno_nf4it_it7R6AQ3MNn1pyxdVnjWvCrWZv8LO3tr9AsanciIYkwyS3fxBXMXvLnIUPKtQ__Pt1FKvyLNFPmZFe3zpLmrxJ8kyEWdxlBrTn5OVBLzkPrONS7d3mFpRotWmqt3c6LQxg50g3Ug3bNmYmNErbv_HqS2x8IjcoMJtZVglWB9_ym2e69_m9N6HEBwYffaygJibBPhHnTS92D35IVySdWjRQdhIEePAiHCeIWywEgSRSQnjfFX2GqdWlpfSVeLcqNpdM2uym1XVaSYoybheG7WONeNj2ucKPTbdgVUcdHhCEKZLtTeMhTbzOq9wJHN5Wk_bSSeV1iAQElpLArvWzmf2yHUjeJVFyWa86ASatnmMxmltFbyk5yIjtPhnsJ6Sp2Xv7B4fTQJ2Yrjt-L1tjCF4kvzuNf75FhSI21gttN3Q4V35WgUSgmNOqJHK3EmTEkjJc_H7sAquCmhCm5QJo5ZnfS9q6PTU4ROuK70YJ0iZ_giabofC8eMft75NvRH7r8yvn-SmsDKHq7E4uICX4l7mg1YpfkG5hKSta8lo6udPj5zvqpTDvgKVqYxqttdMsqS4kjvH6sReuaxQgLmW0VUunX-joAyuGlwiN6k5Klekz3NHWfBMPcCxHBltlStmkZIwMzg87_gDRD4Ua_XvBy0yi-JYs2hAHwh_pGjjaOZfJr_EkyIaR1ygHYrVGj41spP1zIkGZVmQWu6n0Q3OweNNewekDK8bNv6E7vrO96699mqYpLDmSL4u-i2d9jJYaKeK1vOmLJZ8Pk0pwVxWpGu9sIWQlW3-S1PTrvXArCrNAdZ3Yi1Kt5Vu0dbyhKggTiuSxz05C0RHQsCcdCpcIQKUE45ZQn34w93DEV2ZJfjBG2nwY7eOxnxVn3_iKuh16WeH6J3yruCDdwkPJat-OKUkNkFGWe0Gd4W8XbNv2nsghuorAWEYCG4raZSu7CZcphPG63YTGs4bLi6mTkYjwNjaxOk=w1265-h982?auditContext=prefetch',
    },
    {
        title: 'Student Committee Certificate',
        description: 'Developed leadership, teamwork, and organizational skills while supporting programs to enhance the campus community and student experience.',
        link: 'https://sumansharma59.com.np/',
        image: 'https://lh3.googleusercontent.com/rd-d/ALs6j_EI2wJhg_WwGjtB6oEeNrg3Yir9bzCl4klvqtA8JuL02o6vVpVYYXO01Elc2kgfJAskGQ1NSFFHquLoNrdeL8XXtFdHDdrYQGZ4zFSnr5aYwkUZ2niUAKZ4XUFBo_zruxVRHr-tzNV2Iz_zKn3sBcspRFdxscrrQK7CmOPdMiVo_Ob5UXOKvxxQY7s61cn2nlN5YPKWdXGeWqzmiUkvey6GoYjJy3GDLJI-GHFrdVXny1s3cq5akYpKKiTgtTXnAh9vXtHZNJN7laKxXDQGoh5cqchYNzQHQsuChrAarVMkdKO5M3tXGQOuz8PLHR322qB9lHszryMe66dWogbU2HD4DMXuEERfR3jwIjdXArZWO0x1ykI7k1iRdg7jDrgkv6-JcoL7Ovvx-pwMX_DGsrlYAiX9qTTc8Lc72xVOK1uUtIyzkvwDSmVdBhYCmctWFmEUgxZgj0xkCHJ56eOneKZPd-R5c8EmDIAphnP1WbBGTmbx-lxdkrEPfZUbNAU5i9ZhQMFEF-WX2tJNxRsUCA-EfmpWFSyJszWNnfefdPtHonFMhiQ9wflrtkYbunh1pr5GlEsw13unYM34Rj9G6iQL-DtE0hoXNCmTC7CWNX6KKKxTnadA7bdOiYY_ykx2OiaTywnPMsHV0BzSlMpiBXFNMGq4iJGId7RDgwFffqK4L_DbtNZi7A3d5PviG2jwTQIRFEXwveNckf783S9Ztsuw1b-D3V8pV5CoE_keBrMNJ73VRCearCl1B5kX9q7SQnovDoi-7AtcDaRxbdxvYlqUUmFsHundZD-M_vilVMGCqI5KohzLg5qRHpdCh_cnTTyeYiFbSpRwlrakjRD93OTOQAfDQdgDOq9NG443spKqIgWQyPZSxss5Eb3XPs2YkoliBfnalr0LrhMkfz2tNJg1kTDOQoN28pYyaHegvc89mTPSdHIX5lAWXCEVGCe-e-O9BFwuqilArVm9FzQ8Ciwn_k2N2C1NZwxtpd53yK4RR7X_cAMBDX2HGeFdBbeC3i3Z0EztLIDtk-pzFb1zUANJOHvNJZ-JVJpqqaw_8i6R28HETtdDjM9kWkWj1XxKYA82iMqvazgGcv5uhVZdl7YrYRleRuvggYikdB8MOfUW8TsYnw=w3000-h6495?auditContext=prefetch',
    }
];

const VOLUNTEERING = [
    {
        title: 'Educational Volunteer – "Art of Giving" Initiative',
        location: 'KISS (Kalinga Institute of Social Sciences), Bhubaneswar, Odisha, India',
        description: [
            'Tutored 50+ indigenous children in core subjects using creative, engaging teaching approaches',
            'Developed cross-cultural communication skills, community engagement, and inclusive education',
            'Addressed educational inequality in indigenous communities through technology-enhanced, culturally responsive teaching methods, improving learning outcomes and opportunities for marginalized students'
        ],
        images: [
            'https://lh3.googleusercontent.com/rd-d/ALs6j_F0Yk8hdtKYBhY2mGwJZ82mHzZH-H1QbsbZdF3qQ7g5jIlyN8xYCUDKHj-csKY_5eabsSphR8brAnDcdHScYipxoDb5m-D1ak4Y5vtshpTxUtuvRdPzOTWHNrO598UM5tmrCNqkHDqXKwwho5rQYDm7-3kod_mFmZghlXrTMaZD715lKN3clexUsVDz_e00gPXZzmfQTh_mdvjHgjHewwj9J8H_LpJAnm45vcFRCtrIxDCSdoqzXE1rzIBR_YwX2ybPxK2DUZ9gcJGh9LayRvknKJtTBPR-dlHVuKmw7x90RIMnlaZV-HA-qbwnkazpCV8cyHXnYilQ3bFRv7uBXUPIkC6ywaKD_LdiBezriLMr_kuk0qbSZtoG-8KHlw8wa9tVauLnHKOakMPztYezMGhgJb9sTdkwkIXcNR8mbcPJENpp42tByzA-6SS8PfjvwLB-K3z1oLAyL8jN-PcyzqmSGjL6M2tHzObVK_ZbdHY0-rnrwPmhUrN1WXfxqcAL7hFxiRHTLuVyVE8yXLycrfsy3j-1RztzqJ7Ot8O5KPjhiTp4PzFAhQGBsStjqd1fDxZBksOQJEHAElNoGTembuKdNx-K-iNvT5cBEf8P8Yp9ylU-n0rZkCCPTkaW-2Y4pmFC4Os7YOPGB-C_IIlPucmK91Q8yyBo1hY5z0tYbD6g2EeUrhVnE_lTYSh9FLTM6xQiopgSKHrV5YxUOWX_-OmJ0rMcKnS0ThHTMqJ-vUukCp9roPQZc_SqgLPtYXFeRTvEERj2Ru_wZQS3yWNee_TOPQZaFjZSoKW9ABDw6dtm6C2g2nc2OvwEPUP9fWEFF7NexQiT6bJh7JxSVGhPS-pFBU5xg21ZfbCKwUzK1yc6HYgX7UauxNIuueTPyooKY69RJJ2K2m96DyEwhOgxiv30zOZqVhEDFvrpULK32Nt3jSnU8eslLQu2p_PFtaH2wK7DOqPG6WLWqly3zyPxZnAesuTB0K8_mzuOcFJJd5KluKYuMEdSPtj1e2Axafz_qZ6WsEqeV2OrKEKsG4hKvoF1FuWnhTjPos9LErTtqZDsqb8Nl1E6e1LXj_iSzwHYIIhmTDgaR7exPQDQQTGenvTNs1kxs_IHBtsmjpwn5rdxULUWa-Y=w1910-h982?auditContext=prefetch',
            'https://lh3.googleusercontent.com/rd-d/ALs6j_ELtOUKy3ePx5FZSNZ2YjY_MqMcMKWu9LYbPfEAEWX0Nk-uB3hvq_7aaRFsVJYIrSR5GE9rZBM7hXT-CnNI1WPME4UqMlTq9CvfVnsjlI07gSSD4Bs2sjWVEwxYHuzgEX7ZZnk5wG1CeYMYBrLDYk2axpjDs8_sSIxGps4Y2W6CSuRiusAhArnO3Dl5mRrdnyvLGlFyKl9sr0lPF4m8fJtD9AnHEnz2aHHjgj7dZuw_g11z9ijBD9FMHMXvm-gAe27EBCUmI-zmbrQPZFjlPl7dH3YKbf_FQIPLASZ0g-P3XKjM0NQqliAB-fbSBerhzR-jHGVFpU2xGcaIls65wIcn6-DxMB_rxfcpos2TJbaTkgk6ovGc_CbyqG0OCGG43viUvVYg-8ntz5UAu6rTTHeE85t7Hgx94w2nyro8m3y6ubSXUxG8ls2eQto5mpJHhZhrIBGXPRtsKNduMj4roUo5stfXZFwswxW7MQfCU7cRGGNczwcW3Q59BmXXrGdl7jK3_HS7mYEPRnQvXuU6W4Wm34GyHMggqJGdG-jnOoG0-vWkUqiQ2WSyD6W_cOzycxz27eHzvlqCatxNeVZcTvKf-jHiKnipdzz5mWajPC3utrpYWSsZbDi8_Qg4VDsHj2XT0jVZ2j3yhz7bi6mGBFxi3SxtTcuD0ENgEUW9O3HPf25o6Qr3Mb2fnTvRHQZ84j5YAx65HoqxPFSgASmTSgcFfBzTMXNKj8-_pJnqBXbA0agzKg7aR_vfBY5l4PiMgriwio5tLO1iCfDn2tYzpCtfZzoBSiHVKtRsDjysWqxbSB2nBe4qOa-2nZ6RH57SL1_lXC4jL4hzaQnyc81AnDOfpOkdQir18b4ZPp5dazXv9qTflVbt5IKX1umP37FlYq6pt-TCLbvoWy_ozmGKzs2y6coWqdWBj1maKI3WTHZGEbplKHHXT7qQtbs1587igqpClK1BcfSXxkUKQOscNMpFPRv9EyEzZskHqVAZpWjBPJFvV2nrh-Pk4Bye-UiAzXUwqbb35cungoDGIpR3e7ZQq26ZkHaleNX61RV5i-eRclZHPBsM73rxb-v6sW5Qh6z-B7vx7lrM7zTZgRR9two53RRx2BMlrYQZyUNMRwMItj4S5XY=w1265-h982?auditContext=prefetch',
        ],
        duration: 'MAY 2023 – MAR 2025',
        skills: ['Tutoring', 'Community Engagement', 'Inclusive Education'],
    },
    {
        title: 'Volunteer - Human Development and Community Services (HDCS)',
        location: 'Rukum-West, Nepal',
        description: [
            'Contributed to the construction of 21 homes for families impacted by the 2023 earthquake in Rukum-West, in collaboration with Human Development and Community Services (HDCS).',
            'Developed and implemented sustainable construction techniques, promoting long-term resilience against future earthquakes and contributing to environmental sustainability.'
        ],
        images: [
            'https://lh3.googleusercontent.com/rd-d/ALs6j_Er6jeJt1JIM_jLRd6VqKuUe_7gQC2y8oEDL0_cRvLsLpxTUwehkpTA9Z3VfGBYXWwOeXBhe3I6y59Q7aLA0dB8u5Octkp1fa6RIJdkzhgYv3y9uMHoC-Xlmb5ogMbm4YVzo7M87HlYWYpGEqP9hd10Dql4XysW1LHaOqmgIq_Rh352Jbe7RUjF5PSYes0A760UAQhP-eanEgT7et2vKZg48uzgKd3IBBZqORX3SX7WNvncS91i89XQMNuODKhYocjBM1xGSvGn9PKzZipwvOBJoBWlyNe7-xGTSiJ4cHc3AaHzpks62O74crv24wQX_QF90TmQtxgpc5MZlczljrJK8sVkvRqe9X819me4WucL_mr4vBbGNmYXqZnWMbvtnt9k3OTx5wKJEcsnyO1KcOeU3896RBc3UclLWSTT5wnPKxKKVv-wxM5-L8HsYhOZLfhqW3h4P9VEDr63WyCViBdb28K7h9zGPT-3m4MslpkY1XPXAj87t9wsty0Upt6iR3yx2dhFOWlAsK38sM54BXxzzf_zE_IExeLd2NkVkYASQDBfDscqTxnqynUihjvuDgxAP0VmK036v8Ju7fP2ysQPMrQCiA4k7yBZJvaqUEQQc63wrUWTRaCEDq4PoPrBEda3ydEw6fA8yqHulOaGEcL0xDXe7k2IxoHkCzD5982RNAHMtH5DxGwwISnEOy32wrwcbmrfdIRM3m1911xnQ2tNWLGcX3QHGNLjOGKeBjmdyQsns53jpb6Nvyj714O2a--WBBKSoSibw-QSSm8FlPI6norHFmbr7ghXx3HiSpSkoGiDws6y1AD0tEmBbBNAsiP4OG48zOAvWE5qYBLuqEGRlLYR3WhOlvzR-e9L25zEkIkP3i0nK4iO7eQrjBDjld0knP4KtdFgKBgpOpUp9g19I2rOd8Z_SD9PKINs-xI24TVEOpC24Sn27PX8mx-S8qpX0NGTdxOISeutNHskwpOUBVMF2SOAgC-MxJTCAEnQotWt17034eN5ZVrPYFPKAQ_qQgK7_rpXEgExYq7uM6r-1tfMgqHewlacTkVEfOpXxwMW047IWIPd0_g_DlQTvh1dyNb2OY22MRecPsCGOSzOG1qDnAp6tJ991pIvONPHFN_chg=w1265-h982?auditContext=prefetch',
            'https://lh3.googleusercontent.com/rd-d/ALs6j_EOxq0Si9fSN_nPxrrsUxgp4tr55GN-zInFTykO4wrjchXOGXWZ_HhgBq4TlC1ZUXUteLTQswbDKHVMwq-bmc6SaypNQj66Kru7yKzSnkBFwehWdRsQhm-5reaBaGQqK5mEzEfGsgia6F9f3Gj8hkzvpImqvu9-wZTMaVYstnF_k0mvOiN5QH-YCglYeLvppAuP2pXUPhAnjQcyPNKw_CM1e8WmpLxLXxdHkEdGp1xMrir4qJFmu43KMvpNLQRBMNuW0_Ssc_2MV_r5B9-WgEchSxoPnViCxD3XlozIO4-tdvz2sXSnbgJVBIvZLHDa1mJRyQ_BvHuHGmqDzbYMUr0GP0PUxzr-ZmftYTnR6-6CtaT3aKpHFwjMReSwBpXb-wmV1Vu19_69aJ8EBYfMSz_utEZ9heaaVOdS2rjqBNciMpJmPNlq1fJTp1mEEe9MJNxH_KUOrn_iWHu0eImQfaB8AqdJnR6Wh2xH45Wqol9qAEVv4L6HwjKitT4Yrz2JbCmpzIz5sktUnEWsDOGBmg4AabI-PZeHVQH6p_94r5KGIusZ14nSnir38E6pQscUdAOAHGEvcQTuy7eTQxp0bdsI5GbPTgha9I_od8SumJiQ31cSkCQTlOlj110HDrryBk5ksOvPk_7dmPq6wMc7yHk5L0f6NwW5DQznRy2Sm1llr4aafb887AFKM0jdBGLG9_TxbjXxKpVFUe-VFaA3_lZnRoGIk0OY5QIhF_wPYhQc9zFrouJ6C-Q2OaTlWDEGjDLdLInKLJ9gvxLrNuu_SoH6IJXCsSl2xuNKjcVlTYDBu6ouJjTeZn5QEHWrqP2-bDKz3k_x3sAkcgM27u2fOfd20d089IUvPoR4Z-PM2IqClalq6zk0zIzvk5Q2to-i_r-DhpPhn20mCRZWrrjNNde30K0H3GQCkyBifDWjt2o9WZOfX6OC4g8ozeoqJykk1CN_pzmCcP8VriuFcDWK1N9wJFS0Vp7jaIMyQAd7ZAern9lwyA-7yHrRXKKD5sK7xmiBDEQ-IIEdUL4MaJjA2x5FNZKd1dV0fQ91jbV35WTXFG_tGL4mJJ-GGLfRRR-7YzjEmREB1Jvy_1Xdw1ZkOKRVSNwed1pKBP1sMG9HzH0_jxMFSHo=w1265-h982?auditContext=prefetch',
            'https://lh3.googleusercontent.com/rd-d/ALs6j_GuPz7pQloMFU1AdG3QpXcaDsuKvwpQ3hzO7t7b_yGltzMtX9x1ExmkHIwfqMgbi6A9UnOFz9wbcHq7On7Mhc2BUcC3SWN__yXjN-V6lwnESMuzVu2HAsTBIF6-B8FpEJxKqfx6wpJuuqnmlAbzbDysiw6inQVqQIwgJw5tSd29LLqAKY9J3DdBEo5sfeSLpkVACLlmOvj9PPrHZXQFixpr3Is9IExLZXRL55OtQqzW1R0ZP4v_3xVqnjjBKLd6D-ef98uxqbwJnR0ZcyaYtO1mo0kV_oUJOES0YZr1olukilQpA_RH1UpJuSljrDF0lG-q__hkRJ_bGAIHDLZgKKrZIoGGR-54264qHIk9RFPKb9qMAETG9DiEgtCSFPltqQq6CRUebmyGnGQ7DXN1U9Hb0RM2QoTsUOGFX-EVszOXssAv8peAZ87OjcBjQowcQwwZjoe4JPHu-rTgpBxU5AYd-q2HgbtZTlhHAMM4RFRI32B1M40KsLtt_RZn3vI0FQv3WBPESpOCleYIOrMeVF4WvYt0ZJorfIjqoYc2mJLo-xq8vG-kRjBhsKHUsUnASn7eLS75f005SUGBK3BhFLAEhOpPTNadw1VBjS4Rx8Gire4VZIEbH-jXBjFUGj5VMuG1lNlo0nldTnTpPKgAeiqaC5ZrR9ZUSQ1p1dWjz8-psfUfc5w3aRySmtI4cy3WStPbmy9GEVpCOHqireyTrZ9zxyLQxV4JcnqlM_IqauaJXaQV59wVn7lgYCFFTfiywo4AQyr8cD6fkALDF9FGmFx7bSnJcPAt0MuA_t5ts4EfbcovMEybiVTbL3P-RwObUqPtQaopYyQy2NRyxB4hGEbYu_63sky7NVC6PEjB4MNrpO8QlYRYhENnq8mD_-1Sj-cb0ONCJQynyeZLosgdEtwNZjDlPpgC4kaDj8vcaQ0GO7TCQfpxKKmedeXjU56GIlv4UgJzqfEWPZO5LEX03mH1QcmRjrgtgeJr0VDgG53yJ_M6wczno69brADQsPaCp5DQo0lk6Sj6gxRNM4Yupkt5ykl9HxFm8ZifWAtopnwJxgWSsyWcDAPI91j6DmP1AhKM5TzQ7zBA1DB631fLe7w7YTJuRgtSXkr6kp9MB5kCxNhr5PY=w1265-h982?auditContext=prefetch',
            'https://lh3.googleusercontent.com/rd-d/ALs6j_FByCu3JJRR_Q_Oa0cleu6Sr8x3q7DE6n66EXMAihbAx-X-POEWKrgr1jFgalt8iRQx2pSS2X2OWs39f25jHUiYEpaAD1BNMmRGLJtUqo0f6Pb4ldmEmuNZ1PoQxqv08xiWdiriYxFsCmWA1vn9_I92BEGn3SfxIFMSiEfr-89q993HP9TGQgtj6JZUOCikzgwvuTPWTzibMnNGnEIHZ3U6nkSPdinJqRDJO7xCNs09eM0Hymy6FJDAH6zC6zJJQ8U62OO5SS-iR8DuFzohh2id3ywSHta5F_4ahv2V4pXBRAJwTNaevtN6DQcwctkaMtr4wPJ0ffjCQGZumE5JumjWSTBnOm2rLuMlMsFgtkpmXQnWPug6JBf_21ll5gXastkGtEZxbA4A6jSgeFJ_3fMDTw6pA_iw-RCWmExvc6tdSslr5IA_6BHee3eWAXPJ_AucW2OvYaqQdAxT1eNyZ_6DcN67AuMJW0OFa6KpV5dii_C3EzRb4K3vxQixh-Hye0a3VfqJx_-929FlRUoZSXmetEXwDGW3MlGFg1SxhMo38ve6CfRfE1f7fQfWmXfdNgBjug5nxyWe4xNAiKKcVVca9mO27GwbmlR0A3AlQlRlnj4-XjSjKRo1cmf04IWca512_EPA2xsCEKLxsILK7FpmaPLSNR6T6IKrq0gyUK5aeGdmh7mwPUSR3xTr_9X9lufe3D5NHpScMhdVj4G3U3d53wzMieLZJHPeDK5MgCjRc-IcWDMCgA1-4CEHzfn98egcaHRTboJrRqobIrc0fIYye04RhIyqpLf7Zc1_84r7XXjqIIfXh1USA-S6YmAshLIM_OAHOIKGrq8-u1lpk5-dwUKwwtLNW0z65oKEbDnvoV3Y2O9S_qSBKhto-ShSYXxoa4xT6cVEVigpiyoz4UA3d5MgsbbrNF7Vx-cak-TCkXDrsSMC1Ou_BQwRGxA4xORtQph3SAHSJjwkxIUphQvFNXrSwkhldB_R0B0c0MNNHx9vu35gtS1Ns6p8DiYk1gm57GRVs20EaY9FBbvj8WhG1Bj3adYPxfwlPBYLTqjGZL5dIk8uiljvhcJAplmtNyehe4WgYXDWzOYXZwqjfOZoI01DkH52U29npGWn4AViolaMP0Q=w1265-h982?auditContext=prefetch'
        ],
        duration: '2023',
        skills: ['Sustainable Construction', 'Disaster Relief', 'Community Development'],
    }
];

const BLOG_ARTICLES = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
        title: 'Revolutionizing Agriculture: The Impact of VGG16-Based Plant Disease Detection on Society',
        author: 'Suman Sharma',
        date: '2024-04-20',
        readTime: 5,
        content: `In a world where food security is becoming an increasingly pressing concern, technology has emerged as a key player in solving global agricultural challenges. One such technological breakthrough is the application of deep learning models, specifically Convolutional Neural Networks (CNNs), for plant disease detection. Among the various CNN architectures, VGG16 has gained significant recognition for its success in image classification tasks, including the detection of plant diseases. This blog explores how VGG16-based plant disease detection is not only transforming agriculture but also benefiting society at large.

<b>The Challenge: Plant Diseases and Global Food Security</b>

As the global population continues to rise, the pressure on food production grows. A major threat to agriculture is plant diseases, which cause a significant reduction in crop yield, quality, and economic viability. According to recent estimates, diseases affect over 10-20% of crops globally, resulting in devastating losses. Traditionally, farmers and agricultural experts identified these diseases visually, often leading to delays in diagnosis and ineffective treatments. In a rapidly changing world, this approach is no longer sufficient.

With the declining workforce in agriculture, advanced technologies like artificial intelligence (AI) and deep learning are now essential for ensuring food security. The key is early detection, identifying diseases as soon as they appear on crops enables timely intervention, reducing the economic and environmental impact of plant diseases.

<b>How VGG16 Revolutionizes Plant Disease Detection</b>

VGG16, a deep learning architecture developed by the Visual Geometry Group (VGG) at the University of Oxford, has emerged as one of the most popular CNN models in computer vision. With its 16 layers, including convolutional and fully connected layers, VGG16 is capable of identifying complex patterns in images. This deep architecture is especially effective in plant disease detection, where the model can classify diseased and healthy plant leaves with remarkable accuracy.

The model works by taking images of plants (typically leaves) as input, processing them through a series of convolutional and pooling layers, and outputting predictions regarding the plant's health. In plant disease detection, the VGG16 model is trained to distinguish between various diseases, providing farmers with actionable insights based on the images they capture with a smartphone or camera.

<b>Impact on Farmers: Simplifying the Disease Detection Process</b>

For farmers, one of the most significant advantages of this AI-powered solution is its simplicity and accessibility. Using a smartphone, farmers can easily capture images of plant leaves showing symptoms of disease. The image is then fed into the model, which performs an analysis and provides results within seconds. This automated detection system eliminates the need for expert intervention in the early stages of disease identification, making it much more efficient and cost-effective.

In fact, a study that used VGG16 for plant disease detection achieved training accuracy of 93.10%, demonstrating its ability to classify plant diseases with high precision. This high level of accuracy ensures that farmers receive reliable information about the health of their crops, empowering them to take timely and informed actions to mitigate the spread of diseases.

<b>Economic Benefits: Reducing Crop Losses and Enhancing Yield</b>

The ability to detect plant diseases at an early stage allows farmers to apply targeted treatments, reducing the need for widespread pesticide use. This not only saves costs but also minimizes the environmental impact of pesticide overuse. By preventing diseases from spreading, farmers can preserve the quality and quantity of their crops, ensuring better yields and higher profitability.

As the model provides accurate diagnoses, it also helps in resource optimization. For instance, instead of applying treatments indiscriminately, farmers can now focus their efforts on the plants that need attention. This targeted approach not only saves money but also promotes sustainable farming practices by reducing waste and overuse of chemicals.

<b>Societal Impact: Enhancing Food Security and Public Health</b>

The societal benefits of VGG16-based plant disease detection extend beyond individual farmers. By increasing the efficiency of crop management, this technology contributes to global food security. With the capacity to increase crop yield while reducing waste, this AI-powered solution supports a more resilient and sustainable agricultural system.

Additionally, using deep learning for disease detection could help prevent the spread of harmful pathogens and pests, which can sometimes cross borders and become global threats. A timely diagnosis reduces the risk of pandemics affecting entire crops, thus protecting not only the farmers' livelihoods but also the wider agricultural economy.

Moreover, sustainable farming methods facilitated by this technology contribute to public health. By minimizing pesticide use, VGG16-powered disease detection helps reduce the harmful residues that can end up in our food. With fewer chemicals in our food supply, consumers can enjoy healthier, safer produce.

<b>Environmental Impact: Promoting Sustainable Farming</b>

Agriculture is a significant driver of environmental change, and as such, sustainable practices are becoming increasingly important. VGG16, by reducing unnecessary pesticide applications and providing more efficient disease management tools, plays a crucial role in sustainable farming.

Furthermore, by enabling farmers to better manage plant health, the model helps reduce the need for deforestation and land degradation. Instead of expanding into new areas, farmers can optimize the use of existing arable land. In this way, VGG16-based plant disease detection contributes not only to food security but also to the preservation of vital ecosystems.

<b>Future Prospects: Moving Beyond VGG16</b>

While VGG16 has proven to be a powerful tool, the future of plant disease detection lies in further advancements in deep learning and artificial intelligence. Researchers are already exploring the integration of more complex models, such as ResNet or InceptionV3, which could offer even higher accuracy and performance. Additionally, there is growing interest in transfer learning, which allows researchers to fine-tune pre-trained models on custom datasets for specific diseases or crop types.
Incorporating data from sources beyond just images such as sensor data or spectral information could provide a more holistic view of plant health. These advances would make plant disease detection even more accurate and versatile, benefiting farmers across the globe.

<b>Conclusion: A Bright Future for Agriculture and Society</b>

In conclusion, the use of VGG16-based plant disease detection represents a significant leap forward in agricultural technology. Its ability to provide fast, accurate, and cost-effective disease diagnosis is revolutionizing the way we approach crop management. From reducing the use of pesticides and increasing crop yields to enhancing food security and promoting sustainability, the impact of this technology on society is profound.

As we continue to refine AI models and integrate them into the agricultural ecosystem, the potential for improving the health of plants, the economy, and the environment becomes limitless. The future of agriculture is digital, and with the help of deep learning models like VGG16, we are on the path to a more sustainable and secure food system.`,
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop',
        title: 'Accelerating AI: Understanding the Role of Tensor Processing Units (TPUs)',
        author: 'Suman Sharma',
        date: '2022-10-12',
        readTime: 6,
        content: `
        In the world of machine learning (ML) and artificial intelligence (AI), one of the most crucial components of building efficient models is computational power. While GPUs (Graphics Processing Units) have been widely used for training and inference tasks, Google introduced a specialized hardware accelerator called the Tensor Processing Unit (TPU). This chip, designed specifically for tensor-based computations, has become a game changer for AI and machine learning workloads. But what exactly are TPUs, and why are they so important? Let’s dive deeper into this transformative technology.

        <h1><strong>What is a Tensor Processing Unit (TPU)?</strong></h1>
        <b>A Tensor Processing Unit (TPU)</b> is a type of application-specific integrated circuit (ASIC) developed by Google. Unlike general-purpose CPUs or even GPUs, TPUs are custom-built to accelerate the processing of tensors, which are multi-dimensional arrays of data used extensively in machine learning, particularly in deep learning algorithms. The name “Tensor Processing Unit” itself reflects the unit’s specialization in handling tensor operations efficiently.

        <b>The Role of TPUs in Machine Learning</b>

        In machine learning, most deep learning models rely heavily on matrix operations, particularly tensor multiplication. These operations, such as matrix multiplications and convolutions, are computationally expensive. TPUs are designed to accelerate these operations, allowing machine learning models to train much faster and scale more efficiently.
While GPUs can be repurposed for a wide range of tasks, TPUs are optimized specifically for the high-throughput, low-latency computations required by neural networks. This results in significant performance improvements, making TPUs ideal for tasks like training large-scale deep learning models, natural language processing (NLP), image recognition, and reinforcement learning.

<h1><b>Why TPUs?</b></h1>
<b>1. Optimized for Matrix Operations</b>

The primary function of a TPU is to accelerate the core mathematical operations that are central to neural network training and inference: matrix multiplications and convolutions. TPUs use a custom-built matrix multiplication unit called the MXU (Matrix Processing Unit), which can handle up to 256 operations in parallel in a single cycle. This results in a massive boost in throughput for tasks like training deep learning models, where these matrix operations are performed repeatedly on large datasets.

<b>2. High-Throughput and Low-Latency</b>

TPUs are designed to provide high throughput with minimal latency, making them ideal for real-time or near-real-time machine learning applications. They can handle massive amounts of data with minimal bottlenecks, providing faster training times and quicker inference, which is especially important in industries like healthcare, autonomous driving, and financial services where time is critical.

<b>3. Efficient Use of Resources</b>

TPUs are highly specialized hardware, meaning they are purpose-built for a single task: accelerating machine learning workloads. As a result, they achieve much higher efficiency compared to general-purpose hardware like CPUs or even GPUs. TPUs can handle high volumes of data with less power consumption, which is important for large-scale machine learning models and cloud-based services.

<b>4. Scalability</b>

TPUs are designed to scale efficiently. Google has implemented a system called Cloud TPU Pods, where multiple TPUs can be connected together to form a supercomputing cluster. These pods can contain thousands of TPUs, allowing machine learning models to be trained on massive datasets without compromising performance. This makes TPUs an attractive option for companies looking to train models on enormous amounts of data quickly.

<b>How Do TPUs Work?</b>

To understand how TPUs work, it's important to look at the architecture and design principles behind them. Here are the key components of a TPU:

<b>1. Tensor Core</b>

The core of a TPU is the Tensor Core, which is specifically designed to accelerate tensor operations. These cores perform matrix multiplications and convolutions at high speed. The Tensor Core operates in a highly parallelized manner, enabling it to execute many operations simultaneously, thereby increasing throughput and reducing processing time.

<b>2. High Bandwidth Memory (HBM)</b>

Memory is a critical component in machine learning models, as it stores the vast amounts of data required for training and inference. TPUs use High Bandwidth Memory (HBM) to provide faster access to data and reduce bottlenecks in the memory pipeline. This allows the TPU to work more efficiently and keeps data flowing smoothly throughout the computational process.

<b>3. Vector Processing Units (VPUs)</b>

TPUs also include Vector Processing Units (VPUs), which are designed to accelerate operations on vectors (1D arrays of numbers). VPUs are optimized to process vector operations that are common in machine learning, especially in the context of deep learning and neural networks.

<b>4. Interconnects for Scalability</b>

TPUs can be used in clusters to form TPU Pods, which are highly scalable systems that can be used for large-scale machine learning tasks. These interconnects allow data to flow seamlessly between individual TPU devices, making it possible to scale up training jobs across multiple units.

<b>Types of TPUs</b>

Google has released several generations of TPUs, each with increasing levels of performance and capabilities. Here's a quick breakdown of the key TPU versions:

<b>1. TPU v1</b>

Released in 2016, the first generation of TPUs was designed primarily for inference tasks, not training. They were built to accelerate the performance of deep learning models in production environments. TPU v1 was deployed in Google’s cloud platform and was aimed at increasing the speed of machine learning tasks like image recognition and language translation.

<b>2. TPU v2</b>

Introduced in 2017, TPU v2 supported both training and inference workloads. This version included 16GB of HBM (High Bandwidth Memory) and offered significant improvements in both processing power and efficiency. It could deliver up to 45 teraflops of computational power, which was a huge leap forward in accelerating deep learning models.

<b>3. TPU v3</b>

Launched in 2018, TPU v3 provided even more power, offering up to 100 teraflops of performance. It also included HVAC cooling, allowing it to handle more power while staying cool, making it ideal for cloud-scale machine learning applications. TPU v3 is still used for high-performance machine learning tasks on Google Cloud.

<b>4. TPU v4</b>

The latest iteration, TPU v4, further enhanced performance with improvements in processing speed, power efficiency, and scalability. It is capable of handling 1.1 petaflops of processing power, and it is available on Google Cloud for organizations running massive-scale AI workloads.

<b>Use Cases of TPUs</b>

TPUs have become a critical component in various industries and research areas, particularly those involving large-scale machine learning tasks. Some common use cases include:

<b>1. Natural Language Processing (NLP)</b>

NLP models like Google’s BERT and OpenAI’s GPT require vast amounts of computational power. TPUs can significantly accelerate the training of these models, enabling faster and more accurate language understanding, sentiment analysis, and translation.

<b>2. Image and Video Recognition</b>

Deep learning models used for image classification, object detection, and video processing benefit from the power of TPUs. By accelerating convolutional neural networks (CNNs), TPUs help with real-time image and video analysis.

<b>3. Autonomous Vehicles</b>

Training the models that power autonomous vehicles requires processing massive amounts of data from sensors like cameras, LiDAR, and radar. TPUs are used to accelerate the training of these models, improving their ability to interpret data in real-time for safe driving.

<b>4. Healthcare</b>

In healthcare, machine learning is being applied to analyze medical images, predict patient outcomes, and accelerate drug discovery. TPUs enable the fast processing required for these tasks, helping researchers and healthcare providers gain insights quickly.
        `,

    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop',
        title: 'The Ultimate Guide to Staying Motivated on Your Coding Journey',
        author: 'Suman Sharma',
        date: '2022-07-18',
        readTime: 4,
        content: `Learning to code can be an incredibly rewarding experience, but it can also be a challenging journey. Whether you're a computer science student or someone learning coding on your own, it's not uncommon to feel stuck, frustrated, or overwhelmed at times. The key to success in programming, like any skill, is consistency and maintaining motivation is often the hardest part.

In this blog post, we'll dive into practical strategies that can help you stay motivated, focused, and positive while learning to code.

<b>1. Set Clear, Achievable Goals</b>

One of the best ways to stay motivated when learning to code is by setting small, realistic goals. Instead of just saying, "I want to learn Python," break it down into manageable steps like:

"Today, I'll learn how to create a basic 'Hello, World!' program."

"This week, I’ll learn about variables and data types."

"By the end of the month, I'll build a simple calculator app."

By setting clear goals, you can celebrate small victories along the way, which will help keep your spirits high. Additionally, achievable goals prevent you from feeling overwhelmed, making the learning process feel more approachable and rewarding.

<b>2. Embrace the Struggle—It’s Part of the Process</b>

If you've ever hit a wall in coding, you’re not alone. The feeling of frustration when your code doesn't work can be discouraging, but it's a crucial part of the learning process. In fact, the struggle is where the most growth happens.

Remember, coding isn’t about writing perfect code every time, it’s about problem-solving and learning how to overcome obstacles. The next time you feel stuck, embrace the challenge and see it as an opportunity to improve. Try breaking the problem down into smaller parts, debug systematically, or ask for help from a community (more on that later).

<b>3. Celebrate Small Wins</b>

When you're learning something as complex as coding, it's easy to focus only on the big picture and overlook the little wins. However, it's essential to take time to appreciate every step forward.

Did you finish a tutorial? Celebrate! Did your code finally run without errors? High five! Completing small tasks will help build momentum and show you that you’re making progress—even if it doesn’t always feel like it.

For example, after completing a project or learning a new concept, reward yourself with something you enjoy, like watching an episode of your favorite show, going for a walk, or grabbing a treat.

<b>4. Join a Coding Community</b>

Coding can feel isolating, especially when you're working through difficult problems on your own. Joining a coding community can be a game-changer for staying motivated. Not only can you find support, but you’ll also meet other learners who are on the same journey.

There are plenty of online forums, coding groups, and social media communities where you can ask questions, share your progress, and get feedback. Platforms like Stack Overflow, GitHub, Reddit, and Discord have dedicated channels for learners, while sites like freeCodeCamp and Codecademy host discussion boards for peer support.

When you're part of a community, you'll realize you're not alone in your struggles. Plus, seeing others succeed and share their progress can serve as a huge source of motivation for you to keep going.

<b>5. Focus on Projects, Not Just Theory</b>

It's easy to get bogged down in theory, especially if you're going through textbooks or online tutorials. While understanding the fundamentals is important, the real joy of coding comes from building something meaningful.

Working on projects helps reinforce what you’ve learned and keeps you engaged with practical applications of coding. Start small: Build simple apps, websites, or games that excite you. These projects will not only give you a sense of accomplishment but will also provide something tangible to show for all your hard work.

For example, if you're learning Python, try building:

A personal expense tracker.

A to-do list app.

A simple text-based game like Tic-Tac-Toe or Hangman.

When you're actively working on projects, you'll be more likely to stay motivated, as you'll be able to see the real-world impact of your learning.

<b>6. Mix Up Your Learning Approach</b>

If you find yourself getting bored with the way you’re learning, it may be time to switch things up. Sometimes, all you need is a change of scenery or a different approach to spark your motivation.

Try exploring a variety of learning formats, including:

Video tutorials (YouTube, Udemy, etc.)

Interactive coding platforms (freeCodeCamp, Codecademy, or LeetCode)

Coding challenges and competitions (HackerRank, Codewars, etc.)

Books (like "Eloquent JavaScript" or "Python Crash Course")

Podcasts (such as The Coding Blocks Podcast or Software Engineering Daily)

By mixing things up, you’ll keep your learning experience fresh and prevent monotony from creeping in.

<b>7. Make a Habit of Coding Every Day</b>

Consistency is key to building any skill, and coding is no different. While you don’t need to code for hours every day, even a small amount of time, say 30 minutes to an hour can make a big difference over time.

Treat coding like any other habit you want to develop. Set aside time each day or week to practice, and make it a non-negotiable part of your routine. By creating a habit of coding, you’ll develop muscle memory and get into a flow state that makes the process easier and more enjoyable.

Use tools like Pomodoro timers (work for 25 minutes, then take a 5-minute break) to stay focused and avoid burnout.

<b>8. Learn from Your Mistakes</b>

Mistakes are a part of the learning process don't be discouraged by them. In fact, coding is often about making mistakes, identifying where things went wrong, and learning how to fix them. When your code doesn’t work, take the time to understand why it failed and how you can correct it.

This mindset of embracing mistakes will help you build resilience. You'll start to see errors not as failures, but as opportunities to deepen your understanding and improve your skills.

<b>9. Remind Yourself of the Bigger Picture</b>

At times, it’s easy to get caught up in the minutiae of learning code. But it’s essential to remind yourself why you started in the first place. Whether you’re aiming for a career in tech, want to automate a task, or simply enjoy solving problems, your motivation should be tied to a larger goal.

Keep your "why" in mind, and visualize the benefits of your hard work. Whether it’s landing your first tech job, building your own app, or just feeling the thrill of solving a tough problem, remembering your long-term vision can reignite your passion during those low moments.

<b>10. Stay Patient : Learning Takes Time</b>

Finally, be patient with yourself. Learning to code is not an overnight process, and it’s natural to encounter ups and downs. Be kind to yourself, and don’t compare your progress to others. Everyone learns at their own pace, and consistency over time will pay off.`  },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop',
        title: 'Building a Custom Debounce Function with Throttling Support',
        author: 'Suman Sharma',
        date: '2022-10-05',
        readTime: 4,
        content: `<b>Problem Statement:</b>

Imagine you're building a complex user interface, and you need to handle search input or window resize events. You need to ensure that the event handler is called only after the user stops interacting (debouncing). However, you also want to add an option to throttle the event handler for specific scenarios, so the event handler can be executed at a fixed rate, no matter how frequently the event is triggered.

<b>The challenge here is to build a custom debounce function that:</b>

1. Debounces the event to trigger after a delay (once the user stops interacting).

2. Optionally, supports throttling so the event handler is called at regular intervals, even if the event is triggered continuously.

<b>Solution: A Debounce-Plus-Throttle Function</b>

We will create a custom debounce function that accepts both debounce delay and throttling options. To achieve this, we need to combine closures, setTimeout, and setInterval. Let’s break it down step-by-step.

<b>Step 1: Basic Debounce Implementation</b>

First, let’s start by implementing the basic debounce functionality. The function should wait until the user has stopped interacting for a specified period before executing the function.

function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);  // Clear the previous timeout if any
        timeoutId = setTimeout(() => {
            func(...args);  // Call the function after the delay
        }, delay);
    };
}

// Example usage:
const searchHandler = debounce((event) => {
    console.log('Searching for:', event.target.value);
}, 300);

document.getElementById('search-input').addEventListener('input', searchHandler);

<b>Step 2: Adding Throttling Support</b>

Now we’ll add throttling. The idea behind throttling is that we allow the function to execute at a regular interval, even if the event is triggered frequently. A common pattern for throttling is to use setInterval() or Date.now() to track the last execution time.

Here’s the throttling version:

function throttle(func, interval) {
    let lastTime = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            func(...args);  // Execute the function at the specified interval
        }
    };
}

// Example usage:
const throttleHandler = throttle((event) => {
    console.log('Resizing:', window.innerWidth, window.innerHeight);
}, 1000);

window.addEventListener('resize', throttleHandler);


In this example, the resize event handler will only be triggered at most once every 1000 milliseconds, no matter how often the window is resized.

<b>Step 3: Combining Debounce and Throttle</b>

Now comes the real challenge: combining both debouncing and throttling into one function. To achieve this, we’ll allow the user to specify whether to debounce or throttle the event, and manage both behaviors in a flexible way.

We’ll create a function that:

Executes the function after a delay (debouncing).

Also executes at a fixed interval (throttling), but only when the throttle condition is met.

Here’s the combined solution:

function debounceThrottle(func, delay, options = { throttle: false, throttleInterval: 0 }) {
    let timeoutId;
    let lastExecution = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (options.throttle && now - lastExecution >= options.throttleInterval) {
            // Throttle: Execute immediately if interval has passed
            lastExecution = now;
            func(...args);
        } else if (!options.throttle) {
            // Debounce: Delay execution until after user stops
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        }
    };
}

// Example usage for debouncing with a 300ms delay
const searchHandler = debounceThrottle((event) => {
    console.log('Search query:', event.target.value);
}, 300, { throttle: false });

document.getElementById('search-input').addEventListener('input', searchHandler);

// Example usage for throttling with a 1000ms interval
const resizeHandler = debounceThrottle((event) => {
    console.log('Window resized:', window.innerWidth, window.innerHeight);
}, 0, { throttle: true, throttleInterval: 1000 });

window.addEventListener('resize', resizeHandler);

Explanation:

The debounceThrottle function accepts three parameters:

func: The function to be executed (e.g., a search or resize handler).

delay: The debounce delay (in milliseconds).

options: An optional object that controls whether throttling is applied (throttle: true for throttling and throttleInterval to specify the interval).

Logic Flow:

If throttling is enabled, the function checks whether enough time has passed since the last execution (using Date.now()) and executes the function if the interval condition is met.

If debouncing is used, the function clears any previously set timeout and sets a new one, ensuring that the function only executes once the user has stopped triggering the event for the specified delay.

Debounce and Throttle Together:

The function is flexible enough to either debounce (wait for the user to stop) or throttle (ensure the function is called at regular intervals) depending on the configuration.

<b>Step 4: Advanced Use Case: Dynamic Switching Between Debouncing and Throttling</b>

You may also want to allow the user to switch between debounce and throttle dynamically, depending on certain conditions. For instance, on mobile devices, you might want to throttle the resize event but debounce the input event. We can enhance our previous implementation by switching behaviors based on specific conditions.

Here’s a modified example:

function debounceThrottleDynamic(func, delay, options = { throttle: false, throttleInterval: 0 }) {
    let timeoutId;
    let lastExecution = 0;

    return function(...args) {
        const now = Date.now();

        if (options.throttle && now - lastExecution >= options.throttleInterval) {
            lastExecution = now;
            func(...args);
        } else if (!options.throttle) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        }
    };
}

// Switch between throttle and debounce dynamically based on window width
function getDynamicOptions() {
    return window.innerWidth < 768
        ? { throttle: true, throttleInterval: 1000 }  // throttle for mobile
        : { throttle: false };  // debounce for desktop
}

const dynamicResizeHandler = debounceThrottleDynamic((event) => {
    console.log('Window resized:', window.innerWidth, window.innerHeight);
}, 300, getDynamicOptions());

window.addEventListener('resize', dynamicResizeHandler);


In this example, the event handler behavior switches dynamically between debouncing and throttling depending on the window width (using window.innerWidth).`   },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
        title: 'How Computer Science Can Enhance Disaster Response',
        author: 'Suman Sharma',
        date: '2024-10-01',
        readTime: 8,
        content: `Natural disasters whether earthquakes, hurricanes, wildfires, or floods can wreak havoc on communities, causing devastating loss of life, displacement, and widespread damage. However, in today’s digital age, computer science is playing an increasingly vital role in mitigating the impact of these disasters and improving emergency response. From real-time data analytics to AI-driven decision-making and automated rescue missions, technology is making a profound difference in how the world responds to catastrophes.

In this blog, we’ll explore how computer science is revolutionizing disaster response and how students and professionals in the field can contribute to these efforts.

<b>1. Real-Time Data Collection and Analysis</b>

In the aftermath of a disaster, one of the most critical factors in managing the crisis is access to real-time information. Knowing where people are located, the extent of the damage, and where resources are needed most can mean the difference between life and death. This is where data science, IoT (Internet of Things), and cloud computing come into play.

<b>IoT Sensors and Drones:</b>

• IoT sensors are being deployed in disaster-prone areas to monitor environmental conditions, such as water levels, temperature, and seismic activity. For example, sensors can detect early signs of flooding or landslides, providing early warnings to evacuate before it's too late.

• Drones, equipped with high-resolution cameras and sensors, can be used for aerial surveillance of disaster zones. Drones can fly over damaged areas where human access is difficult or dangerous, providing crucial data to disaster management teams in real time.

<b>Satellite Imagery and Remote Sensing:</b>

• Satellites play an indispensable role in disaster monitoring. They provide high-resolution images and data that can help responders assess damage, track the movement of wildfires, hurricanes, or floods, and plan the most effective evacuation and aid routes.

• Machine learning algorithms are being used to process this satellite data to identify patterns and predict the likely progression of a disaster, which enables authorities to act more proactively.

<b>Data Analytics and AI:</b>

• Machine learning models are now being used to analyze vast amounts of real-time data during disasters. For instance, AI algorithms can predict the path of a hurricane or the trajectory of an earthquake's aftershocks by analyzing historical data and current sensor inputs.

• Disaster response systems can also use predictive analytics to determine which areas are most likely to be affected and prepare resources accordingly, improving the efficiency of humanitarian efforts.

<b>2. Enhanced Communication Systems</b>

During disasters, communication can be chaotic or even completely cut off, making it hard to coordinate relief efforts. However, technology is providing new ways to keep people connected, both with emergency responders and with each other.

<b>Social Media for Information Dissemination:</b>

• Platforms like Twitter, Facebook, and WhatsApp are increasingly used to send out emergency alerts, share vital information, and connect individuals with resources. In many cases, these platforms also allow users to share real-time information, such as location updates or emergency needs.

• AI algorithms are now being trained to sift through millions of social media posts to identify distress signals, requests for help, or reports of disaster events. This technology allows rescue teams to identify urgent situations and prioritize resources where they’re needed most.

<b>Mobile Apps for Disaster Management:</b>

• Several mobile apps have been developed to assist with disaster preparedness and response. These apps can help users locate emergency shelters, connect with rescue teams, or find available medical care. For example, the FEMA app in the United States provides users with real-time alerts and critical safety information during disasters.

• Apps that use geolocation services also help individuals and emergency teams track missing persons or locate areas that need immediate attention, making rescue missions more targeted and efficient.

<b>Satellite Phones and Mesh Networks:</b>

• In regions where traditional communication infrastructure is down, satellite phones or mesh networks can be deployed to restore communication. Mesh networks allow devices to communicate directly with each other, even if there’s no central cellular tower, providing an ad-hoc communication solution when traditional infrastructure is unavailable.

<b>3. AI and Machine Learning for Predictive Response</b>

One of the most exciting developments in disaster response is the use of artificial intelligence and machine learning to predict and respond to natural disasters more effectively. Rather than reacting to disasters after they happen, AI allows us to anticipate and mitigate their effects in advance.

<b>Disaster Prediction and Modeling:</b>

• AI is being used to develop models that predict the occurrence and intensity of natural disasters. For instance, machine learning algorithms can analyze historical weather data and seismic activity to predict earthquakes, hurricanes, and other natural events with greater accuracy.

• In flood-prone areas, AI systems can use weather data and river water levels to predict flooding events, giving communities more time to evacuate or take preventative measures.

<b>Resource Allocation Optimization:</b>

• In the chaotic aftermath of a disaster, it can be difficult to know where to send resources, such as food, medical aid, or personnel. AI and machine learning algorithms help optimize resource allocation by analyzing real-time data and recommending the best places to direct resources for maximum impact.

• Machine learning models are also being used to prioritize areas based on the severity of the disaster, the vulnerability of the population, and the availability of resources.

<b>4. Robotics and Automation in Disaster Relief</b>

In addition to software and data analysis, robotics is also making significant strides in enhancing disaster response, especially in rescue operations.

<b>Search and Rescue Robots:</b>

• Robots equipped with sensors, cameras, and AI algorithms can be deployed in disaster zones to search for survivors. These robots can navigate through rubble, locate victims, and even communicate with them. Drones and autonomous ground robots are especially useful in situations where it would be too dangerous or difficult for human rescuers to go.

• Robotic dogs, such as those developed by Boston Dynamics, are also being used in rescue missions, able to climb rubble, navigate tight spaces, and transmit real-time images and information back to emergency responders.

<b> Automated Logistics:</b>

• Logistics robots and drones are helping with the distribution of supplies to areas that are hard to reach or where human personnel are unavailable. For instance, drones are being used to drop medical supplies, food, and water in disaster zones, while autonomous vehicles can deliver larger supplies to affected communities.

<b>5. Blockchain for Transparency in Disaster Relief</b>

Blockchain technology, often associated with cryptocurrencies, is also finding a home in disaster relief efforts. Blockchain’s decentralized nature offers a solution to issues around transparency and trust, especially when large sums of money and donations are involved.

<b> Tracking Donations and Aid:</b>

• Blockchain is being used to ensure transparency in disaster relief funding. By tracking donations on a blockchain, organizations can guarantee that resources are distributed fairly and efficiently. This transparency helps build trust with donors, ensuring that their contributions are being used for their intended purpose.

• For example, blockchain can allow donors to track the distribution of funds in real time, ensuring that their money is being used to provide food, shelter, and medical care to the areas most in need.

<b>6. How You Can Get Involved: Practical Steps for Computer Science Students</b>

If you’re a computer science student interested in making a real-world impact through disaster response, there are many ways you can contribute:

• Develop Disaster Relief Apps: Build apps that provide real-time disaster updates, emergency contact information, or locate survivors and responders.

• Contribute to Open-Source Projects: Many non-profit organizations and disaster relief groups rely on open-source software. Contribute to these projects by coding, testing, or helping with bug fixes.

• Engage in Data Science for Disaster Relief: Work with organizations to analyze large datasets for better disaster prediction and management.

• Participate in Hackathons: Many hackathons are focused on solving global challenges, including disaster response. Participating in these events can give you the opportunity to develop solutions that make a real difference.`   },
    //     {
    //         id: 6,
    //         image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=500&h=300&fit=crop',
    //         title: 'Bitcoin is an innovative payment network and a new kind of money',
    //         author: 'Thomas Wright',
    //         date: '2024-09-28',
    //         readTime: 7,
    //         content: `Education about Bitcoin and cryptocurrency is crucial for widespread adoption. Understanding the technology, risks, and potential benefits helps people make informed decisions about using and investing in Bitcoin.

    // The environmental impact of Bitcoin mining has led to increased focus on renewable energy sources and more efficient mining operations. Many miners are now powered by hydroelectric, solar, and wind energy.

    // Bitcoin's journey from an obscure cryptographic experiment to a globally recognized asset class demonstrates the power of open-source innovation and community-driven development. Its future remains full of possibilities and challenges.`,
    //     },
];

// --- HELPERS ---
const createSkillBadge = (skill) => `
    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
        ${skill}
    </div>
`;

const createArrowRightIcon = () => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
    </svg>
`;

// --- BLOG FUNCTIONS ---
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function createBlogArticleCard(article) {
    return `
        <div class="blog-article-card" onclick="handleBlogArticleClick(${article.id})">
            <img src="${article.image}" alt="${article.title}" class="blog-article-image">
            <div class="blog-article-content">
                <div class="blog-article-meta">
                    <span>By ${article.author}</span>
                    <div class="blog-meta-separator"></div>
                    <span>${formatDate(article.date)}</span>
                    <div class="blog-meta-separator"></div>
                    <span>${article.readTime} min read</span>
                </div>
                <h3 class="blog-article-title">${article.title}</h3>
            </div>
        </div>
    `;
}

function handleBlogArticleClick(id) {
    const article = BLOG_ARTICLES.find(a => a.id === id);
    if (article) {
        document.getElementById('blogModalImage').src = article.image;
        document.getElementById('blogModalImage').alt = article.title;
        document.getElementById('blogModalTitle').textContent = article.title;
        document.getElementById('blogModalMeta').innerHTML = `
            <span>By ${article.author}</span>
            <div class="blog-meta-separator"></div>
            <span>${formatDate(article.date)}</span>
            <div class="blog-meta-separator"></div>
            <span>${article.readTime} min read</span>
        `;
        document.getElementById('blogModalText').innerHTML = article.content;
        document.getElementById('blogModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeBlogModal() {
    document.getElementById('blogModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// --- RENDER FUNCTIONS ---
const renderSectionContent = (id, title, content) => {
    const section = document.getElementById(id);
    if (section) {
        section.innerHTML = `
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 ">
                <h2 class="text-md md:text-lg lg:text-2xl font-bold uppercase tracking-widest text-slate-200">${title}</h2>
            </div>
            <div>${content}</div>
        `;
    }
};

const renderNav = () => {
    const navContainer = document.getElementById('nav-links-container');
    if (navContainer) {
        const linksHtml = NAV_LINKS.map(link => `
            <li class="py-2 lg:py-0">
                <a class="group flex items-center py-3 lg:py-[1.5vh] xl:py-3 nav-link" href="${link.href}">
                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 lg:text-[1.6vh] xl:text-xs">
                        ${link.name}
                    </span>
                </a>
            </li>
        `).join('');

        const closeButtonHtml = `
            <div class="absolute top-16 right-5 lg:hidden">
                <button id="mobile-nav-close" aria-label="Close navigation" class="p-2 text-slate-200">
                    <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;

        navContainer.innerHTML = `
            ${closeButtonHtml}
            <ul class="mt-16 w-max lg:mt-16 lg:flex-col flex flex-col items-center justify-center h-full text-2xl lg:text-base lg:block lg:h-auto lg:text-left">
                ${linksHtml}
            </ul>
        `;
    }
};

const renderAbout = () => {
    const content = `
        <p class="mb-4 text-[18px]">
            As a driven and versatile professional with a B.Tech in Computer Science and a Minor in Financial Economics from KIIT University, I have a strong foundation in both technology and finance. My experience spans across full-stack development, project management, and strategic leadership, particularly within the construction and tech-for-social-good sectors.
        </p>
        <p class="mb-4 text-[18px]">
            I am passionate about leveraging technology to solve real-world problems. This is demonstrated through my work on projects like the EcoInsights Platform for sustainability tracking and FundReach Digital for enhancing non-profit outreach. My leadership roles have enabled me to manage teams, coordinate complex projects from end to end, and foster a culture of innovation and collaboration.
        </p>
        <p class="mb-4 text-base sm:text-lg">
            With a proven ability to develop and implement digital tools that improve efficiency and drive social impact, I am always seeking opportunities to apply my skills in challenging and meaningful ways.
        </p>
        <div class="mt-12 mb-12">
            <h3 class="text-lg font-semibold text-slate-200 mb-4">Core Competencies</h3>
            <div class="flex flex-wrap gap-2">
                ${SKILLS.map(skill => createSkillBadge(skill)).join('')}
            </div>
        </div>
        <hr>
    `;
    renderSectionContent('about', 'About', content);
};

const renderExperience = () => {
    const content = `
        <div class="relative space-y-12 pl-8 sm:pl-12 before:absolute before:inset-0 before:left-2 sm:before:left-3 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-slate-800 before:content-['']">
            ${EXPERIENCES.map((exp, index) => `
                <div class="relative group">
                    <!-- Timeline Dot -->
                    <div class="absolute left-[-2rem] sm:left-[-3rem] top-1.5 h-4 w-4 rounded-full border-2 border-slate-700 bg-slate-900 transition-all duration-300 group-hover:border-teal-400 group-hover:bg-teal-400 group-hover:shadow-[0_0_12px_rgba(45,212,191,0.5)] group-hover:scale-125 z-10"></div>
                    
                    <!-- Content Card -->
                    <div class="relative rounded-lg border border-transparent p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-slate-800/20 hover:border-slate-700/50 hover:shadow-lg lg:hover:!opacity-100 group-hover:translate-x-1">
                        <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                             <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-teal-300 transition-colors">${exp.role}</h3>
                             <span class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mt-1 sm:mt-0">${exp.duration}</span>
                        </div>
                        <div class="text-base sm:text-lg md:text-xl font-medium text-teal-400 mb-4 flex items-center">
                            <span class="mr-2">@</span>${exp.company}
                        </div>
                        
                        <div class="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base space-y-3">
                            ${exp.description.map(desc => `<p class="relative pl-4 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-600">${desc}</p>`).join('')}
                        </div>

                        <ul class="flex flex-wrap gap-2" aria-label="Technologies used">
                            ${exp.skills.map(skill => `
                                <li>
                                    <div class="flex items-center rounded-full bg-teal-400/5 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-400/10 hover:bg-teal-400/10 transition-colors">
                                        ${skill}
                                    </div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
        <hr class="mt-16 border-slate-800/50">
    `;
    renderSectionContent('experience', 'Experience', content);
};

const renderProjects = () => {
    const content = `
        <ul class="group/list">
            ${PROJECTS.map(project => `
                <li class="mb-12 group-list-item">
                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 tilt-card rounded-md p-6 border border-transparent hover:border-teal-400/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:bg-slate-800/10 duration-300">
                        <div class="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                                <a
                                    class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-lg sm:text-xl font-bold"
                                    href="${project.liveUrl || project.repoUrl || "#"}"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="${project.title} (opens in a new tab)"
                                >
                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block text-lg"></span>
                                    <span>${project.title} ${createArrowRightIcon()}</span>
                                </a>
                            </h3>
                            <p class="mt-2 text-sm sm:text-base leading-normal text-slate-400">${project.description}</p>
                            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                ${project.tags.map(tag => `
                                    <li class="mr-1.5 mt-2">
                                        ${createSkillBadge(tag)}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <img alt="${project.title}" width="200" height="48" class="image rounded border-2 border-teal-400/30 shadow-[0_0_15px_rgba(45,212,191,0.2)] transition group-hover:border-teal-400/60 group-hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] sm:order-1 sm:col-span-2 sm:translate-y-1 cursor-pointer relative z-20" style="color: transparent;" src="${project.imageUrl}" />
                    </div>
                </li>
            `).join('')}
        </ul>
        <hr>
            `;
    renderSectionContent('projects', 'Projects', content);
};

const renderPublications = () => {
    const content = `
            <ul class="group/list">
                ${PUBLICATIONS.map(pub => `
                <li class="mb-12 group-list-item">
                    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 tilt-card rounded-md p-6 border border-transparent hover:border-teal-400/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:bg-slate-800/10 duration-300">
                        <div class="z-10 sm:col-span-2 mb-2 mt-1">
                            ${pub.image ? `
                                <div class="relative group/image">
                                    <img alt="${pub.title}" width="200" height="100" class="image rounded border-2 border-teal-400/30 shadow-[0_0_15px_rgba(45,212,191,0.2)] transition group-hover:border-teal-400/60 group-hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] object-cover w-full cursor-pointer" src="${pub.image}" />
                                    <div class="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm border border-teal-400/30 rounded px-2 py-1 text-xs font-semibold text-teal-300 shadow-lg pointer-events-none">
                                        ${pub.year}
                                    </div>
                                </div>
                            ` : `
                                <header class="text-xs lg:text-lg font-semibold uppercase tracking-wide text-slate-500 mb-2" aria-label="${pub.year}">${pub.year}</header>
                            `}
                        </div>
                        <div class="z-10 sm:col-span-6">
                            <h3 class="font-medium leading-snug text-slate-200 text-lg">
                                ${pub.url ? `
                                    <a href="${pub.url}" target="_blank" rel="noreferrer noopener" class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base cursor-pointer relative z-20">
                                        <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block bg-slate-800/0 group-hover/link:bg-slate-800/50 transition-colors"></span>
                                        <span class="relative z-10">${pub.title}</span>
                                        <span class="inline-block ml-2 text-slate-400 group-hover/link:text-teal-300 transition-colors relative z-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                            </svg>
                                        </span>
                                    </a>
                                ` : `
                                    <div class="inline-flex relative items-baseline font-medium leading-tight text-slate-200 group/link text-base">
                                        <span>${pub.title}</span>
                                    </div>
                                `}
                            </h3>
                            <p class="mt-2 text-sm leading-normal text-slate-400">
                                ${pub.authors} · <span class="italic">${pub.journal}</span>
                            </p>
                            <p class="mt-1 text-sm leading-normal text-slate-500">
                                ${pub.details}
                            </p>
                        </div>
                    </div>
                </li>
            `).join('')}
            </ul>
            <hr>
                `;
    renderSectionContent('publications', 'Publications', content);
};

const renderCertifications = () => {
    const content = `
                <ul class="group/list">
                    ${CERTIFICATIONS.map(cert => `
                <li class="mb-12 group-list-item">
                    <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 tilt-card rounded-md p-6 border border-transparent hover:border-teal-400/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:bg-slate-800/10 duration-300">
                        <div class="z-10 sm:col-span-8">
                            <div class="col-span-2 w-full flex">
                                <img alt="${cert.title}" class="image w-48 h-32 mx-2 p-1 rounded border-2 border-teal-400/30 shadow-[0_0_15px_rgba(45,212,191,0.2)] transition hover:border-teal-400/60 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] object-cover" src="${cert.image}" />
                                <div>
                                    <h3 class="font-medium leading-snug text-slate-200">
                                        <div class="text-lg text-slate-200">
                                            <div class="cert-title-trigger inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-lg cursor-pointer" data-image="${cert.image}" data-title="${cert.title}" role="button" tabindex="0">
                                                <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>${cert.title} ${createArrowRightIcon()}</span>
                                            </div>
                                        </div>
                                    </h3>
                                    <p class="mt-2 text-md leading-normal text-slate-400">${cert.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            `).join('')}
                </ul>
                <hr>
                    `;
    renderSectionContent('certifications', 'Certifications', content);
};

const renderContact = () => {
    const content = `
                    <h2 class="text-xl font-bold tracking-tight text-slate-200 sm:text-3xl">Get In Touch</h2>
                    <p class="mt-4 max-w-lg leading-normal text-slate-400">
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you! Feel free to reach out about potential projects or collaboration opportunities.
                    </p>
                    <div class="mt-8">
                        <a href="mailto:sharmasuman2059@gmail.com" class="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group text-base magnetic-btn transition-transform duration-200 ease-out">
                            <span>
                                <span class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                    Say Hello
                                </span>
                                ${createArrowRightIcon()}
                            </span>
                        </a>
                    </div>
                    `;
    renderSectionContent('contact', 'Contact', content);
};

const renderVolunteering = () => {
    const content = `
                    <ul class="group/list">
                        ${VOLUNTEERING.map(volunteer => `
                <li class="mb-12 group-list-item">
                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 tilt-card rounded-md p-6 border border-transparent hover:border-teal-400/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:bg-slate-800/10 duration-300">
                        <div class="z-10 sm:order-2 sm:col-span-8">
                            <h3>
                                <span class="font-medium leading-tight text-slate-200 text-lg">
                                    ${volunteer.title}
                                </span>
                            </h3>
                            ${volunteer.location ? `<p class="text-sm text-slate-500 mb-2">${volunteer.location}</p>` : ''}
                            <div class="mt-2 text-md leading-normal text-slate-400">
                                ${Array.isArray(volunteer.description)
            ? `<ul class="list-disc list-outside ml-5 space-y-1">${volunteer.description.map(desc => `<li>${desc}</li>`).join('')}</ul>`
            : `<p>${volunteer.description}</p>`
        }
                            </div>
                            <p class="text-sm text-slate-500 mt-2"><strong>Duration:</strong> ${volunteer.duration}</p>
                            <ul class="mt-2 flex flex-wrap" aria-label="Skills">
                                ${volunteer.skills.map(skill => `
                                    <li class="mr-1.5 mt-2">
                                        ${createSkillBadge(skill)}
                                    </li>
                                `).join('')}
                            </ul>
                            ${volunteer.images && volunteer.images.length > 0 ? `
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                    ${volunteer.images.map(image => `
                                        <img alt="Volunteer Image" class="image rounded-lg border-2 border-teal-400/30 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:border-teal-400/60 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all duration-300 bg-slate-900 w-full h-32 object-cover cursor-pointer" src="${image}" />
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </li>
            `).join('')}
                    </ul>
                    <hr>
                        `;
    renderSectionContent('volunteer', 'Volunteering', content);
};

const renderBlog = () => {
    const content = `
                        <div class="blog-articles-grid">
                            ${BLOG_ARTICLES.map(article => createBlogArticleCard(article)).join('')}
                        </div>
                        <hr class="mt-12">
                            `;
    renderSectionContent('blog', 'Blogs', content);
};

// --- MODAL FUNCTION ---
const createImageModal = (imageUrl, altText) => {
    const modal = document.createElement('div');
    // Semi-transparent black background (glassy feel), flex center, initial opacity 0
    modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex justify-center items-center opacity-0 transition-opacity duration-300';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Image viewer');

    modal.innerHTML = `
                            <div class="relative w-full h-full flex items-center justify-center p-4">
                                <img src="${imageUrl}" alt="${altText}" class="max-w-full max-h-full object-contain transform scale-90 opacity-0 transition-all duration-300 ease-out" />
                                <button class="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full z-50 p-2 focus:outline-none transition-colors" aria-label="Close image viewer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Trigger animation
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        const img = modal.querySelector('img');
        img.classList.remove('scale-90', 'opacity-0');
        img.classList.add('scale-100', 'opacity-100');
    });

    const closeButton = modal.querySelector('button');

    const closeModal = () => {
        modal.classList.add('opacity-0');
        const img = modal.querySelector('img');
        img.classList.remove('scale-100', 'opacity-100');
        img.classList.add('scale-90', 'opacity-0');

        setTimeout(() => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            }
        }, 300);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    modal.addEventListener('click', (e) => {
        // Close on click anywhere (except maybe the image itself? No, usually lightbox closes on background click, but user said "Clean Lightbox", often clicking image does nothing or zooms more. Let's close on background click)
        // Actually, clicking anywhere is fine for a simple viewer.
        if (e.target !== modal.querySelector('img')) {
            closeModal();
        }
    });

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('keydown', handleKeyDown);
    closeButton.focus();
};

// --- TYPING EFFECT ---
const typedTextElement = document.getElementById('typedText');
const sentences = [
    "innovative and impactful digital solutions.",
    "user-friendly experiences for the digital world.",
    "solutions that simplify complex processes."
];

let sentenceIndex = 0;
let wordIndex = 0;
let letterIndex = 0;

function typeWord() {
    const currentWord = sentences[sentenceIndex].split(' ')[wordIndex];

    if (letterIndex < currentWord.length) {
        typedTextElement.textContent += currentWord.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWord, 100);
    } else {
        typedTextElement.textContent += ' ';
        wordIndex++;
        letterIndex = 0;

        if (wordIndex < sentences[sentenceIndex].split(' ').length) {
            setTimeout(typeWord, 200);
        } else {
            setTimeout(() => {
                typedTextElement.textContent = '';
                wordIndex = 0;
                sentenceIndex = (sentenceIndex + 1) % sentences.length;
                typeWord();
            }, 1000);
        }
    }
}

// --- SKELETON LOADER ---
const createSkeletonLine = (width = 'w-full', height = 'h-4', mb = 'mb-2') =>
    `<div class="animate-pulse bg-slate-800/50 rounded ${width} ${height} ${mb}"></div>`;

const createSkeletonCard = () => `
                            <div class="mb-12 group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
                                <div class="sm:col-span-2">
                                    ${createSkeletonLine('w-20', 'h-4')}
                                </div>
                                <div class="sm:col-span-6">
                                    ${createSkeletonLine('w-3/4', 'h-6', 'mb-4')}
                                    ${createSkeletonLine('w-full', 'h-4')}
                                    ${createSkeletonLine('w-full', 'h-4')}
                                    ${createSkeletonLine('w-2/3', 'h-4', 'mb-4')}
                                    <div class="flex gap-2">
                                        ${createSkeletonLine('w-16', 'h-6', 'rounded-full')}
                                        ${createSkeletonLine('w-16', 'h-6', 'rounded-full')}
                                        ${createSkeletonLine('w-16', 'h-6', 'rounded-full')}
                                    </div>
                                </div>
                            </div>
                            `;

const renderSkeleton = () => {
    // About Skeleton
    renderSectionContent('about', 'About', `
        ${createSkeletonLine('w-full', 'h-4')}
        ${createSkeletonLine('w-full', 'h-4')}
        ${createSkeletonLine('w-3/4', 'h-4', 'mb-6')}
        ${createSkeletonLine('w-full', 'h-4')}
        ${createSkeletonLine('w-5/6', 'h-4', 'mb-6')}
    `);

    // Experience Skeleton
    renderSectionContent('experience', 'Experience', `
                            ${createSkeletonCard()}
                            ${createSkeletonCard()}
                            ${createSkeletonCard()}
                            `);

    // Projects Skeleton
    renderSectionContent('projects', 'Projects', `
                            ${createSkeletonCard()}
                            ${createSkeletonCard()}
                            ${createSkeletonCard()}
                            `);

    // Other sections...
    const simpleSkeleton = `
                            ${createSkeletonLine('w-full', 'h-4')}
                            ${createSkeletonLine('w-full', 'h-4')}
                            ${createSkeletonLine('w-2/3', 'h-4')}
                            `;

    renderSectionContent('publications', 'Publications', simpleSkeleton);
    renderSectionContent('certifications', 'Certifications', simpleSkeleton);
    renderSectionContent('volunteer', 'Volunteering', simpleSkeleton);
    renderSectionContent('blog', 'Blog', `
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div class="h-48 animate-pulse bg-slate-800/50 rounded"></div>
                                <div class="h-48 animate-pulse bg-slate-800/50 rounded"></div>
                            </div>
                            `);
    renderSectionContent('contact', 'Contact', simpleSkeleton);
};



// --- MAGNETIC BUTTONS ---
const initMagneticButtons = () => {
    const buttons = document.querySelectorAll('.magnetic-btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Magnetic strength
            const strength = 20;
            const xMove = (x / rect.width) * strength;
            const yMove = (y / rect.height) * strength;

            btn.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px)';
        });
    });
};

// --- 3D TILT EFFECT ---
const initTiltEffect = () => {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
};


// --- STAGGERED ENTRANCE ANIMATION ---
const initStaggeredAnimations = () => {
    const items = document.querySelectorAll('.group-list-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on the index of the entry in this batch
                setTimeout(() => {
                    entry.target.classList.add('stagger-visible');
                }, index * 100); // 100ms stagger delay

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    items.forEach(item => {
        item.classList.add('stagger-item');
        observer.observe(item);
    });
};

// --- MAIN EXECUTION ---
document.addEventListener('DOMContentLoaded', () => {
    // Render Navigation immediately
    renderNav();

    // Render Skeletons immediately
    renderSkeleton();

    // Simulate loading delay
    setTimeout(() => {
        // Render actual content
        renderAbout();
        renderExperience();
        renderProjects();
        renderPublications();
        renderCertifications();
        renderVolunteering();
        renderBlog();
        renderContact();

        // Start typing effect after content loads
        typeWord();

        // Re-check scroll after content load
        checkSidebarScroll();

        // Initialize Magnetic Buttons
        initMagneticButtons();

        // Initialize 3D Tilt Effect
        initTiltEffect();

        // Initialize Staggered Animations
        initStaggeredAnimations();

        // Global Modal Delegation (Click)
        document.addEventListener('click', (e) => {
            // Handle Image Clicks (Projects, Volunteering, Certs)
            if (e.target.matches('.image') || e.target.classList.contains('image')) {
                const img = e.target;
                const imageUrl = img.getAttribute('src');
                // Only open if it has a src
                if (imageUrl) {
                    const altText = img.getAttribute('alt');
                    createImageModal(imageUrl, altText || 'Image');
                }
                return;
            }

            // Handle Cert Title Clicks
            const certTrigger = e.target.closest('.cert-title-trigger');
            if (certTrigger) {
                e.preventDefault();
                const imageUrl = certTrigger.dataset.image;
                const modalTitle = certTrigger.dataset.title;
                if (imageUrl) {
                    createImageModal(imageUrl, `Certificate for ${modalTitle}`);
                }
                return;
            }
        });

        // Global Modal Delegation (Keydown)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                // Check for .image
                if (e.target.matches('.image') || e.target.classList.contains('image')) {
                    e.preventDefault();
                    const img = e.target;
                    const imageUrl = img.getAttribute('src');
                    if (imageUrl) {
                        createImageModal(imageUrl, img.getAttribute('alt') || 'Image');
                    }
                } else {
                    // Check for .cert-title-trigger
                    const certTrigger = e.target.closest('.cert-title-trigger');
                    if (certTrigger) {
                        e.preventDefault();
                        const imageUrl = certTrigger.dataset.image;
                        if (imageUrl) {
                            createImageModal(imageUrl, `Certificate for ${certTrigger.dataset.title}`);
                        }
                    }
                }
            }
        });

    }, 800);

    // Download CV button
    document.getElementById('download-btn').addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'cv.pdf';
        link.click();
    });


    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navContainer = document.getElementById('nav-links-container');

    const openNav = () => {
        navContainer.classList.remove('-left-full');
        navContainer.classList.add('left-0');
        mobileNavToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeNav = () => {
        navContainer.classList.remove('left-0');
        navContainer.classList.add('-left-full');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    mobileNavToggle.addEventListener('click', openNav);

    navContainer.addEventListener('click', (e) => {
        if (e.target.closest('#mobile-nav-close') || e.target.closest('.nav-link')) {
            closeNav();
        }
    });

    // Blog modal handlers
    document.getElementById('blogModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeBlogModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const blogModal = document.getElementById('blogModal');
            if (blogModal.classList.contains('active')) {
                closeBlogModal();
            }
        }
    });

    // Spotlight effect
    const spotlight = document.getElementById('spotlight');
    const body = document.body;
    if (spotlight) {
        body.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            requestAnimationFrame(() => {
                spotlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.05), transparent 80%)`;
            });
        });
    }

    // Nav active state on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const sectionVisibility = new Map();

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            sectionVisibility.set(entry.target.getAttribute('id'), entry.intersectionRatio);
        });

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeSectionId = null;

        for (const [id, ratio] of sectionVisibility.entries()) {
            if (ratio > maxRatio) {
                maxRatio = ratio;
                activeSectionId = id;
            }
        }

        // If no section is clearly visible (e.g. fast scroll), keep the last one or do nothing
        // But usually with multiple thresholds, we'll get *something*.

        if (activeSectionId) {
            navLinks.forEach(link => {
                const linkHrefId = link.getAttribute('href').substring(1);
                if (linkHrefId === activeSectionId) {
                    if (!link.classList.contains('active')) {
                        link.classList.add('active');
                        // Auto-scroll sidebar on desktop to keep active link visible
                        if (window.innerWidth >= 1024) {
                            link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                    }
                } else {
                    link.classList.remove('active');
                }
            });
        }

    }, observerOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Fade-in effect for sections
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    fadeSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Check for sidebar scroll on load and resize
    checkSidebarScroll();
    window.addEventListener('resize', checkSidebarScroll);

    // --- BACK TO TOP LOGIC ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('translate-y-20', 'opacity-0');
            } else {
                backToTopBtn.classList.add('translate-y-20', 'opacity-0');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- SCROLL PROGRESS BAR LOGIC ---
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            progressBar.style.width = `${scrolled}%`;
        });
    }
});

// --- ZOOM WARNING LOGIC ---
let zoomWarningDismissed = false;

function checkSidebarScroll() {
    const header = document.querySelector('header');
    const warning = document.getElementById('zoom-warning');

    if (!header || !warning) return;

    // Check if header is actually visible and in sidebar mode (lg screens)
    const isLgScreen = window.matchMedia('(min-width: 1024px)').matches;
    const isScrolling = isLgScreen && header.scrollHeight > header.clientHeight;

    if (isScrolling) {
        // Sidebar is scrolling
        if (!zoomWarningDismissed) {
            warning.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            requestAnimationFrame(() => {
                warning.classList.remove('-translate-y-[150%]', 'opacity-0');
            });
        }
    } else {
        // Sidebar fits or not in sidebar mode
        warning.classList.add('-translate-y-[150%]', 'opacity-0');
        setTimeout(() => {
            warning.classList.add('hidden');
        }, 300); // Wait for transition

        // Reset dismissed flag so it warns again if scrolling returns
        zoomWarningDismissed = false;
    }
}

function dismissZoomWarning() {
    zoomWarningDismissed = true;
    const warning = document.getElementById('zoom-warning');
    if (warning) {
        warning.classList.add('-translate-y-[150%]', 'opacity-0');
        setTimeout(() => {
            warning.classList.add('hidden');
        }, 300);
    }
}
