// Update the Question interface to include foundational concept and content category fields
export interface Question {
  id: string
  type: "passage" | "discrete"
  passageId?: string // Links questions to the same passage
  passage?: string // The passage text (only stored with the first question in a group)
  question: string
  options: string[]
  optionImages?: string[] // Add support for image-based options
  correctAnswer: string
  image?: string
  topic: string
  explanation?: string // Add explanation field
  explanationImage?: string // Add explanation image field

  // New metadata fields
  foundationalConcept?: string // e.g., "1", "4", "6"
  contentCategory?: string // e.g., "1A", "4C", "6B"
  disciplines?: string[] // e.g., ["BIO", "BC"]
  subtopics?: string[] // e.g., ["Metabolism", "Fatty Acids"]
  difficulty?: "Beginner" | "Intermediate" | "Advanced"
  skillsTested?: string[] // e.g., ["Knowledge of Scientific Concepts", "Scientific Reasoning"]
}

// Define the Passage interface to store complete passages
export interface Passage {
  id: string
  text: string
  topic: string
  image?: string// Add support for passage images
  questions: Question[]
}

// Critical Analysis and Reasoning Skills
export const section2Passages: Passage[] = [
  {
    id: "passage-philosophy-justice",
    text: "In the early nineteenth century, a large number of communal experiments, both secular and religious, sprang up in the northeastern United States. These communities shared the belief that it was possible to create a more perfect society through the proper social arrangements. The secular communities, such as Brook Farm, were inspired by the ideas of Charles Fourier, Robert Owen, and other European social theorists who believed that the competitive nature of capitalism was the source of society's ills. The religious communities, such as the Shakers and the Oneidans, were inspired by the belief that the Second Coming of Christ was imminent and that a more perfect society would hasten its arrival.\n\nBrook Farm, founded in 1841 in West Roxbury, Massachusetts, was one of the most famous of these communities. Led by George Ripley, a Unitarian minister, Brook Farm was based on the idea that a balance of manual and intellectual labor would create a more fulfilling life. The community attracted many notable intellectuals, including Nathaniel Hawthorne, who later wrote about his experiences in his novel The Blithedale Romance. Despite its intellectual vigor, Brook Farm struggled financially. The members, many of whom were more suited to intellectual than agricultural labor, found farming difficult and unpleasant. After a fire destroyed the community's main building in 1846, Brook Farm disbanded.\n\nThe Oneida Community, founded by John Humphrey Noyes in 1848 in Oneida, New York, was more successful. Noyes, who had studied theology at Yale, believed that Christ had already returned in 70 AD, making it possible for people to achieve perfection in this life. The Oneidans practiced 'complex marriage,' in which all members were considered married to each other, and 'mutual criticism,' in which members publicly critiqued each other's behavior. The Oneidans believed that monogamy was selfish and that by sharing partners, they could create a more selfless society. Unlike Brook Farm, the Oneida Community was economically successful, manufacturing steel traps and silverware. However, after Noyes fled to Canada to avoid prosecution for statutory rape, the community abandoned complex marriage and eventually became a joint-stock company, Oneida Ltd., which still exists today.",
    topic: "criticalThinking",
    questions: [
      {
        id: "cars-passage1-q1",
        type: "passage",
        passageId: "passage-philosophy-justice",
        question: "The passage implies that the end of the Brook Farm experiment was probably brought on by",
        options: [
          "faltering commitment in the face of hardship.",
          "a failure to attract members of sufficient intellect or ability.",
          "the completion of the community's aims.",
          "the incompetence of philosophers at field labor.",
        ],
        correctAnswer: "faltering commitment in the face of hardship.",
        explanation:
          "This is an inference question regarding Brook Farm's demise. The last half of the first paragraph suggests that Brook Farm failed because the Farm's members found farming 'difficult and unpleasant,' indicating their commitment faltered when faced with the hardships of agricultural labor. The fire that destroyed the main building was the final blow, but the underlying issue was the members' struggle with the manual labor required.",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage1-q2",
        type: "passage",
        passageId: "passage-philosophy-justice",
        question: "According to the passage, the Oneidans believed that",
        options: [
          "men and women were equal in the eyes of God.",
          "monogamy was wrong in principle.",
          "rules and standards of behavior were unnecessary.",
          "they were destined to witness Christ's second coming.",
        ],
        correctAnswer: "monogamy was wrong in principle.",
        explanation:
          "This is a detail question regarding the Oneidans' beliefs. The Oneidans are discussed in paragraph 2. In the middle of that paragraph we learn that they felt monogamy was a selfish act, and that by sharing partners, they could create a more selfless society. This directly supports option B.",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage1-q3",
        type: "passage",
        passageId: "passage-philosophy-justice",
        question: "The author of the passage would most likely agree with which of the following statements?",
        options: [
          "Religious communities were more successful than secular ones.",
          "The communal experiments of the nineteenth century were ultimately failures.",
          "Economic success was a key factor in the longevity of communal experiments.",
          "The ideals of communal living are incompatible with human nature.",
        ],
        correctAnswer: "Economic success was a key factor in the longevity of communal experiments.",
        explanation:
          "This question asks about the author's likely opinion. The passage contrasts Brook Farm, which 'struggled financially' and eventually disbanded, with the Oneida Community, which was 'economically successful' and eventually transformed into a company that 'still exists today.' This contrast suggests that economic success was a key factor in the longevity of these communities.",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage1-q4",
        type: "passage",
        passageId: "passage-philosophy-justice",
        question: "Which of the following best describes the organization of the passage?",
        options: [
          "A chronological account of the rise and fall of communal experiments",
          "A comparison of two different types of communal experiments",
          "An argument for the superiority of religious over secular communities",
          "A thesis about communal living followed by supporting examples",
        ],
        correctAnswer: "A comparison of two different types of communal experiments",
        explanation:
          "The passage begins by introducing both secular and religious communal experiments, then provides detailed examples of each type: Brook Farm (secular) and the Oneida Community (religious). The structure is comparative, highlighting the differences in their beliefs, practices, and outcomes.",
        topic: "criticalThinking",
      },
    ],
  },
  {
    id: "passage-science-climate",
    text: "Climate scientists have long understood the fundamental physics of climate change: certain gases in the atmosphere, including carbon dioxide, methane, and water vapor, trap heat that would otherwise escape into space. This 'greenhouse effect' is essential for life on Earth—without it, the planet would be too cold for most organisms to survive. However, human activities, particularly the burning of fossil fuels and deforestation, have significantly increased the concentration of greenhouse gases in the atmosphere, enhancing the greenhouse effect and leading to global warming.\n\nThe evidence for anthropogenic (human-caused) climate change is overwhelming. Global temperature records show that Earth has warmed by approximately 1°C since the pre-industrial era, with the rate of warming accelerating in recent decades. This warming correlates strongly with the increase in atmospheric carbon dioxide, which has risen from about 280 parts per million (ppm) in the pre-industrial era to over 410 ppm today—higher than at any point in at least the past 800,000 years, as revealed by ice core data. Other lines of evidence include the pattern of warming (with greater warming at the poles), cooling in the upper atmosphere (as predicted by greenhouse gas theory), and the timing of warming coinciding with industrialization.\n\nThe consequences of climate change are already apparent and are expected to become more severe as warming continues. Rising sea levels threaten coastal communities and small island nations. More frequent and intense heat waves, droughts, and extreme precipitation events affect agriculture, infrastructure, and human health. Ecosystems are changing, with some species shifting their ranges poleward or to higher elevations, while others face extinction. Ocean acidification, caused by the absorption of carbon dioxide, threatens marine organisms, particularly those that build shells or skeletons from calcium carbonate.\n\nAddressing climate change requires both mitigation (reducing greenhouse gas emissions) and adaptation (preparing for unavoidable changes). Mitigation strategies include transitioning from fossil fuels to renewable energy sources, improving energy efficiency, protecting and restoring forests, and developing carbon capture technologies. Adaptation measures include building sea walls, developing drought-resistant crops, improving early warning systems for extreme weather events, and creating wildlife corridors to facilitate species migration. The most effective approach will likely involve a combination of these strategies, implemented through coordinated international action.",
    topic: "criticalThinking",
    questions: [
      {
        id: "cars-passage2-q1",
        type: "passage",
        passageId: "passage-science-climate",
        question: "According to the passage, which of the following is NOT evidence for anthropogenic climate change?",
        options: [
          "The correlation between rising carbon dioxide levels and global temperatures",
          "The pattern of greater warming at the poles",
          "The cooling of the upper atmosphere",
          "The extinction of certain plant and animal species",
        ],
        correctAnswer: "The extinction of certain plant and animal species",
        explanation:
          "This is a detail question asking about evidence for anthropogenic climate change. The passage mentions species extinction as a consequence of climate change in the third paragraph, not as evidence that climate change is happening or that it is caused by humans. The other options are all explicitly listed as evidence in the second paragraph.",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage2-q2",
        type: "passage",
        passageId: "passage-science-climate",
        question: "The author of the passage would most likely agree with which of the following statements?",
        options: [
          "The greenhouse effect is harmful and should be eliminated.",
          "Climate change is a natural process that humans have accelerated.",
          "Addressing climate change requires either mitigation or adaptation, but not both.",
          "The most effective approach to climate change involves international cooperation.",
        ],
        correctAnswer: "The most effective approach to climate change involves international cooperation.",
        explanation:
          "This question asks about the author's likely opinion. In the final paragraph, the author states that the most effective approach to addressing climate change will 'likely involve a combination of these strategies, implemented through coordinated international action.' This directly supports option D. Option A contradicts the passage, which states that the greenhouse effect is 'essential for life on Earth.' Option B oversimplifies the author's view, and option C contradicts the author's statement that addressing climate change requires 'both mitigation and adaptation.'",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage2-q3",
        type: "passage",
        passageId: "passage-science-climate",
        question:
          "Based on the passage, which of the following would be classified as a mitigation strategy rather than an adaptation strategy?",
        options: [
          "Building sea walls to protect coastal communities",
          "Developing drought-resistant crops",
          "Transitioning from fossil fuels to renewable energy",
          "Creating wildlife corridors to facilitate species migration",
        ],
        correctAnswer: "Transitioning from fossil fuels to renewable energy",
        explanation:
          "This question tests your understanding of the distinction between mitigation and adaptation as presented in the passage. According to the fourth paragraph, mitigation involves 'reducing greenhouse gas emissions,' while adaptation involves 'preparing for unavoidable changes.' Transitioning from fossil fuels to renewable energy is explicitly listed as a mitigation strategy. The other options are all adaptation strategies, as they involve preparing for or responding to climate changes rather than preventing them.",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage2-q4",
        type: "passage",
        passageId: "passage-science-climate",
        question: "The passage suggests that ocean acidification is caused by",
        options: [
          "rising sea levels.",
          "the absorption of carbon dioxide by the ocean.",
          "the melting of polar ice caps.",
          "increased water temperatures.",
        ],
        correctAnswer: "the absorption of carbon dioxide by the ocean.",
        explanation:
          "This is a detail question. The passage explicitly states in the third paragraph that 'Ocean acidification, caused by the absorption of carbon dioxide, threatens marine organisms...' This directly supports option B.",
        topic: "criticalThinking",
      },
      {
        id: "cars-passage2-q5",
        type: "passage",
        passageId: "passage-science-climate",
        question: "Which of the following best describes the purpose of the first paragraph?",
        options: [
          "To argue that the greenhouse effect is harmful to life on Earth",
          "To explain the basic science underlying climate change",
          "To contrast natural and anthropogenic climate change",
          "To describe the history of climate science",
        ],
        correctAnswer: "To explain the basic science underlying climate change",
        explanation:
          "The first paragraph explains the fundamental physics of climate change: how greenhouse gases trap heat, why this effect is natural and necessary for life, and how human activities have enhanced this effect. This is a basic explanation of the science underlying climate change, making option B the best answer. The paragraph does not argue that the greenhouse effect is harmful (in fact, it states the opposite), does not focus on contrasting natural and anthropogenic climate change, and does not describe the history of climate science.",
        topic: "criticalThinking",
      },
    ],
  },
]

// Biological and Biochemical Foundations
export const section3Passages: Passage[] = [
    {
        id: "passage-Just-as-the-ingestion",
        text: "Just as the ingestion of nutrients is mandatory for human life, so is the excretion of metabolic waste products. One of these nutrients, protein, is used for building muscle, nucleic acids, and countless compounds integral to homeostasis. However, the catabolism of the amino acids generated from protein digestion produces ammonia, which, if not further degraded, can become toxic. Similarly, if the same salts that provide energy and chemical balance to cells are in excess, fluid retention will occur, damaging the circulatory, cardiac, and pulmonary systems. One of the most important homeostatic organs is the kidney, which closely regulates the excretion and reabsorption of many essential ions and molecules. One mechanism of renal function involves the secretion of antidiuretic hormone (ADH). Diabetes insipidus (DI), is the condition that occurs when ADH is ineffective. As a result, the kidneys are unable to concentrate urine, leading to excessive water loss. There are two types of DI \" central and nephrogenic. Central DI occurs when there is a deficiency in the quantity or quality of ADH produced. Nephrogenic DI occurs when the kidney tubules are unresponsive to ADH. To differentiate between these two conditions, a patients urine osmolarity is measured both prior to therapy and after a 24-hour restriction on fluid intake. Exogenous ADH is then administered and urine osmolarity is measured again. The table below gives the results of testing on four patients. Assume that a urine osmolarity of 285 mOsm/L of H O is normal.",
        image: "images/q35/1.jpg",
        topic: "biology",
        questions: [
          {
            id: "passage-Just-as-the-ingestion-q1",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "An elevated and potentially toxic level of ammonia in the blood (hyperammonemia) would most likely result from a defect in an enzyme involved in:",
            options: [
              "glycolysis.",
              "fatty acid catabolism.",
              "the urea cycle.",
              "nucleic acid degradation."
            ],
            correctAnswer: "the urea cycle.",
            explanation: "According to the passage, the catabolism of amino acids, which are the molecules that make up proteins, produces ammonia. First of all, what does catabolism mean? You know that metabolism can be divided into catabolism and anabolism. Catabolism refers to pathways in which larger molecules are broken down into smaller parts. If you have trouble remembering the difference between catabolism and anabolism, just associate anabolism with anabolic steroids. And anabolic steroids are used by weight lifters to BUILD muscle, therefore anabolism must refer to the pathways in which smaller molecules are BUILT into larger molecules. And once youve committed that to memory, youll always remember that catabolism must be the opposite. We know from the passage that if the ammonia that is produced as a by-product of amino acid breakdown is not further degraded, it can become toxic, depending on its concentration in the blood. To answer the question, you need to recall that the end product of amino acid degradation is urea, which means that ammonia must feed into the urea cycle. The concentration of ammonia in the blood would become elevated and potentially toxic if one of the enzymes involved in the urea cycle was defective. Thus choice C is the correct answer. Choice A, glycolysis, refers to the catabolism of glucose into pyruvate. Choice B, fatty acid catabolism, refers to the breakdown of fatty acids into acetyl CoA. Choice D, nucleic acid degradation, refers to the breakdown of DNA and RNA into nucleotides. Therefore choices A, B, and D are not involved in protein or ammino acid catabolism, and so they are all incorrect.",
            topic: "biology"
          },
          {
            id: "passage-Just-as-the-ingestion-q2",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "According to the passage, the catabolism of amino acids produces ammonia. Therefore, after a protein rich meal, would you expect a build-up of ammonia in the lumen of the small intestine?",
            options: [
              "Yes, because the ammonia will not be able to diffuse into the intestinal epithelium.",
              "Yes, because the rate at which digestive enzymes degrade ammonia is slower than the rate at which ammonia is produced.",
              "No, because the ammonia will diffuse into the intestinal epithelium and will be excreted by the kidneys.",
              "No, because the ammonia is produced inside individual cells, not within the lumen of the small intestine."
            ],
            correctAnswer: "No, because the ammonia is produced inside individual cells, not within the lumen of the small intestine.",
            explanation: "To answer this question, you need to recall the site of protein digestion, and the fate of the amino acids produced by this digestion. So lets review the digestive system as it relates to proteins. Food enters the stomach from the pharynx and esophagus. When protein- containing food reaches the stomach, its presence causes the release of the hormone gastrin, which stimulates the secretion of HCl, and pepsinogen, and muscular contractions of the stomach. HCl initiates the conversion of pepsinogen to its active form, pepsin. Pepsin breaks down proteins into peptides. The peptides then enter the small intestine. Three types of peptide-digesting enzymes are secreted into the small intestine; enterokinase, aminopeptidases, and dipeptidases. The combination of these three enzyme types breaks apart all peptide bonds, producing only single amino acids and dipeptides. The single amino acids and peptides are then absorbed into the epithelial cells lining the small intestine by active transport. These molecules all enter the bloodstream by way of the capillaries of the villi. Villi are the finger-like projections lining the small intestine that serve to increase the absorptive surface area of the intestine. From the bloodstream the amino acids enter individual cells. Inside these cells, the amino acids are used to either build new proteins or other biological molecules, or they are completely catabolized, in which case ammonia is produced. This ammonia then enters the urea cycle, and the urea produced in the process exits the cells and is excreted in the urine. So from this discussion of the digestion of protein, it is clear that ammonia is NOT produced inside the lumen of the small intestine. Therefore, choices A, B, and C are all wrong and choice D is the correct answer.",
            topic: "biology"
          },
          {
            id: "passage-Just-as-the-ingestion-q3",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "Which of the following substances would NOT be found in appreciable quantity in the urine of a healthy individual?",
            options: [
              "Albumin",
              "Sodium",
              "Urea",
              "Potassium"
            ],
            correctAnswer: "Albumin",
            explanation: "Albumin is a protein produced by the liver. It is very important in maintaining the plasma osmolarity of the blood. The glomerulus, which is the network of blood vessels enveloped by the part of the nephron known as Bowmans capsule, has small holes in its endothelial lining called fenestrations. When proteins travel through the glomerulus, they are prevented from entering the nephron due to the size of the fenestrations and the negative electrical charge of glycosylated proteins lining the fenestrations. Therefore, albumin is not normally found in urine because it is prevented from entering the nephron, and so choice A is the right answer. The presence of protein in a urine sample is typically a sign of renal disease. Each of the other choices are normally found in appreciable quantity in the urine. Urea, choice C, is the primary excretory byproduct of the urea cycle. Sodium and potassium homeostasis are kept in balance by the regulation of their excretion in urine.",
            topic: "biology"
          },
          {
            id: "passage-Just-as-the-ingestion-q4",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "Which of the following would you most likely expect to find in a patient with diabetes insipidus?",
            options: [
              "Decreased plasma osmolarity",
              "Increased urine osmolarity",
              "Increased urine glucose",
              "Increased urine output"
            ],
            correctAnswer: "Increased urine output",
            explanation: "As explained in the passage, diabetes insipidus is a condition in which ADH is ineffective, and as a result, the kidneys reabsorb less water and are unable to concentrate urine. What is the result of this? Very dilute urine. So, urine output is increased in a patient with diabetes insipidus, which means that choice D is correct. Since water reabsorption is decreased, this means that plasma osmolarity will be increased, and so choice A is wrong. Choice C is wrong because the presence of glucose in the urine is one of the symptoms and tell-tale signs of diabetes mellitus. Diabetes mellitus is the result of an insulin deficiency; without insulin, glucose is not converted into glycogen, and as a result, some of it gets excreted in the urine because the kidneys are overwhelmed by the excess glucose in the bloodstream. Choice B is wrong because an increased urine osmolarity would mean that there was a greater concentration of dissolved solutes per liter of urine, which is not the case if there is an excess of water being excreted. It should be noted that a diabetes insipidus patient with an intact thirst mechanism and access to water will NOT become dehydrated. They will drink enough water to replace what is lost in the urine.",
            topic: "biology"
          },
          {
            id: "passage-Just-as-the-ingestion-q5",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "Based on the data in Table 1, which of the four patients most likely has central diabetes insipidus?",
            options: [
              "Patient A",
              "Patient B",
              "Patient C",
              "Patient D"
            ],
            correctAnswer: "Patient C",
            explanation: "Youre told that a normal value for urine osmolarity is 285 milli-osmoles per liter of H2O. Since ADH increases water reabsorption in the kidneys, patients with diabetes insipidus are expected to have a decreased urine osmolarity. And if normal is 285 milli- osmoles per liter of water, then based on the information in Table",
            topic: "biology"
          },
          {
            id: "passage-Just-as-the-ingestion-q6",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "Based on the data in Table 1, which of the four patients most likely has nephrogenic diabetes insipidus?",
            options: [
              "Patient A",
              "Patient B",
              "Patient C",
              "Patient D"
            ],
            correctAnswer: "Patient C",
            explanation: "Youre told that a normal value for urine osmolarity is 285 milli-osmoles per liter of H2O. Since ADH increases water reabsorption in the kidneys, patients with diabetes insipidus are expected to have a decreased urine osmolarity. And if normal is 285 milli- osmoles per liter of water, then based on the information in Table1, you should have concluded that Patient A does not have diabetes insipidus. Patients B, C, and D, have a very low urine osmolarity prior to therapy, indicating that there is something wrong. To answer this question, you must have a good understanding of the mechanisms behind both central and nephrogenic diabetes insipidus. According to the passage, central diabetes insipidus is when ADH itself is either deficient in quantity or quality. Therefore, exogenous supplementation of ADH SHOULD alleviate the symptoms; that is, the kidneys should be able to concentrate urine, and therefore, urine osmolarity should greatly increase only AFTER ADH is administered. It should NOT increase after the 24-hour restriction of fluid intake because water is not being reabsorbed.",
            topic: "biology"
          },
          {
            id: "passage-Just-as-the-ingestion-q7",
            type: "passage",
            passageId: "passage-Just-as-the-ingestion",
            question: "What is the most likely cause of Patient Bs dilute urine before therapy?",
            options: [
              "Excessive Water Intake",
              "Dehydration",
              "Nephrogenic DI",
              "Centrail DI"
            ],
            correctAnswer: "Excessive Water Intake",
            explanation: "Fluid restriction is the first step in the attempt to diagnose the pathology, if there is one, behind the inability to concentrate urine. Lets take a look at the results of therapy on Patient B. Patient B had a low urine osmolarity prior to the onset of therapy. However, following the restriction of fluid intake, there was a substantial increase in urine osmolarity, indicating that Patient Bs dilute urine is a function of the amount of fluid ingested. If a lot of fluid is drunk during the day, then assuming the persons kidneys and ADH are both normal, the urine formed will be dilute. Likewise, if there is very little fluid drunk during the day, then the urine formed will be concentrated. Thus, the excessive intake of water seems to be the most likely explanation for the formation of dilute urine in Patient B. In fact, there are individuals who have a psychological condition in which they drink water excessively. This excessive intake causes the output of dilute urine. Simply restricting and observing fluid intake would enable the patient to concentrate urine. Fluid restriction had no effect on either Patient C or Patient D, indicating that they have a true pathology; so choices C and D are wrong. If Patient B was dehydrated, then the bodys response would be to produce concentrated urine from the start, which was clearly not the case here since urine osmolarity was very low prior to therapy; therefore, choice B is also wrong.",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-Hemophilia-is-a-genetically",
        text:"Hemophilia is a genetically inherited disease that causes the synthesis of an abnormal clotting factor. As a result, hemophiliacs bleed excessively from the slightest injury. The figure below is a partial pedigree for the hemophilia trait in Queen Victorias descendants. The pedigree indicates no history of hemophilia for either parent prior to the F generation.",
        image: "images/q41/1.png",
        topic: "biology",
        questions: [
          {
            id: "passage-Hemophilia-is-a-genetically-q1",
            type: "passage",
            passageId: "passage-Hemophilia-is-a-genetically",
            question: "According to Figure 1, which of the following assumptions about the P generation must be true?",
            options: [
              "Albert did not have the gene for hemophilia.",
              "Queen Victoria had two X chromosomes, each with the gene for hemophilia.",
              "Neither Albert nor Queen Victorian had the gene for hemophilia.",
              "Albert was a carrier of the hemophilia gene."
            ],
            correctAnswer: "Albert did not have the gene for hemophilia.",
            explanation: "This question asks you to conclude something about the P , or parental, generation. The easiest way to do this is to go through each statement and analyze it. Choice A states that Albert did not have the gene for hemophilia. If we look at the pedigree, we see that this in fact is true; he doesnt have the gene \" as indicated by his unshaded square. If he did have the gene then he would have been a hemophiliac, since the gene is X-linked. So choice A is the correct answer. But lets just take a look at the other choices to be sure. Choice B states that Queen Victoria had two X chromosomes, each with the hemophilia gene. Now its true that Queen Victoria had two X chromosomes \" all normal females do. However, as indicated by the half shading on her circle in the pedigree, she was a carrier of the gene for hemophilia; that is, she only had one copy of the gene. So choice B is wrong. Choice C states that neither Albert nor Victoria had the gene for hemophilia. Well, Victoria was a carrier, so choice C is wrong too. Choice D states that Albert was a carrier. First of all, men cannot be carriers of an X-linked trait. If they have a copy of the gene in question, then they express the trait. Males cannot have two copies of a X- linked trait because they have only one X chromosome. So, choice D is also wrong.",
            topic: "biology"
          },
          {
            id: "passage-Hemophilia-is-a-genetically-q2",
            type: "passage",
            passageId: "passage-Hemophilia-is-a-genetically",
            question: "Which of the following best explains why Louis IV was NOT a hemophiliac?",
            options: [
              "His son Frederick was a hemophiliac.",
              "He did not inherit the gene for hemophilia from his mother.",
              "His father-in-law, Albert, was not a hemophiliac.",
              "Only females can be carriers of the gene for hemophilia.",
              "male can inherit an X-linked trait only from his mother, since he inherits his one X chromosome from her. Thus, Louis IV, who was normal, did not inherit the gene for hemophilia from his mother, who is not shown on the pedigree. Remember, Louis IV was not a blood relative of the Queen, he was her son-in-law."
            ],
            correctAnswer: "He did not inherit the gene for hemophilia from his mother.",
            explanation: "Choice A is incorrect, since Louis IVs son, Frederick, has hemophilia because he inherited the gene from his mother, who was a carrier (although we dont know her name). Besides, whether Louis IVs children were hemophiliacs, carriers, or normal, is irrelevant to the discussion of why Louis himself was normal. Choice C is incorrect because Albert was not a blood relative of Louis IV, so Alberts genotype is independent of Louis genotype. As for choice D, while it is true that only females can be carriers of the hemophilia gene, or of any X-linked gene for that matter, this does not answer the question.",
            topic: "biology"
          },
          {
            id: "passage-Hemophilia-is-a-genetically-q3",
            type: "passage",
            passageId: "passage-Hemophilia-is-a-genetically",
            question: "If Beatrice had married a hemophiliac and had a son, what is the probability that the son would have been a hemophiliac?",
            options: [
              "0%",
              "25%",
              "50%",
              "100%"
            ],
            correctAnswer: "50%",
            explanation: "If you look at the pedigree, youll see that Beatrice, a member of the F generation, was a carrier of the gene for hemophilia, which means that she had one copy of it on one of her X chromosomes. In reality, Beatrice married a normal male, whose name youre not given; but for the purpose of this question, youre asked to determine the probability that any of her sons would have been hemophiliacs if she had in fact married a hemophiliac. So this is basically a cross between a carrier and a hemophiliac. Therefore, Beatrices genotype is X X, and her theoretical husbands genotype is X Y. So, in a cross between these two people, 50% of h h all their children are expected to be hemophiliacs. But you need to look at the disease in terms of gender; 50% of the daughters are expected to be hemophiliacs; the other 50% will be normal. Likewise, 50% of the sons are expected to be hemophiliacs; the other 50% to be normal.",
            topic: "biology"
          },
          {
            id: "passage-Hemophilia-is-a-genetically-q4",
            type: "passage",
            passageId: "passage-Hemophilia-is-a-genetically",
            question: "Theoretically, what percentage of Victoria Eugenias sons should have been hemophiliacs?",
            options: [
              "25%",
              "33%",
              "50%",
              "75%"
            ],
            correctAnswer: "50%",
            explanation: "If you look at the pedigree, youll see that Victoria Eugenia had four sons, three of which were hemophiliacs. So, 75% of her sons turned out to be hemophiliacs. You know that these sons inherited the disease from their mother, as opposed to their father, Alfonso III of Spain, because their mother was a carrier of the disease, as can be seen on the pedigree, and their father was normal. Okay, so 75% was the actual percent, but the question asks you to determine the theoretical probability that Victoria Eugenias sons would be hemophiliacs. So, what you have to do is just work out the cross between a carrier female and a normal male and look at the results. And, if you do that, youll find that theoretically, 50% of Victoria Eugenias daughters should have been carriers, 50% should have been normal; and 50% of her sons should have been hemophiliacs, 50% should have been normal. So the probability that Victoria Eugenias sons would have been hemophiliacs is 50%.",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-Aerobic-respiration-is-the",
        text: "Aerobic respiration is the major process used by oxygen-requiring organisms to generate energy. During respiration, glucose is metabolized to generate chemical energy in the form of ATP: The biochemical machinery necessary for cellular respiration is found in the mitochondria, small organelles scattered throughout the cytoplasm of most eukaryotic cells. The number of mitochondria per cell varies by tissue type and cell function. Mitochondria are unusual in that they have their own genetic systems, entirely separate from the cell’s nuclear DNA. However, mitochondrial replication is still dependent on nuclear DNA to encode essential proteins. Despite this, mitochondria seem to replicate randomly, out of phase with both the cell cycle and with other mitochondria. The nature of the mitochondrial genome and its protein-synthesizing machinery has led many researchers to propose the endosymbiotic hypothesis: •\tA primitive cell once ingested a bacterium. •\tThe two entered a symbiotic relationship. •\tThe cell provided protection, while the bacterium provided energy. •\tOver time, the bacterium evolved into today’s mitochondrion, retaining some of its own DNA. Additionally, mitochondrial DNA is inherited maternally (non-Mendelian inheritance), as the egg supplies the cytoplasm (and thus the mitochondria) to the zygote. This inheritance pattern is used to study evolutionary relationships.",
        image: "images/q42/1.png",
        topic: "biology",
        questions: [
          {
            id: "passage-Aerobic-respiration-is-the-q1",
            type: "passage",
            passageId: "passage-Aerobic-respiration-is-the",
            question: "In which of the following phases of the cell cycle could mitochondrial DNA replicate? I. G₁ (Gap 1) II. S (Synthesis) III. G₂ (Gap 2) IV. M (Mitosis)",
            options: [
              "IV only",
              "I and III only",
              "II and IV only",
              "I, II, III, and IV"
            ],
            correctAnswer: "I, II, III, and IV",
            explanation: 
              "The passage states that mitochondria replicate randomly, out of phase with both the cell cycle and other mitochondria. This implies that mitochondrial DNA can replicate during any phase of the cell cycle: G₁ phase: Cell grows and performs biochemical activities. S phase: Nuclear DNA replicates; mitochondria may also replicate. G₂ phase: Cell prepares for mitosis; organelles like mitochondria duplicate. M phase: Mitosis occurs; organelles (including mitochondria) are segregated. So mitochondrial DNA is not restricted to any specific phase—replication can happen during all phases of the cell cycle. Therefore, the correct answer is D.",
            topic: "biology"
          },
          {
            id: "passage-Aerobic-respiration-is-the-q2",
            type: "passage",
            passageId: "passage-Aerobic-respiration-is-the",
            question: "Scientists have demonstrated that human mitochondrial DNA mutates at a fairly slow rate. Because mitochondria play such an important role in the cell, these mutations are most likely to be:",
            options: [
              "point mutations.",
              "frameshift mutations.",
              "lethal mutations.",
              "nondisjunctions."
            ],
            correctAnswer: "point mutations.",
            explanation: "This question tests your knowledge of the things that can go wrong during the replication of mitochondrial DNA, or any DNA for that matter, and the consequences. In addition, youve got to apply this knowledge to the role that mitochondria play in the cell. Mitochondria are responsible for cellular energy production \" they supply the cell with ATP. Mitochondrial DNA directs the synthesis of mitochondrial proteins, which ultimately play a major role in cell survival. Since mitochondria are so essential to eukaryotic cell life, one would therefore expect replication of its DNA to be highly accurate. Mutations that would cause a dramatic change in its DNA and its ability to produce proteins needed for ATP formation would be lethal to the cell. Since mutations do occur, the most likely type to occur would be one that causes the least damage. A point mutation fits the bill. Point mutations are defined as those in which only nitrogenous base is affected; for example, a cytosine is substituted for an adenine during replication. Point mutations are not usually lethal because of the redundancy of the genetic code; that is, each amino acid is typically coded for by more than one codon. Take the amino acid proline, for example. Proline is coded for by four codons: CCU, CCC, CCA, and CCG. Lets say that the codon is CCU; if theres a point mutation at the third base, no matter which of the remaining three bases is substituted for the uracil, the net product will still be proline. So a point mutation is the type of mutation least likely to affect their productivity. Thus, choice A is correct. Choice B, frameshift mutation, is a mutation causing genetic material to be inserted or deleted during DNA replication or transcription. This produces a shift in the reading frame of the mRNA strand being translated, usually leading to the formation of nonsense polypetides. Changes in protein synthesis would most likely be dangerous for the mitochondria and the cell itself; therefore, choice B is incorrect. Lethal mutations, choice C, are those that would cause the mitochondria to become nonfunctional, so choice C is incorrect. Choice D is incorrect because nondisjunction is the failure of homologous chromosomes to separate during meiosis. First of all, mitochondria have one circular chromosome \" there arent any homologous chromosomes. Second, mitochrondria do not undergo meiosis \" only specialized eukaryotic cells in sexually reproducing organisms undergo meiosis. So, choice D cannot even be a consideration.",
            topic: "biology"
          },
          {
            id: "passage-Aerobic-respiration-is-the-q3",
            type: "passage",
            passageId: "passage-Aerobic-respiration-is-the",
            question: "Which of the following mitochondrial genome characteristics differs most from the characteristics of the nuclear genome?",
            options: [
              "Mitochondrial DNA is a double-helix.",
              "Some mitochondrial genes code for tRNA.",
              "Specific mutations to mitochondrial DNA can be lethal to the organism.",
              "Almost every base in mitochondrial DNA codes for a product."
            ],
            correctAnswer: "Almost every base in mitochondrial DNA codes for a product.",
            explanation: "To answer this question, you are supposed to pick the characteristic of the mitochondrial genome that differs most from characteristics of the nuclear genome. Now since you probably dont know a lot of information about the mitochondrial genome, and there is little information about it in the passage, lets approach this problem from a slightly different perspective. You do know a lot about the characteristics of the nuclear genome from your introductory biology class. So lets look over the answer choices and find the one that is not a characteristic of the nuclear genome; and this will be our right answer. The nuclear genome is comprised of double-helical DNA that codes for mRNA, tRNA, and rRNA. Therefore, choices A and B are characteristics of the nuclear genome and are therefore incorrect. If a mutation occurred in the nuclear genome that rendered an essential gene non-functional, such as an enzyme involved in glycolysis, the organism would die. Thus, choice C is also a characteristic of the nuclear genome and an incorrect choice. Although the nuclear genome encodes many products, most of the bases of DNA are NON-CODING. That is, they are involved in the regulation of gene expression and do not themselves code for any product. Therefore, choice D is not consistent with the nuclear genome, so choice D is the correct answer. The mitochondrial genome is so small, compared to that of the nucleus, that almost every nitrogen base has to code for a product, the mitochondrial genome doesnt have any DNA to waste!",
            topic: "biology"
          },
          {
            id: "passage-Aerobic-respiration-is-the-q4",
            type: "passage",
            passageId: "passage-Aerobic-respiration-is-the",
            question: "What is the net number of ATP molecules synthesized by an obligate anaerobe per molecule of glucose?",
            options: [
              "2 ATP",
              "6 ATP",
              "8 ATP",
              "36 ATP"
            ],
            correctAnswer: "2 ATP",
            explanation: "Again, this is one of those straight knowledge questions that doesnt really have anything to do with the passage per se. Yes, its a related topic, but you wont find out the answer by reading the passage. To answer this question, you must know how many ATP are formed from the catabolism of one molecule of glucose by an obligate anaerobe. An obligate anaerobe is an organism that must live WITHOUT oxygen in order to survive. Obligate anaerobes produce ATP via fermentation, which includes both glycolysis and the reactions necessary to regenerate the NAD+ necessary for glycolysis to continue. Fermentation leads to a net production of 2 ATP; this ATP is generated during glycolysis. Therefore, an obligate anaerobe will produce 2 ATP per molecule of glucose. Aerobic organisms produce a net of 36 ATP, choice D, per molecule of glucose, as shown in the equation provided in the passage. So, choice D is wrong",
            topic: "biology"
          },
          {
            id: "passage-Aerobic-respiration-is-the-q5",
            type: "passage",
            passageId: "passage-Aerobic-respiration-is-the",
            question: "A mating type of a wild-type strain of the algae C. reinhardii is crossed with the opposite mating type of a mutant strain of the algae, which has lost all mitochondrial functions due to deletions in their mitochondrial genome. All of the offspring from this cross also lack mitochondrial functions. Based on information in the passage, this can best be explained by the:",
            options: [
              "endosymbiotic hypothesis.",
              "non-Mendelian inheritance of mitochondrial DNA.",
              "recombination of mitochondrial DNA during organelle replication.",
              "presence of genetic material in the mitochondria that is distinct from nuclear DNA."
            ],
            correctAnswer: "non-Mendelian inheritance of mitochondrial DNA.",
            explanation: "In this question you are presented with a cross between two strains of the algae C. reinhardii. You do not need to know anything about this species of algae to answer the question. From the question stem you know that the mating type of a wild-type strain, which has normal mitochondrial DNA, is crossed with the opposite mating type of a strain that lacks functional mitochondria due to deletions in the mitochondrial genome. This whole thing about mating types is another way of saying male and female in species that do not technically have opposite genders, such as algae and yeast. In addition, youre told that the offspring of this cross do not have functional mito- chondria either. What does this mean? Somehow the offspring have the same deleted mitochondrial genome as the mutant strain. Now all you have to do is find the choice that best accounts for this occurrence. Choice A is incorrect because the endosymbiotic theory attempts to explain the derivation of mitochondria in eukaryotic cells, not the inheritance of mitochondria. Choice B is correct. Since youre told that the offspring lack mitochondrial functions, this implies that they inherited their mitochondria from the mutant strain mating type. In other words, the mutant strain was the organelle-donating parent \" the female \" in this cross. Therefore, the non-Mendelian inheritance pattern of mitochondria, as explained in the passage, best accounts for these experimental observations. If the mating type of the wild-type strain had been the organelle-donating parent, then all of the offspring would have normal mitochondrial function. Choice C is wrong because the word recombination implies the formation of new gene combinations due to crossing over events that occur during reproduction. If recombinations did occur, you would expect some of the offspring to regain mitochondrial functions since wild-type mitochondrial DNA would replace the deleted segments of DNA in some offspring. Although choice D is a true statement, it does not explain the inheritance patterns observed in this cross, thus choice D is incorrect.",
            topic: "biology"
          },
          {
            id: "passage-Aerobic-respiration-is-the-q6",
            type: "passage",
            passageId: "passage-Aerobic-respiration-is-the",
            question: "Four different human cell cultures \" erythrocytes, epidermal cells, skeletal muscle cells, and intestinal cells \" were grown in a medium containing radioactive adenine. After 10 days, the mitochondria were isolated via centrifugation, and their level of radioactivity was measured using a liquid scintillation counter. Which of the following cells would be expected to have the greatest number of counts per minute of radioactive decay?",
            options: [
              "Erythrocytes",
              "Epidermal cells",
              "Skeletal muscle cells",
              "Intestinal cells"
            ],
            correctAnswer: "Skeletal muscle cells",
            explanation: "According to the question stem, four different human cell cultures were grown in a medium containing radioactive adenine. So, the first thing that you should be thinking about is DNA replication; while these cells are replicating theyre going to incorporate this radioactive adenine into all of their DNA. This includes chromosomal DNA, as well as mitochondrial DNA. Mitochondria replicate independently of their cells. Since all autosomal human cells have the same amount of DNA in their nuclei, the only difference in radioactivity will be the amount that was incorporated into the mitochondrial DNA. And this is why the cells mitochondria were isolated via centrifugation, and then the radiation from each sample was measure using a scintillation counter. The cells with the greatest number of mitochondria will have the highest radioactive count when their mitochondria are separated. So, you need to determine which of the four cell types would have the greatest number of mitochondria. This number is dependent on the energy needs of the tissue. Given the choices \" erythrocytes, epidermal cells, skeletal muscle cells, and intestinal cells \" you should know that the correct answer is choice C, skeletal muscle cells. Muscle cells need a lot of energy in order to contract. ATP is required every time a molecule of myosin binds to actin in the sarcomeres. In general, muscle cells have a higher content of mitochondria than do any other type of autosomal cell. Choice A, erythrocytes, do not even contain any mitochondria. Choice B, epidermal cells, do not have any special energy requirements. The same thing applies to intestinal cells, choice D.",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-Four-major-blood-types",
        text:"Four major blood types exist in the human ABO blood system: types A, B, AB, and O; and there are three alleles that code for them. The A and B alleles are codominant, and the O allele is recessive. Blood types are derived from the presence of specific polysaccharide antigens that lie on the outer surface of the red blood cell membrane. The A allele codes for the production of the A antigen; the B allele codes for the production of the B antigen; the O allele does not code for any antigen. While there are many other antigens found on red blood cell membranes, the second most important antigen is the Rh antigen. Rh is an autosomally dominant trait coded for by 2 alleles. If this antigen is present, an individual is Rh⁺; if it is absent, an individual is Rh⁻. For example, a person with type AB blood with the Rh⁺ antigen is said to be AB⁺. These antigens become most important when an individual comes into contact with foreign blood. Because of the presence of naturally occurring substances that closely mimic the A and B antigens, individuals who do not have these antigens on their red blood cells will form antibodies against them. This is inconsequential until situations such as blood transfusion, organ transplant, or pregnancy occur. Erythroblastosis fetalis is a condition in which the red blood cells of an Rh⁺ fetus are attacked by antibodies produced by its Rh⁻ mother. Unlike ABO incompatibility, in which there are naturally occurring antibodies to foreign antigens, the Rh system requires prior sensitization to the Rh antigen before antibodies are produced. This sensitization usually occurs during the delivery of an Rh⁺ baby. So while the first baby will not be harmed, any further Rh⁺ fetuses are at risk. The Coombs tests provide a method for determining whether a mother has mounted an immune response against her baby’s blood. The tests are based on whether or not agglutination occurs when Coombs reagent is added to a sample. Coombs reagent contains antibodies against the anti-Rh antibodies produced by the mother. The indirect Coombs test takes the mother’s serum, which contains her antibodies but no red blood cells, and mixes it with Rh⁺ red blood cells. Coombs reagent is then added. If agglutination occurs, the test is positive, and the mother must be producing anti-Rh antibodies. The direct Coombs test mixes the baby’s red blood cells with Coombs reagent. If agglutination occurs, the test is positive, and the baby’s red blood cells must have been attacked by its mother’s anti-Rh antibodies.",
        image: "images/q44/1.png",
        topic: "organicChemistry",
        questions: [
          {
            id: "passage-Four-major-blood-types-q1",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "In a paternity case, the mother has type A⁺ blood and her son has type O⁻ blood. If the husband has type B⁺ blood, which of the following is true?",
            options: [
              "The husband could be the father.",
              "The husband could not be the father.",
              "The husband could not be the father of a son, but could be the father of a daughter.",
              "The husband is definitely the father."
            ],
            correctAnswer: "The husband could be the father.",
            explanation: "Explanation: Lets determine as much as we can about the blood types of the parents and the son. We know that the mother is blood type A positive, and therefore one of her alleles codes for the A antigen. We dont know whether the other allele for that locus is an O or A. The mother is also Rh positive, and again, similar reasoning applies here. We know that she has at least one Rh allele that codes for the Rh antigen, which makes her Rh positive, since the Rh allele is dominant. We dont know about the second allele at that locus; it might be either Rh positive of Rh negative. Lets take a look at the son. The son is O negative, so here we know his genotype precisely. His genotype for the ABO blood groups is OO. Likewise, with respect to the Rh locus, hes doubly negative. If he had just one Rh allele he would be Rh positive, since the allele is dominant. So the sons genotype must be OO Rh negative Rh negative. Working backwards, we can deduce that his mothers genotype must be AO Rh positive Rh negative, since the son inherited one allele per locus from his mother. Lets take a look at the husband. The husband is type B positive, so we know that he has to have at least one B allele and one Rh allele. In the paternity case the question to be addressed is, is it possible for the husband to be the father of this boy, knowing what we know about the mother? The answer is yes, its possible. We know that the mothers genotype is AO Rh positive, Rh negative; now suppose that the husbands blood type is BO Rh positive Rh negative. If this were the case, then the son could have inherited one O allele from each parent and one Rh negative allele from each parent. Therefore, it is possible for these two people to conceive an O negative child. thus, the correct answer is choice A; the husband could have been the father. We cant answer D, that the husband was definitely the father, because we just dont know; maybe the mother had an affair with another man whose blood type contained both the O allele and the Rh negative allele. From our discussion, choices B and C are obviously incorrect. And besides, the gender of the child has no influence whatsoever on blood type.",
            topic: "organicChemistry"
          },
          {
            id: "passage-Four-major-blood-types-q2",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "A couple decide to have a child. If the fathers genotype is AO and the mother has type B blood of unknown genotype, which of the following are possible blood types for their child? I.\tA - II.\tB - III.\tA, B - IV.\tO -",
            options: [
              "I and II only",
              "I, II, and III only",
              "I, II, and IV only",
              "I, II, III, and IV",
              "and B alleles are codominant to each other, and that the O allele is recessive. Codominance means that both the alleles are phenotypically expressed. So, when a person has both the A and the B alleles, a person is said to have type AB blood and expresses the properties ascribed to BOTH alleles \" that is, their red blood cells have both the A and B antigens on their surface. During sexual reproduction, the mother and father each donate one allele to their offspring. In this case we know the fathers genotype is AO. This means that he can donate either an A allele or an O allele to his child. We dont, HOWEVER, know the mothers genotype; we only know that her phenotype is type B blood. Well, this means that her genotype is either BO or BB \" we simply dont know which one it actually is. Lets first assume the mother to have the genotype BB and must therefore donate a B allele to the child. In this situation, if the father donates an A, the childs genotype and phenotype will b ABk. If the father donates an O allele, the childs genotype will be BO and the phenotype will be type B. Therefore, statements II and III are correct. Well, since III is correct, you can rule out choices A and C because they dont contain it. Now lets assume the mothers genotype to be BO. This means that she can donate an O allele to the child. In this case, if the father donates an A allele, the childs genotype will be AO and the phenotype will be A. This means that statement I is also correct; but this doesnt help you decide between choices B and D because they both contain statement I. In fact, you should have known that I was correct because it appears in both of these remaining choices. So what it comes down to is whether or not this child could have type O blood. Well, if the father donates an O allele, the childs genotype will be OO and the phenotype could have type O. This means that statement IV is also correct; all four blood types are possibilities."
            ],
            correctAnswer: "I, II, III, and IV",
            explanation: "This is one of those questions requiring an understanding of simple genetics and the ABO system. If you didnt already know it, youre told in the passage that the",
            topic: "organicChemistry"
          },
          {
            id: "passage-Four-major-blood-types-q3",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "A new virus has been discovered that evades detection by the immune system of only those individuals with type A or type AB blood. Which of the following best accounts for this observation?",
            options: [
              "The viral antigens resemble the A antigen.",
              "The viral antigens resemble the B antigen.",
              "The viral antigens are",
              "The viral antigens are too small to elicit an immune response."
            ],
            correctAnswer: "The viral antigens resemble the A antigen.",
            explanation: "From this question stem you know that this virus avoids detection by the immune system of only those individuals who have type A or AB blood. From this fact you can conclude that the virus must NOT evade the immune system of people with B or O blood types. So the correct answer will differentiate between these two groups. Well, from this piece of information you can eliminate choice D. If the viral antigens are too small to elicit an immune response, the virus would evade all immune systems, not just those of individuals with A or AB blood types. Choice C can also be eliminated since the presence of the Rh factor is independent of ABO blood type. So now we need to decide between choices A and B. How do type A and type AB blood differ from type B and type O blood. Well, individuals with type A and AB blood express the A antigen on the surface of their red blood cells. These individuals will therefore NOT produce antibodies to the A antigen. On the other hand, individuals with type B and O blood do NOT express the A antigen, thus they will produce antibodies to the A antigen. Well if the virus antigen mimicked the A antigen, then people who normally express the A antigen \" that is, people with type A or type AB blood \" would not recognize the virus as foreign. Thus, no immune response would be elicited, and the virus would be able to persist in these people. Thus, choice A is the correct answer. If the viral antigens mimicked the B antigen, as in choice B, then the virus would evade detection by the immune system in those individuals who normally expressed the B antigen \" type B and type AB people, but would be detected by the immune system of those individuals who do not normally express the B antigen, namely, type A and type O people.",
            topic: "organicChemistry"
          },
          {
            id: "passage-Four-major-blood-types-q4",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "If a man with type AB blood needed a transfusion of red blood cells, which of the following individuals could safely donate blood?",
            options: [
              "A man with type A blood",
              "A man with the genotype BO",
              "A woman with the genotype AB",
              "All four blood types are equally safe"
            ],
            correctAnswer: "All four blood types are equally safe",
            explanation: "The thinking process behind this question is similar to the one used to answer the previous question. A person with type AB blood expresses both the A and B antigens on his red blood cells, which implies that his blood does NOT contain any anti-A or anti-B antibodies. Since the recipients blood does not contain anti-A antibodies or anti-B antibodies; this means that any blood type can b safely transfused, regardless of the A and B antigens found in the donors blood. Be aware that there are other blood antigens typically present that could cause problems during transfusions, but this is beyond the scope of this question. Also recognize that the gender of the person donating the blood is in no way relevant.",
            topic: "organicChemistry"
          },
          {
            id: "passage-Four-major-blood-types-q5",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "How might one most practically assess the risk of erythroblastosis fetalis in a pregnant woman?",
            options: [
              "Test all women for the presence of anti-Rh antibodies.",
              "Test all fetuses for the presence of the Rh antigen within the first trimester of pregnancy.",
              "Test only Rh\" mothers for the presence of anti- Rh antibodies.",
              "Test all mothers of Rh+ children for the presence of anti-Rh antibodies."
            ],
            correctAnswer: "Test only Rh\" mothers for the presence of anti- Rh antibodies.",
            explanation: "In answering this question, you must have an understanding of Rh incompatibility and also keep in mind that youre asked to choose the most PRACTICAL screening program. Rh incompatibility exists when an Rh negative mother, who has been sensitized to the Rh antigen by a previous pregnancy, is pregnant with another Rh positive baby. The risk exists in that the mother, as a result of this previous exposure to the Rh antigen, has produced antibodies that will now attack the fetus red blood cells, which are Rh positive. So, the first step in making the assessment of erythroblastosis fetalis risk is to narrow down the group being assessed. Well, the mother must definitely be Rh negative for there to be ny risk at all, which means that testing all women, as a choice A, is extremely impractical. So choice A is incorrect. Choice B is incorrect because it tests all fetuses for the presence of the Rh antigen. This is useless unless the mother is known to be Rh negative. The most practical test is the one that singles our Rh negative mothers for testing. So, choice B is also incorrect. Choice C, however, is practical. It does single out Rh negative mothers to test them for the presence of anti-Rh antibodies. Choice D is not practical because all mothers of Rh positive children, regardless of their own blood type, are tested. Both Rh positive and Rh negative mothers would be tested, which is unnecessary and expensive. So, choice C is the correct answer; test Rh negative mothers to determine whether or not they are producing anti-Rh antibodies. If the test is positive, then there is a risk of erythroblastosis fetalis for an Rh positive fetus.",
            topic: "organicChemistry"
          },
          {
            id: "passage-Four-major-blood-types-q6",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "Based on information in the passage, what does the reaction below represent?",
            options: [
              "Negative direct Coombs test",
              "Positive direct Coombs test",
              "Positive indirect Coombs test",
              "Negative indirect Coombs test"
            ],
            correctAnswer: "Positive direct Coombs test",
            explanation: "As described in the passage, the Coombs tests are the screening procedures used to assess whether an Rh incompatibility reaction can or has occurred. The direct Coombs test will identify whether the babys red blood cells have in fact been attacked by the mothers anti- Rh antibodies. The indirect Coombs test tests for the presence of anti-Rh antibodies in the mothers serum. The figure in the question shows red blood cells with anti-Rh antibodies already attached to them, being mixed with Coombs reagent. This is the test described in the fourth paragraph of the passage as being the direct Coombs tests. Therefore, choices C and D can be eliminated. The outcome shows that Coombs reagent reacted with the red blood cells; the results of this test are therefore positive; so choice A is wrong and choice B is right. In order for either a direct or indirect Coombs test to be negative, the anti-Rh antibody cannot be present. For this to have been a positive indirect Coombs test, there would have been an additional, previous step showing the mixing of the mothers serum with washed red blood cells.",
            topic: "organicChemistry"
          },
          {
            id: "passage-Four-major-blood-types-q7",
            type: "passage",
            passageId: "passage-Four-major-blood-types",
            question: "A woman who has never been pregnant has type B blood. Which of the following antibodies would you expect to find in her serum? -",
            options: [
              "Anti-B antibody",
              "Anti-A antibody",
              "Anti-Rh antibody",
              "Both anti-A and anti-Rh antibodies"
            ],
            correctAnswer: "Anti-A antibody",
            explanation: "To answer this question, you need to have an understanding of the ABO blood groups and what antigens its alleles code for. In addition, you need to have recalled from the passage that Rhimmunity requires prior sensitization, while ABO immunity does not, because of other naturally occurring antigens. Since the woman in the question has never been pregnant, it is highly unlikely that she has ever been exposed to the Rh antigen, which means that she would not pro- duce antibodies against it. So, choices C and D are wrong. Since her blood type is B, she would have anti-B antibodies, but would b expected to have anti-A antibodies because of a naturally occurring antigen that resembles the A antigen.",
            topic: "organicChemistry"
          }
        ]
    },
    {
        id: "passage-Alleles-are-created-when",
        text: "Alleles are created when a single gene undergoes several distinct mutations. These alleles may have different dominance relationships with one another; for example, there are three alleles coding for the human blood groups, the Iᴬ, Iᴮ, and i alleles. Both the Iᴬ and Iᴮ alleles are dominant to the i allele, but Iᴬ and Iᴮ are codominant to each other. A multiple-allele system has recently been discovered in the determination of hair coloring in a species of wild rat. The rats are found to have one of three colors: brown, red, or white. Let B = the gene for brown hair; b = the gene for red hair; and w = the gene for white hair. The results from nine experimental crosses are shown below. The males and females in Crosses 1, 2, and 3 are all homozygous for hair color.",
        topic: "biology",
        image: "images/q49/1.png",
        questions: [
          {
            id: "passage-Alleles-are-created-when-q1",
            type: "passage",
            passageId: "passage-Alleles-are-created-when",
            question: "Based on the experimental results, what is the genotype of the male in Cross 6?",
            image: "images/q49/q1.png",
            options: [
              "bw",
              "bb",
              "bw or bb",
              "Bb or bw"
            ],
            correctAnswer: "bw or bb",
            explanation: "Cross 6 is between a red male and a red female, and their offspring are 100% red. What we need to do is look at the offspring and work backwards to determine the genotypes of their parents. As weve just determined, there are two possible genotypes that correspond to a red phenotype \" little b, little b and little b, w, since the b allele is dominant to the w allele. With these two genotypes there are three possible types of crosses (you might want to write these down); little b, little b ֳ— little b, little b; little b, little b ֳ— little b, w; and little b, w ֳ— little b, w. Note that were not taking into account the gender of the parents. By this I mean were not bothering with the fact that the little b, little b ֳ— little b, w cross can occur in two different ways \" the male can be little b, little b and the female can be little b, w, and vice versa. All of the offspring of Cross 6 are red, therefore, we can eliminate the possibility of a little b, w ֳ— little b, w cross since 25% of their offspring would be white. So now were left with the other two crosses, both of which produce 10% red offspring. If the male is little b, little b, then the female can be either little b, little b or little b, w; and if the male is little b, w then the female must be little b, little b. Hence the male can either be little b, little b or little b, w and the correct answer is choice C.",
            topic: "biology"
          },
          {
            id: "passage-Alleles-are-created-when-q2",
            type: "passage",
            passageId: "passage-Alleles-are-created-when",
            question: "If a large number of brown offspring from Cross 8 are mated with each other, what is the expected percentage of white offspring?",
            options: [
              "6.25%",
              "8.33%",
              "12.5%",
              "25%"
            ],
            correctAnswer: "6.25%",
            explanation: "Cross 8 is between a brown male and a red female. The fact that 25% of their offspring are white indicates that both parents are heterozygotes, since white fur is a recessive trait. This means that the genotype of the brown male must be big B, w, and the genotype of the red female must be little b, w. Now we need to figure out the genotypes of the brown offspring. A cross between this brown male and red female results in 25% ww offspring, which are white; 25% little b, w, which are red; 25% big B, w, which are brown; and 25% big B, little b, which are brown. So there are two different brown genotypes in the offspring \" big B, little b and big B, w. If a large number of these brown offspring are mated with each other there are four different crosses possible, and you might want to write them down to avoid confusion; (1) big B, little b ֳ— big B, little b; (2) big B, w ֳ— big B, w; (3) big B, little b ֳ— big B, w; and dont forget (4) big B, w ֳ— big B, little b \" because this is the second way that the third cross can occur. Now we need to figure out what percentage of the offspring produced in these crosses will have white fur. Well, if we work out the Punnett squares, we find that neither the first, the third, nor the fourth crosses yield any white rats. On the other hand, the second cross, big B, w ֳ— big B, w, yields 25% white offspring. But youre not through yet; 25% is not your answer. You have to take into account that only one fourth of the total number of possible crosses between two brown rats yields 25% white offspring. Well, one fourth of 25% is 6.25%, which is the correct answer, choice A.",
            topic: "biology"
          },
          {
            id: "passage-Alleles-are-created-when-q3",
            type: "passage",
            passageId: "passage-Alleles-are-created-when",
            question: "Based on the experimental results, what is the genotype of the female in Cross 5?",
            options: [
              "Bb",
              "BB or Bb",
              "BB or Bw",
              "BB, Bb, or Bw"
            ],
            correctAnswer: "BB, Bb, or Bw",
            explanation: "In Cross 5, a brown male is mated with a brown female, and were told that 100% of their offspring are brown. Since we know that the big B allele is dominant to the little b and w alleles, there are three types of genotypically distinct crosses between two brown parents that result in all brown progeny; again, you might want to write these down to avoid confusion: (1) big B, big B ֳ— big B, big B; (2) big B, big B ֳ— big B, w; and (3) big B, big B ֳ— big B, little b. From this we see that at least one of the parents must be big B, big B. If the female is big B, big B, then the male can be big B, big B; big B, little b; or big B, w. Likewise, if the male is b B, big B, then the female can be big B, big B; big B, little b; or big B, w.",
            topic: "biology"
          },
          {
            id: "passage-Alleles-are-created-when-q4",
            type: "passage",
            passageId: "passage-Alleles-are-created-when",
            question: "A white male is crossed with the heterozygous red female from Cross 9. What is the expected ratio of red to white offspring?",
            options: [
              "3:1",
              "1:3",
              "1:1",
              "2:1"
            ],
            correctAnswer: "1:1",
            explanation: "This question is really quite simple because were told that the red female has the heterozygous genotype, which we know is little b, w. We dont have to look at the progeny of Cross 9 and try to work backwards from there. Since white fur is recessive, the white male in the cross must have the genotype ww. So the cross is little b, w ֳ— w, w. 50% of the offspring have the genotype b, w, which phenotypically, is read fur; the other 50% of the offspring have the genotype w, w, which corresponds to white fur. Thus, the ratio of red offspring to white offspring is 50% to 50%, which is the same as 1:1, choice C.",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-Hypoxia-refers-to-a",
        text: "Hypoxia refers to a physiological condition in which the body lacks sufficient oxygen for normal cellular functioning. Prolonged hypoxia generally leads to an inhibition of mental capacity and a reduction in the work capacity of muscle. Severe cases of hypoxia can lead to coma or even death. Depending on the cause, hypoxia can be classified into four general types: Hypoxic hypoxia is a type of hypoxia that occurs when the partial pressure of oxygen in the blood is too low. For example, climbers at high altitude, where the air contains less oxygen, might experience hypoxic hypoxia because the partial pressure of oxygen in the air inhaled is very low, leading to insufficient partial pressure of oxygen in the blood. Anemic hypoxia describes a diminished ability of the blood to transport oxygen. Several factors can influence the oxygen-carrying capacity of the blood. Primary causes of anemic hypoxia include a lower than normal number of functional erythrocytes or an insufficient quantity of hemoglobin, the oxygen-carrying molecules of the blood. Abnormal hemoglobin can also decrease the bloods capacity to carry oxygen and lead to anemic hypoxia. Ischemic hypoxia is caused by a decreased delivery of blood to the tissues. Localized circulatory deficiencies, such as blood clots, and global circulatory deficiencies, such as heart failure, decrease the delivery of blood to the tissues, and can therefore cause ischemic hypoxia. Histotoxic hypoxia results from the inability of cells to utilize the oxygen available in the blood. Causes of histotoxic hypoxia include the poisoning of cellular enzymes involved in aerobic respiration, as well as the decreased metabolic capacity of the oxidative enzymes due to vitamin deficiency. Cyanide poisoning causes histotoxic hypoxia by blocking the action of cytochrome oxidase in the electron transport chain so that tissues cannot use oxygen even though it is available.",
        topic: "biology",
        questions: [
          {
            id: "passage-Hypoxia-refers-to-a-q1",
            type: "passage",
            passageId: "passage-Hypoxia-refers-to-a",
            question: "Cigarette smoking causes emphysema, a condition in which the net surface area of the lungs is greatly decreased leading to a decrease in the diffusing capacity of the lungs. Emphysema leads to which type of hypoxia?",
            options: [
              "Hypoxic hypoxia",
              "Anemic hypoxia",
              "Ischemic hypoxia",
              "Histotoxic hypoxia"
            ],
            correctAnswer: "Hypoxic hypoxia",
            explanation: "The passage states that hypoxic hypoxia is caused by any factor that leads to a decreased plasma pO . Since emphysema decreases the diffusing capacity of the lungs, less oxygen will diffuse into the blood, leading to a lower pO . Choice B is incorrect because anemic hypoxia is caused by a decreased oxygen carrying capacity of the blood. Emphysema affects the amount of oxygen in the blood, not the ability of the blood to carry oxygen. Choice C is incorrect because ischemic hypoxia is caused by a decreased delivery of blood to the tissues. Emphysema has no effect on blood circulation. Choice D is incorrect because histotoxic hypoxia is caused by the inability of the tissues to utilize oxygen. Emphysema does not affect the ability of the tissues to use oxygen.",
            topic: "biology"
          },
          {
            id: "passage-Hypoxia-refers-to-a-q2",
            type: "passage",
            passageId: "passage-Hypoxia-refers-to-a",
            question: "Exposure to high levels of radiation has been demonstrated to cause anemia. The most likely explanation is that radiation damages the:",
            options: [
              "blood vessels.",
              "spleen.",
              "thymus.",
              "bone marrow."
            ],
            correctAnswer: "bone marrow.",
            explanation: "All blood cells (RBCs and WBCs) are produced by division of stem cells in the bone marrow. Damage to the bone marrow would therefore affect the formation of blood cells which would be likely to result in decreased production of erythrocytes (RBCs). Since the passage states that anemia is defined as a decrease in the number of functional erythrocytes, damage to the bone marrow by exposure to radiation could be a cause of anemia. Choice A is incorrect because damage to the blood vessels could affect blood circulation but would not affect the number of erythrocytes in the blood. Choices B and C are incorrect because the spleen and thymus are involved in the development and maturation of lymphocytes, a type of white blood cells, and not of red blood cells. Damage to the spleen or thymus, which would affect the number of lymphocytes, would not necessarily affect the number of red blood cells.",
            topic: "biology"
          },
          {
            id: "passage-Hypoxia-refers-to-a-q3",
            type: "passage",
            passageId: "passage-Hypoxia-refers-to-a",
            question: "If cyanide is radioactively-labeled and its position traced within the cell, it will most likely be found in:",
            options: [
              "the Golgi apparatus.",
              "membrane bound vesicles.",
              "the nucleus.",
              "the mitochondria."
            ],
            correctAnswer: "the mitochondria.",
            explanation: "The passage states that cyanide blocks the action of cytochrome oxidase in the electron transport chain. The enzymes of the electron transport chain, including cytochrome oxidase, are located on the inner membrane of the mitochondria. If cyanide blocks the action of cytochrome oxidase, it is most likely located in the same place. Choices A, B, and C are incorrect because these cellular locations are not involved in the electron transport chain which is blocked by cyanide action.",
            topic: "biology"
          },
          {
            id: "passage-Hypoxia-refers-to-a-q4",
            type: "passage",
            passageId: "passage-Hypoxia-refers-to-a",
            question: "The passages of the respiratory tract which do not participate in gas exchange are called the physiological dead space. Compared to air in the alveoli, air in the physiological dead space will have:",
            image: "images/q57/q4.png",
            options: [
              "higher pCO and higher pCO",
              "higher pCO and lower pCO",
              "lower pCO and higher pCO",
              "same pCO and same pCO"
            ],
            correctAnswer: "lower pCO and higher pCO",
            explanation: "The question stem states that the physiological dead space is not involved in gas exchange. This means that the composition of air in the dead space is virtually identical to that of atomospheric air. In the alveoli, where gas exchange occurs, oxygen is taken up by the blood and carbon dioxide is released. Thus, the air in the alveoli will have a lower pO and a higher pCO than dead space air. Conversely, dead space air will have a higher pO and a lower pCO than alveolar air. Choices A, B, and D are incorrect because they do not indicate that the alveolar air will have a higher concentration of carbon dioxide and a lower concentration of oxygen.",
            topic: "biology"
          },
          {
            id: "passage-Hypoxia-refers-to-a-q5",
            type: "passage",
            passageId: "passage-Hypoxia-refers-to-a",
            question: "Carbon monoxide binds to hemoglobin as shown in the dissociation curve below. The dissociation curve for oxygen is also shown. These dissociation curves indicate that:",
            options: [
              "carbon monoxide binds to hemoglobin with the same affinity as does oxygen.",
              "carbon monoxide saturates hemoglobin at much lower partial pressures than does oxygen.",
              "oxygen will saturate hemoglobin more rapidly than will an equal partial pressure of carbon monoxide.",
              "carbon monoxide forms covalent bonds to hemoglobin while oxygen is held by non-covalent interactions."
            ],
            correctAnswer: "carbon monoxide saturates hemoglobin at much lower partial pressures than does oxygen.",
            explanation: "Although the shape of the curves is similar, the X-axis indicates that hemoglobin becomes saturated with CO at a much lower partial pressure (0.4 mmHg) than with oxygen (140 mmHg). Choice A is incorrect because the graphs indicate that carbon monoxide binds with a higher affinity. Choice C is incorrect because oxygen will not saturate hemoglobin as much (or as rapidly) as an equal partial pressure of carbon monoxide. Choice D is incorrect because the structure of the binding of oxygen and carbon monoxide to hemoglobin cannot be determined from the graphs.",
            topic: "biology"
          },
          {
            id: "passage-Hypoxia-refers-to-a-q6",
            type: "passage",
            passageId: "passage-Hypoxia-refers-to-a",
            question: "Hypoxia can often be treated by ventilation with pure oxygen. The increased PO in the alveoli will lead to an increased PO in the blood. Treatment with pure oxygen is LEAST effective in treating which of the following types of hypoxia?",
            options: [
              "Hypoxic hypoxia caused by hypoventilation",
              "Anemic hypoxia caused by sickle cell anemia",
              "Ischemic hypoxia caused by poor circulation",
              "Histotoxic hypoxia caused by the disease beri beri"
            ],
            correctAnswer: "Histotoxic hypoxia caused by the disease beri beri",
            explanation: "Oxygen therapy will help any condition which would be alleviated by an increase in the p of oxygen in the blood. The question stem states that beri beri leads to histotoxic hypoxia. The passage tells us that histoxic hypoxia occurs when the tissues cannot utilize oxygen. So, increasing the amount of oxygen transported in the blood through ventilation with pure oxygen will not serve any purpose. Choice A is incorrect because breathing pure oxygen will greatly help an individual suffering from hypoventilation. If pure oxygen is inhaled, much more oxygen will diffuse into the blood and be carried to the tissues. Choice B is incorrect because, although sickle cell anemia reduces the oxygen carrying capacity of the blood (anemic hypoxia), inhaling pure oxygen will allow more oxygen to dissolve in the plasma, somewhat increasing delivery of oxygen to the tissues. Choice C is incorrect because increasing the concentration of oxygen in the blood will increase delivery of oxygen to the tissues and take full advantage of the carrying capacity of the poor circulation.",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-Artificial-kidneys-have-been",
        text: "Artificial kidneys have been used for almost 50 years to treat patients with different forms of renal failure. The artificial kidney (dialysis machine) removes unwanted substances from the blood by diffusion. A patients blood is passed through channels bounded by a porous, semi-permeable membrane that allows the free diffusion in both directions of all plasma constituents except the plasma proteins. Erythrocytes and other cellular components of blood cannot pass through the membrane. The other side of the membrane is exposed to the dialyzing fluid which carries away the unwanted materials. If the concentration of a material in the blood is greater than in the dialyzing fluid, there will be a net flow of the material from the plasma to the dialyzing fluid. If the concentration of a material in the blood is less than in the dialyzing fluid, there will be a net flow of the material from the dialyzing fluid into the blood. The composition of normal plasma, plasma in an individual suffering renal failure, and dialyzing fluid are shown in Table 1. Dialysis replaces some functions of the kidneys and attempts to correct the effects of renal failure. For example, patients with renal failure develop acidosis due to a buildup of metabolically produced acids in the circulation. Without dialysis, the pH of the blood will drop and coma may occur. Dialyzing fluid contains a relatively high concentration of bicarbonate which diffuses into the circulation and neutralizes the acid.",
        image: "images/q66/1.png",
        topic: "biology",
        questions: [
          {
            id: "passage-Artificial-kidneys-have-been-q1",
            type: "passage",
            passageId: "passage-Artificial-kidneys-have-been",
            question: "In order to prevent the net movement of water between the blood and the dialyzing fluid, the dialyzing fluid:",
            options: [
              "is hypoosmotic to blood.",
              "is isoosmotic to blood.",
              "contains a higher concentration of solutes than blood.",
              "contains hydrophilic proteins."
            ],
            correctAnswer: "is isoosmotic to blood.",
            explanation: "If the dialyzing fluid is isoosmotic, it has the same concentration of particles and thus, the same osmotic pressure exists on either side of the membrane. There will be no net flow of water by osmosis between the blood and the dialyzing fluid. Choice A is incorrect because a hypoosmotic dialyzing fluid would lead to flow of water into the circulation from the dialyzing fluid. Choice C is incorrect because a solution with a higher concentration of solutes is hyperosmotic. A hyperosmotic dialyzing fluid would lead to flow of water out of the circulation from the dialyzing fluid. Choice D is incorrect because hydrophilicity has nothing to do with the net flow of water. A hydrophilic protein is water-loving because it contains polar amino acids.",
            topic: "biology"
          },
          {
            id: "passage-Artificial-kidneys-have-been-q2",
            type: "passage",
            passageId: "passage-Artificial-kidneys-have-been",
            question: "Which of the following provides the best explanation for the urea plasma concentration in individuals with renal failure?",
            options: [
              "Urea filtration decreases",
              "Urea absorption decreases",
              "Urea filtration increases",
              "Urea secretion increases"
            ],
            correctAnswer: "Urea filtration decreases",
            explanation: "Reading from Table 1, it is clear that the urea concentration in a patient with renal failure is much higher than that in a normal individual. Filtration of urea decreases, leading to decreased excretion and a higher urea concentration in the plasma. Choice B is incorrect because a decrease of absorption from the nephron tubule would tend to increase excretion and decrease the plasma urea concentration. Choice C is incorrect because increased urea filtration would lead to increased excretion. Choice D is incorrect because increased secretion of urea into the nephron tubule would increase excretion.",
            topic: "biology"
          },
          {
            id: "passage-Artificial-kidneys-have-been-q3",
            type: "passage",
            passageId: "passage-Artificial-kidneys-have-been",
            question: "The semi-permeable membrane of the dialysis machine functions in a manner most analogous to which part of the kidney?",
            options: [
              "Glomerulus",
              "Ureter",
              "Descending loop of Henle endothelium",
              "Vasa recta"
            ],
            correctAnswer: "Glomerulus",
            explanation: "The glomerulus functions like a sieve, allowing the filtration (movement from the circulation into the nephron tubule) of small molecules while blocking the filtration of the plasma proteins. The semi-permeable membrane serves an analogous function in the dialysis machine. Choice B is incorrect because the ureter is merely a tube connecting the kidney to the bladder. Choice C is incorrect because the descending loop of Henle endothelium does not serve a filtration function. The primary action of the descending loop is reabsorption of water. Choice D is incorrect because the vasa recta are the capillaries that supply nutrients to the nephron.",
            topic: "biology"
          },
          {
            id: "passage-Artificial-kidneys-have-been-q4",
            type: "passage",
            passageId: "passage-Artificial-kidneys-have-been",
            question: "A patient with renal failure has nephrons which lack the ability to actively secrete or reabsorb any substances. Which of the following actions will the patients kidney still be able to perform?",
            options: [
              "Removal of salt from the blood",
              "Production of hypertonic urine",
              "Production of hypotonic urine",
              "Conservation of amino acids"
            ],
            correctAnswer: "Removal of salt from the blood",
            explanation: "Salt is removed from the blood by filtration at the glomerulus. Recall that the fluid in Bowmans capsule is isotonic to plasma. Without reabsorption or secretion, isotonic urine can still be produced. Choice B is incorrect because production of hypertonic urine requires the concentration gradient between the medulla and cortex of the kidney. This gradient is generated by active secretion and reabsorption. Choice C is incorrect because production of hypotonic urine requires active reabsorption and secretion. Choice D is incorrect because amino acids are filtered and then actively reabsorbed in the proximal convoluted tubule.",
            topic: "biology"
          },
          {
            id: "passage-Artificial-kidneys-have-been-q5",
            type: "passage",
            passageId: "passage-Artificial-kidneys-have-been",
            question: "All of the following are removed from the plasma by dialysis EXCEPT:",
            options: [
              "Na +",
              "K +",
              "Urea",
              "Glucose"
            ],
            correctAnswer: "Glucose",
            explanation: "By comparing the concentration of a material in the dialyzing fluid with the concentration in plasma, we can determine the net flow by passive diffusion through the semi-permeable membrane. Of all of the choices, only glucose has a higher concentration in the dialyzing fluid than in the plasma (with or without renal failure). Thus, glucose will not be removed from the plasma by dialysis. Choice A is incorrect because the concentration of Na in the dialyzing fluid is 133 mEq/L which is less than the concentration in plasma (142 mEq/L). Sodium will+ be removed. Choice B is incorrect because the concentration of K (1.0 mEq/L) is much lower than the concentration in the plasma.+ Choice C is incorrect because there is no urea in the dialyzing fluid. One of the primary functions of dialysis is the removal of urea from the circulation.",
            topic: "biology"
          },
          {
            id: "passage-Artificial-kidneys-have-been-q6",
            type: "passage",
            passageId: "passage-Artificial-kidneys-have-been",
            question: "Healthy kidneys secrete the hormone renin in response to decreased arterial pressure. Renin secretion leads to aldosterone secretion by the adrenal cortex. The body would most likely respond to ingestion of a large volume of isotonic solution by:",
            options: [
              "decreasing renin secretion and increasing sodium and water reabsorption.",
              "decreasing renin secretion and decreasing sodium and water reabsorption.",
              "increasing renin secretion and increasing sodium and water reabsorption.",
              "increasing renin secretion and decreasing sodium and water reabsorption."
            ],
            correctAnswer: "decreasing renin secretion and decreasing sodium and water reabsorption.",
            explanation: "The question stem states that kidneys secrete renin in response to decreased arterial pressure. Ingesting a large quantity of isotonic solution would tend to increase the arterial pressure. This would lead to a decrease in renin production and a consequent decrease in aldosterone secretion. Decreased aldosterone secretion would decrease sodium reabsorption which is accompanied by reabsorption of water. Decreasing reabsorption of water tends to increase water excretion and reduce blood pressure. This is shown in the flow chart below: Choice A is incorrect because sodium reabsorption would decrease. Choice C is incorrect because renin production would decrease.Choice D is incorrect because renin production would decrease. ",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-The-process-of-depolarization",
        text: "The process of depolarization triggers the cardiac cycle. The electronics of the cycle can be monitored by an electrocardiogram (EKG). The cycle is divided into two major phases, both named for events in the ventricle: the period of ventricular contraction and blood ejection, systole, followed by the period of ventricular relaxation and blood filling, diastole. During the very first part of systole, the ventricles are contracting but all valves in the heart are closed thus no blood can be ejected. Once the rising pressure in the ventricles becomes great enough to open the aortic and pulmonary valves, the ventricular ejection or systole occurs. Blood is forced into the aorta and pulmonary trunk as the contracting ventricular muscle fibers shorten. The volume of blood ejected from a ventricle during systole is termed stroke volume. During the very first part of diastole, the ventricles begin to relax, and the aortic and pulmonary valves close. No blood is entering or leaving the ventricles since once again all the valves are closed. Once ventricular pressure falls below atrial pressure, the atrioventricular (AV) valves open. Atrial contraction occurs towards the end of diastole, after most of the ventricular filling has taken place. The ventricle receives blood throughout most of diastole, not just when the atrium contracts. Figure 1: Electronic and pressure changes in the heart and aorta during the cardiac cycle.",
        topic: "biology",
        image: "images/q148/1.png",
        questions: [
          {
            id: "passage-The-process-of-depolarization-q1",
            type: "passage",
            passageId: "passage-The-process-of-depolarization",
            question: "Position P on the EKG of Fig. 1 probably correspond to:",
            options: [
              "atrial contraction.",
              "ventricular contraction.",
              "the beginning of ventricular systole.",
              "the beginning of ventricular diastole."
            ],
            correctAnswer: "atrial contraction.",
            explanation: "This question requires you to incorporate information from the figure with information given in the passage. Following vertically down from position P in Figure 1, note that it occurs during a period of diastole. In paragraph 3, sentence 4, the passage gives information concerning the actions of the heart during diastole which would lead to answer choice A. Alternatively, the answer can be deduced through information in the passage and figure. In paragraph 1, sentence 2, diastole is described as a period of ventricular relaxation, ruling out answer choice B. Position P in Figure 1 occurs during a period of diastole and it occurs at a point about halfway through that period, ruling out answer choices C and D.",
            topic: "biology"
          },
          {
            id: "passage-The-process-of-depolarization-q2",
            type: "passage",
            passageId: "passage-The-process-of-depolarization",
            question: "The first heart sound represented in Fig. 1 is probably made when:",
            options: [
              "During ventricular systole, blood in the ventricle is forced against the closed atrioventricular valve.",
              "During ventricular diastole, blood in the ventricles is forced through the aortic and pulmonary artery valves.",
              "During ventricular diastole, blood in the ventricle is forced against the closed atrioventricular valve.",
              "During ventricular systole, blood in the arteries is forced through the aortic and pulmonary artery valves."
            ],
            correctAnswer: "During ventricular systole, blood in the ventricle is forced against the closed atrioventricular valve.",
            explanation: "This entire passage relies little on your previous knowledge or understanding of cardiovascular physiology; rather, emphasis is on your ability to read a graph and, at times, correlate the information with the passage. This question indicates that we should be looking at the graph representing \"Heart sounds\" in Figure 1. The graph for heart sounds can be described thus: a horizontal line is followed by a narrow burst of spikes or activity; prior to the spikes is the label \"1st\" implying that the spikes represent the 1st heart sound. The first heart sound begins immediately after the first long vertical line. By following this vertical line downwards, we can note any other events which may initiate or occur at the time as the first heart sound: beginning near the bottom of Figure 1, note that the first heart sound occurs (i) in phase 2 of the cardiac cycle; (ii) at the beginning of ventricular SYSTOLE; (iii) during a period that the aortic and pulmonary valves are not opened (i.e. closed); and (iv) the first heart sound begins exactly when the position of the AV valves just become closed. Therefore, strictly according to the figure, during ventricular systole the AV valves suddenly close just as the first heart sound is created. Thus, answer choice A is the only plausible answer.",
            topic: "biology"
          },
          {
            id: "passage-The-process-of-depolarization-q3",
            type: "passage",
            passageId: "passage-The-process-of-depolarization",
            question: "Would the walls of the atria or ventricles expected to be thicker?",
            options: [
              "Atria, because blood ejection due to atrial contraction is high.",
              "Atria, because blood ejection due to atrial contraction is low.",
              "Ventricles, because ventricular stroke volume is high.",
              "Ventricles, because ventricular stroke volume is low."
            ],
            correctAnswer: "Ventricles, because ventricular stroke volume is high.",
            explanation: "Thicker walls in a particular part of the heart would indicate that it is more muscular, and therefore is more efficient or forceful during its contraction. This immediately rules out answer choices B and D, as they suggest that the thicker walled chamber would be less efficient or forceful. It should be known from the biology review (BIO 7.2) that the ventricles are more muscular (thicker- walled), but in the event that this is not initially known, information regarding the function of both the atria and the ventricles from the passage may help lead to this conclusion. First, systole, the period of contraction, refers to the period of contraction of the ventricles not the atria (paragraph 1, line 5). This would indicate that the contraction of the ventricles might be more relevant in some way. Second, during diastole, atrial contraction occurs after most of the ventricle is already filled (paragraph 3, sentence 4) and serves to push the small amount of blood necessary to complete the filling into the ventricles. Since the atrial contraction does not need to move a large amount of blood (the ventricle is already mostly full), it does not need to be as muscular.",
            topic: "biology"
          },
          {
            id: "passage-The-process-of-depolarization-q4",
            type: "passage",
            passageId: "passage-The-process-of-depolarization",
            question: "The graph below shows the effects on stroke volume of stimulating the sympathetic nerves to the heart. According to the graph, the net result of sympathetic stimulation on stroke volume is to:",
            options: [
              "approximately double stroke volume at any given end diastolic volume.",
              "decrease stroke volume at any given end diastolic volume.",
              "increase stroke volume at any given end diastolic volume.",
              "leave stroke volume relatively unchanged."
            ],
            correctAnswer: "increase stroke volume at any given end diastolic volume.",
            explanation: "This question is easily answered by reading the graph. Compared to the curve labeled 'control', the curve labeled 'sympathetic stimulation' is always at a higher stroke volume for a given end-diastolic volume. However, by looking at stroke volume values for both curves at any end-diastolic volume value (i.e. 200), it is clear that the stroke volume for sympathetic stimulation is always less than twice the control (i.e. 160 vs. 100), thus eliminating answer choice A. Thus, we are left with answer choice C.",
            topic: "biology"
          },
          {
            id: "passage-The-process-of-depolarization-q5",
            type: "passage",
            passageId: "passage-The-process-of-depolarization",
            question: "The wall of the left ventricle is at least three times as thick as that of the right ventricle. This feature aids circulation by assuring that:",
            options: [
              "blood entering the pulmonary artery is at a much higher pressure than blood entering the aorta.",
              "blood entering the aorta is at a much higher pressure than blood entering the pulmonary artery.",
              "the left ventricle has a higher blood capacity than the right ventricle at all times.",
              "the right ventricle has a higher blood capacity than the left ventricle at all times."
            ],
            correctAnswer: "blood entering the aorta is at a much higher pressure than blood entering the pulmonary artery.",
            explanation: "It is commonly known that as a rule, the size of a muscle is proportional to its strength. The heart, which is a muscle, contains a chamber which must pump blood into the aorta to perfuse the grand majority of the body's tissues. Clearly, this chamber (= the left ventricle) must contain thicker muscle (= stronger) than a chamber that pumps blood only to the lungs (= the right ventricle through the pulmonary artery). The stronger chamber pumps blood with a greater force which means a higher pressure (recall from physics: P = F/A).",
            topic: "biology"
          },
          {
            id: "passage-The-process-of-depolarization-q6",
            type: "passage",
            passageId: "passage-The-process-of-depolarization",
            question: "According to Fig. 1, the opening of the aortic and pulmonary valves is NOT associated with:",
            image: "images/q148/q6.png",
            options: [
              "ventricular systole.",
              "a rise and fall in aortic pressure.",
              "a drop and rise in left ventricular volume.",
              "the third phase of the cardiac cycle."
            ],
            correctAnswer: "a drop and rise in left ventricular volume.",
            explanation: "Close analysis of Figure 1 (compare to previous questions especially Q2) reveals that during the period that the aortic and pulmonary valves are OPEN, the curve for left ventricular volume drops (= decreases) but does not rise (= increase).",
            topic: "biology"
          }
        ]
      },
      {
        id: "passage-The-polymerase-chain-reaction",
        text: "The polymerase chain reaction (PCR) is a powerful biological tool that allows the rapid amplification of any fragment of DNA without purification. In PCR, DNA primers are made to flank the specific DNA sequence to be amplified. These primers are then extended to the end of the DNA molecule with the use of a heat- resistant DNA polymerase. The newly synthesized DNA strand is then used as the template to undergo another round of replication. The 1st step in PCR is the melting of the target DNA into 2 single strands by heating the reaction mixture to approximately 94ֲ° C, and then rapidly cooling the mixture to allow annealing of the DNA primers to their specific locations. Once the primer has annealed, the temperature is elevated to 72ֲ° C to allow optimal activity of the DNA polymerase. The polymerase will continue to add nucleotides until the entire complimentary strand of the template is completed at which point the cycle is repeated (Figure 1)Figure 1 - One of the uses of PCR is sex determination, which requires amplification of intron 1 of the amelogenin gene. This gene found on the X-Y homologous chromosomes has a 184 base pair deletion on the Y homologue. Therefore, by amplifying intron 1 females can be distinguished from males by the fact that males will have 2 different sizes of the amplified DNA while females will only have 1 unique fragment size.",
        image: "images/q150/1.png",
        topic: "biochemistry",
        questions: [
          {
            id: "passage-The-polymerase-chain-reaction-q1",
            type: "passage",
            passageId: "passage-The-polymerase-chain-reaction",
            question: "The polymerase chain reaction most likely resembles which of the following cellular process?",
            options: [
              "Transcription of DNA",
              "Protein synthesis",
              "DNA replication",
              "Translation"
            ],
            correctAnswer: "DNA replication",
            explanation: "As described in the passage, the polymerase chain reaction utilizes DNA primers that anneal to the DNA template. DNA polymerase then extends the DNA primers in an effort to replicate the DNA strand. These steps are identical to those of DNA replication in a cell. However, in a cell, the cycle occurs once per cellular division.",
            topic: "biochemistry"
          },
          {
            id: "passage-The-polymerase-chain-reaction-q2",
            type: "passage",
            passageId: "passage-The-polymerase-chain-reaction",
            question: "Why is a heat resistant DNA polymerase required for successive replication in the polymerase chain reaction, rather than simply a human DNA polymerase?",
            options: [
              "The high temperatures required to melt the DNA double strand may denature a normal human cellular DNA polymerase.",
              "The high temperatures required to melt the DNA would cause human DNA polymerase to remain bound to the DNA strand.",
              "Heat resistant DNA polymerase increases the rate of the polymerase chain reaction at high temperatures whereas human DNA polymerase lowers the rate.",
              "Heat resistant DNA polymerase recognizes RNA primers whereas human DNA polymerase does not."
            ],
            correctAnswer: "The high temperatures required to melt the DNA double strand may denature a normal human cellular DNA polymerase.",
            explanation: "Since mammalian cells function at 37ֲ° C, this is also the optimal temperature for enzyme activity. The temperatures used in PCR, which are well above 70ֲ° C, would easily denature human DNA polymerase which is why a heat resistant DNA polymerase is required. Using human DNA polymerase would require new enzyme after each cycle, and therefore would not be very efficient.",
            topic: "biochemistry"
          },
          {
            id: "passage-The-polymerase-chain-reaction-q3",
            type: "passage",
            passageId: "passage-The-polymerase-chain-reaction",
            question: "Which of the following statements could be used to correctly describe the overall polymerase chain reaction?",
            options: [
              "It is an anabolic reaction that breaks down new DNA strands.",
              "It is an anabolic reaction that synthesizes new DNA strands.",
              "It is a catabolic reaction that breaks down new DNA strands.",
              "It is a catabolic reaction that synthesizes new DNA strands."
            ],
            correctAnswer: "It is an anabolic reaction that synthesizes new DNA strands.",
            explanation: "This question requires knowledge of the definition of anabolism and catabolism. A catabolic reaction involves the breakdown of macromolecules, whereas an anabolic reaction involves the synthesis of macromolecules from individual building blocks. PCR entails the synthesis (amplification) of a new DNA strand using a DNA template and free nucleotides, therefore, it is an anabolic reaction that synthesizes new DNA strands.",
            topic: "biochemistry"
          },
          {
            id: "passage-The-polymerase-chain-reaction-q4",
            type: "passage",
            passageId: "passage-The-polymerase-chain-reaction",
            question: "The use of PCR for sex determination relies on the fact that:",
            options: [
              "the amelogenin gene is responsible for an autosomal recessive trait.",
              "the X and Y homologous chromosomes have different sizes of intron 1 of the amelogenin gene.",
              "females have an X and Y chromosome and males have two X chromosomes.",
              "intron 1 has a different nucleotide length than intron 2."
            ],
            correctAnswer: "the X and Y homologous chromosomes have different sizes of intron 1 of the amelogenin gene.",
            explanation: "According to the passage, sex determination can be determined by amplifying intron 1 of the amelogenin gene which is found on the sex chromosomes. Due to a deletion, intron 1 on the Y sex homologue is shorter than intron 1 on the X sex homolog. This difference in size can be used to distinguish between males and females because males have one X and one Y chromosome while females have two X chromosomes. Therefore, females will have only one uniform size of intron 1 which does not bear the deletion. In contrast, males will have 2 different sizes of intron 1 following its amplification. Hence, B. is the correct answer choice.",
            topic: "biochemistry"
          },
          {
            id: "passage-The-polymerase-chain-reaction-q5",
            type: "passage",
            passageId: "passage-The-polymerase-chain-reaction",
            question: "What would PCR amplification of an individual's intron 1 of the amelogenin gene reveal if the individual were male?",
            options: [
              "One type of intron 1 since the individual has one X chromosome and one Y chromosome.",
              "Two types of intron 1 since the individual has only one X chromosome.",
              "One type of intron 1 since the individual has only one X chromosome.",
              "Two types of intron 1 since the individual has one X chromosome and one Y chromosome.",
              "male individual, which contains one X and one Y chromosome, should have 2 types of intron 1. The passage states that intron 1 on the Y chromosome has a deletion which renders it smaller in length than the corresponding allele on the X chromosome, thereby providing males with 2 different size fragments. Females which have 2 X chromosomes will then have only 1 type of intron 1 of uniform size."
            ],
            correctAnswer: "Two types of intron 1 since the individual has one X chromosome and one Y chromosome.",
            explanation: "A male individual, which contains one X and one Y chromosome, should have 2 types of intron 1. The passage states that intron 1 on the Y chromosome has a deletion which renders it smaller in length than the corresponding allele on the X chromosome, thereby providing males with 2 different size fragments. Females which have 2 X chromosomes will then have only 1 type of intron 1 of uniform size.",
            topic: "biochemistry"
          }
        ]
      },
      {
        id: "passage-Every-atomic-orbital-contains",
        text: "Every atomic orbital contains plus and minus regions, defined by the value of the quantum mechanical function for electron density. When orbitals from different atoms overlap to form bonds, an equal number of new molecular orbitals results. These are of two types: σ or π bonding orbitals, formed by overlap between orbital regions with the same sign, and antibonding σ or π** orbitals, formed by overlap between regions with opposite signs. Bonding orbitals have lower energy than their component atomic orbitals, and antibonding orbitals have higher energy. The electron pairs reside in the lower-energy bonding orbitals; the higher-energy, less stable orbitals remain empty when the molecule is in its ground state. A benzene ring has six unhybridized pz orbitals (one from each carbon atom), which together form six molecular π orbitals, each one delocalized over the entire ring. Of the possible π orbital structures for benzene, the one with the lowest energy has the plus region of all six p orbital functions on one side of the ring. The six electrons occupying the orbitals fill the three most stable molecular orbitals, leaving the other three empty. Molecular orbitals are filled from the lowest to the highest energy level. The number of bonds between atoms is determined by the number of filled bonding orbitals minus the number of filled antibonding orbitals; each antibonding orbital cancels out a filled bonding orbital. For a diatomic molecule, orbitals in the n = 2 energy level are filled as follows: σ2s, σ2s, σ2pz, π2px and π2py (equal in energy), π2px and π2py (equal in energy), σ2pz. (The designation of the three p orbitals as px, py, and pz are interchangeable.) Absorption of a photon can raise an electron to a higher-energy molecular orbital. The excited electron does not immediately change its spin, which is opposite to that of the electron with which it was previously paired. This singlet state is relatively unstable: the molecule may interact with another molecule, or fluoresce and return to its ground state. Alternatively, there may be a change in spin direction somewhere in the system; the molecule then enters the so-called triplet state, which generally has lower energy. The molecule now cannot return quickly to its ground state, since the excited electron no longer has a partner of opposite spin with which to pair. It also cannot return to the singlet state, because the singlet has greater energy. Consequently, the triplet state, which has two unpaired electrons in separate orbitals, is long-lived by atomic standards, with a lifetime that may be ten seconds or more. During this period, the molecule is highly reactive.",
        topic: "generalChemistry",
        questions: [
          {
            id: "passage-Every-atomic-orbital-contains-q1",
            type: "passage",
            passageId: "passage-Every-atomic-orbital-contains",
            question: "Which of the following four depictions of molecular π orbitals represents the highest energy state for a 6-carbon polyene molecule? (The signs given are the signs for the mathematical functions defining the p orbitals on one side of the molecule.)",
            options: [
              "\" \" \" \" \" \"",
              "+ + + \" \" \"",
              "+ + \" \" + +",
              "+ \" + \" + \""
            ],
            correctAnswer: "+ \" + \" + \"",
            explanation: "Choice D represents entirely antibonding character, with alternating signs on adjacent orbitals—this leads to no bonding overlap at all, hence maximum energy. The fewer adjacent orbitals that have the same sign (and can thus bond), the higher the orbital’s energy. Therefore, D has the least bonding interaction and is the highest-energy configuration.",
            topic: "generalChemistry"
          },
          {
            id: "passage-Every-atomic-orbital-contains-q2",
            type: "passage",
            passageId: "passage-Every-atomic-orbital-contains",
            question: "Among conjugated polyenes (molecules with alternating carbon-carbon double and single bonds), why are those that are longer able to absorb longer wavelengths of light?",
            options: [
              "Larger molecular orbitals have a lower ground state.",
              "A longer wavelength is better able to interact with a longer molecular orbital.",
              "The larger number of molecular orbitals allows for smaller energy transitions.",
              "Larger molecular orbitals can absorb more energy."
            ],
            correctAnswer: "The larger number of molecular orbitals allows for smaller energy transitions.",
            explanation: "Longer conjugated polyenes have more π electrons, resulting in more molecular orbitals, which creates smaller energy gaps between orbitals. This allows for the absorption of lower-energy, longer-wavelength photons.",
            topic: "generalChemistry"
          },
          {
            id: "passage-Every-atomic-orbital-contains-q3",
            type: "passage",
            passageId: "passage-Every-atomic-orbital-contains",
            question: "Given the order in which orbitals are filled, which molecule is a triplet in its ground state?",
            options: [
              "H₂",
              "O₂",
              "N₂",
              "F₂"
            ],
            correctAnswer: "O₂",
            explanation: "O₂ has two unpaired electrons in its π* orbitals, giving it a triplet ground state. In contrast, H₂, N₂, and F₂ have either fully paired electrons or filled bonding/antibonding orbitals that do not leave unpaired electrons in degenerate orbitals.",
            topic: "generalChemistry"
          },
          {
            id: "passage-Every-atomic-orbital-contains-q4",
            type: "passage",
            passageId: "passage-Every-atomic-orbital-contains",
            question: "Molecular orbitals in hydrocarbons are formed between the 1s atomic orbital of hydrogen and the sp, sp², or sp³ hybrid atomic orbitals of carbon. Which choice correctly lists the energy level of the C–H bonds, from lowest to highest?",
            options: [
              "C₆H₆, HC≡CH, CH₄",
              "HC≡CH, CH₄, C₂H₄",
              "C₂H₂, C₂H₄, CH₄",
              "HC≡CH, C₂H₄, CH₄"
            ],
            correctAnswer: "HC≡CH, C₂H₄, CH₄",
            explanation: "Bond energy relates to s-character of hybrid orbitals: •\tsp (50% s-character) → lowest energy •\tsp² (33%) → medium •\tsp³ (25%) → highest energy Thus, the correct order from lowest to highest bond energy is: sp (HC≡CH) < sp² (C₂H₄) < sp³ (CH₄) → Choice D.",
            topic: "generalChemistry"
          },
          {
            id: "passage-Every-atomic-orbital-contains-q5",
            type: "passage",
            passageId: "passage-Every-atomic-orbital-contains",
            question: "Which of the following figures describes the shape of σ*2pz molecular orbital?",
            image: "images/q170/q5.png",
            options: [
              "Option A",
              "Option B",
              "Option C",
              "Option D"
            ],
            correctAnswer: "Option A",
            explanation: "σ orbitals are symmetric along the bond axis (z-axis), and σ orbitals* are antibonding, showing a node between the nuclei. •\tOption A: Correct antibonding σ orbital (with node) •\tOption D: Bonding σ orbital (no node) •\tOptions B/C: Describe π orbitals.",
            topic: "generalChemistry"
          }
        ]
      }
]

// Chemical and Physical Foundations
export const section1Passages: Passage[] = [
  {
    id: "passage-thermodynamics",
    text: "Thermodynamics is the branch of physics that deals with heat, work, and temperature, and their relation to energy, radiation, and physical properties of matter. The behavior of these quantities is governed by the four laws of thermodynamics which convey a quantitative description using measurable macroscopic physical quantities, but may be explained in terms of microscopic constituents by statistical mechanics.\n\nThe zeroth law of thermodynamics states that if two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other. This law helps define the notion of temperature. When two objects are in thermal equilibrium, they are at the same temperature, and no heat flows between them.\n\nThe first law of thermodynamics, also known as the law of conservation of energy, states that energy cannot be created or destroyed, only transformed from one form to another. In a closed system, the change in internal energy (ΔU) equals the heat added to the system (Q) minus the work done by the system (W): ΔU = Q - W. This law introduces the concept of internal energy and explains why perpetual motion machines of the first kind (those that produce work without energy input) are impossible.\n\nThe second law of thermodynamics states that the total entropy of an isolated system always increases over time or remains constant in ideal cases. It introduces the concept of entropy (S), a measure of the disorder or randomness in a system. One formulation of this law is that heat cannot spontaneously flow from a colder body to a hotter body. The second law explains why perpetual motion machines of the second kind (those that convert heat completely into work) are impossible and why certain processes are irreversible.\n\nThe third law of thermodynamics states that as the temperature of a system approaches absolute zero, the entropy of the system approaches a minimum value. This law implies that it is impossible to reach absolute zero in a finite number of steps, as the system would need to be completely ordered (with minimum entropy), which is practically unattainable.\n\nThermodynamics has wide-ranging applications in physics, chemistry, biology, and engineering. It helps explain phenomena from the efficiency of heat engines to the direction of chemical reactions, and from the behavior of black holes to the processes of life itself.",
    topic: "physics",
    questions: [
      {
        id: "chem-passage1-q1",
        type: "passage",
        passageId: "passage-thermodynamics",
        question: "According to the second law of thermodynamics, which of the following statements is true?",
        options: [
          "The entropy of an isolated system never decreases",
          "Energy can be created but not destroyed",
          "The entropy of a perfect crystal at absolute zero is exactly zero",
          "It is impossible to convert heat completely into work",
        ],
        correctAnswer: "The entropy of an isolated system never decreases",
        explanation:
          "This is a detail question about the second law of thermodynamics. According to the fourth paragraph, 'The second law of thermodynamics states that the total entropy of an isolated system always increases over time or remains constant in ideal cases.' This directly supports option A. Option D is also mentioned as a consequence of the second law, but option A more directly states the law itself.",
        topic: "physics",
      },
      {
        id: "chem-passage1-q2",
        type: "passage",
        passageId: "passage-thermodynamics",
        question: "Which of the following is a consequence of the first law of thermodynamics?",
        options: [
          "Heat always flows from hot to cold objects",
          "Energy cannot be created or destroyed in an isolated system",
          "No process is 100% efficient",
          "Absolute zero cannot be reached",
        ],
        correctAnswer: "Energy cannot be created or destroyed in an isolated system",
        explanation:
          "This question tests your understanding of the first law of thermodynamics. According to the third paragraph, 'The first law of thermodynamics, also known as the law of conservation of energy, states that energy cannot be created or destroyed, only transformed from one form to another.' This directly supports option B. The other options relate to different laws: option A relates to the second law, option C is a consequence of the second law, and option D relates to the third law.",
        topic: "physics",
      },
      {
        id: "chem-passage1-q3",
        type: "passage",
        passageId: "passage-thermodynamics",
        question:
          "Which law of thermodynamics explains why perpetual motion machines of the first kind are impossible?",
        options: ["The zeroth law", "The first law", "The second law", "The third law"],
        correctAnswer: "The first law",
        explanation:
          "This is a detail question. According to the third paragraph, the first law of thermodynamics 'explains why perpetual motion machines of the first kind (those that produce work without energy input) are impossible.' This directly supports option B.",
        topic: "physics",
      },
      {
        id: "chem-passage1-q4",
        type: "passage",
        passageId: "passage-thermodynamics",
        question: "According to the passage, what does the zeroth law of thermodynamics help define?",
        options: ["Energy", "Entropy", "Temperature", "Work"],
        correctAnswer: "Temperature",
        explanation:
          "This is a detail question. According to the second paragraph, 'The zeroth law of thermodynamics states that if two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other. This law helps define the notion of temperature.' This directly supports option C.",
        topic: "physics",
      },
      {
        id: "chem-passage1-q5",
        type: "passage",
        passageId: "passage-thermodynamics",
        question: "In the equation ΔU = Q - W, what does W represent?",
        options: [
          "The work done by the system",
          "The work done on the system",
          "The weight of the system",
          "The width of the system",
        ],
        correctAnswer: "The work done by the system",
        explanation:
          "This is a detail question about the first law equation. According to the third paragraph, 'In a closed system, the change in internal energy (ΔU) equals the heat added to the system (Q) minus the work done by the system (W): ΔU = Q - W.' This directly supports option A.",
        topic: "physics",
      },
    ],
  },
  {
    id: "passage-Hemoglobin-Hb-and-myoglobin",
    text: "Hemoglobin (Hb) and myoglobin (Mb) are the O-carrying proteins in vertebrates. Hb, which is contained within red blood cells, serves as the O carrier in blood and also plays a vital role in the transport of CO and H Vertebrate Hb consists of four polypeptides (subunits) each with a heme group. The four chains are held+ together by noncovalent attractions. The affinity of Hb for O varies between species and within species depending on such factors as blood pH, stage of development, and body size. For example, small mammals give up O more readily than large mammals because small mammals have a higher metabolic rate and require more O per gram of tissue. The binding of O - to Hb is also dependent on the cooperativity of the Hb subunits. That is, binding at one heme facilitates the binding of O at the other hemes within the Hb molecule by altering the conformation of the entire molecule. This conformational change makes subsequent binding of O more energetically favorable. Conversely, the unloading of O at one heme facilitates the unloading of O at the others by a similar mechanism. Figure 1 depicts the O - -dissociation curves of Hb (Curves A, B, and C) and myoglobin (Curve D), where saturation, Y, is the fractional occupancy of the O -binding sites. The fraction of O that is transferred from Hb as the blood passes through the tissue capillaries is called the utilization coefficient. A normal value is approximately 0.25.Figure 1 – Myoglobin facilitates transport in muscle and serves as a reserve store of O . Mb is a single polypeptide chain containing a heme group, with a molecular weight of 18 kd. As can be seen in Figure 1, Mb (Curve D) has a greater affinity for than Hb.",
    image: "images/q34/1.png",
    topic: "biochemistry",
    questions: [
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q1",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "The llama is a warm-blooded mammal that lives in regions of unusually high altitudes, and has evolved a type of Hb that adapts it to such an existence. If Curve B represents the O -dissociation curve for horse Hb, which curve would most closely resemble the curve for llama Hb?",
        options: [
          "Curve A",
          "Curve B",
          "Curve C",
          "Curve D"
        ],
        correctAnswer: "Curve A",
        explanation: "The key to answering this question lies in knowing that at high altitudes, atmospheric pressure is low, meaning that there is less oxygen in the air than at sea level. Were told that the llama has adapted to life at high altitudes by evolving a different type of hemoglobin. Since the partial pressure of oxygen is lower up in the mountains, llama hemoglobin must be able to bind oxygen MORE readily at low partial pressures of oxygen. And this means that for a given value of oxygen pressure on the X-axis of Figure 1, the llamas hemoglobin will be more saturated with oxygen than the horses hemoglobin, since horses dont typically live in regions of unusually high altitude. In terms of Figure 1, this means that the llama oxygen-dissociation curve will be to the left of the horses. So if Curve B is the horse curve, then the llama curve most closely resembles Curve A. Thus, choices B and C are wrong. As for Curve D; remember, were told in the passage that Curves A, B, and C are hemoglobin curves, while Curve D is the myoglobin curve. So, choice D is wrong.",
        topic: "biochemistry"
      },
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q2",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "If Curve B represents the O - -dissociation curve for elephant Hb, which curve most closely resembles the curve for mouse Hb?",
        options: [
          "Curve A",
          "Curve B",
          "Curve C",
          "Curve D"
        ],
        correctAnswer: "Curve C",
        explanation: "According to the passage, small mammals have higher metabolic rates and require a greater amount of oxygen per gram of tissue than larger mammals, and as a result, have hemoglobin that dissociates oxygen more readily than the hemoglobin of large mammals. A high metabolic rate implies that theres a whole lot of aerobic respiration going on. Metabolically active tissue needs lots of oxygen. The benefit of having Hb that easily dissociates oxygen is that when hemoglobin delivers oxygen to metabolically active tissue, it will readily give up its oxygen to the tissue. This means that for a given value of oxygen pressure, mouse hemoglobin will be less saturated with oxygen than elephant hemoglobin, since an elephant is much larger than a mouse and therefore has a much lower metabolic rate. In terms of Figure 1, the mouse Hb curve will be to the right of the elephant Hb curve. So if Curve B represents oxygen dissociation for elephant hemoglobin, then Curve C most closely resembles the curve for mouse Hb. Therefore, choices A and B are wrong and choice C is correct. As for choice D, were twice told in the passage that Curve D represents oxygen dissociation for myoglobin. So Curve D isnt even an option since were dealing with hemoglobin in this question.",
        topic: "biochemistry"
      },
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q3",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "If Curve B represents the O - -dissociation curve for human adult Hb, which of the following best explains why Curve A most closely resembles the curve for fetal Hb?",
        options: [
          "Fetal tissue has a higher metabolic rate than adult tissue.",
          "Fetal tissue has a lower metabolic rate than adult tissue.",
          "Fetal Hb has a higher affinity for than adult Hb.",
          "Fetal Hb has a lower affinity for than adult Hb."
        ],
        correctAnswer: "Fetal Hb has a higher affinity for than adult Hb.",
        explanation: "Fetuses are 100% dependent on their mothers for all of their nutritional needs, oxygen being one of them. Oxygen is delivered to the fetus by way of diffusion across the placenta. According to the question stem, Curve A most closely resembles the oxygen- dissociation curve for fetal hemoglobin assuming that Curve B is the curve for adult hemoglobin. This means that a given oxygen pressure, fetal hemoglobin is more saturated with oxygen than adult hemoglobin is. This implies that fetal hemoglobin has a greater affinity for oxygen than adult hemoglobin. In fact, at low partial pressures of oxygen, fetal hemoglobin has a 20-30% greater affinity for oxygen than adult hemoglobin. That is why oxygen binds preferentially to fetal hemoglobin in the capillaries of the placenta. Thus, choice C is correct and choices A, B, and D are wrong. In addition, fetal blood has a 50% higher concentration of hemoglobin than maternal blood, which increases the amount of oxygen that enters fetal circulation.",
        topic: "biochemistry"
      },
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q4",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "The sigmoidal shape of the O - -dissociation curve of Hb is due to:",
        options: [
          "the effects of oxidation and reduction on the heme groups within the Hb molecule.",
          "the concentration of carbon dioxide in the blood.",
          "the fact that Hb has a lower affinity for than Mb.",
          "the cooperativity in binding among the subunits of the Hb molecule."
        ],
        correctAnswer: "the cooperativity in binding among the subunits of the Hb molecule.",
        explanation: "The sigmoidal shape of the oxygen-dissociation curve for hemoglobin can be explained by the cooperativity among the subunits of the hemoglobin molecule. According to the passage, hemoglobin is composed of four subunits, each with its own heme group. Each heme unit is capable of binding to one molecule of oxygen, and so the entire molecule is capable of binding four molecules of oxygen. The binding of oxygen at the first heme group induces a conformational change in the hemoglobin molecule such that the second heme groups affinity for oxygen increases. Likewise, the binding of oxygen at the second heme group increases the third hemes affinity for oxygen; and the binding of oxygen at the third heme groups increases the fourths affinity for oxygen. Therefore, the partial pressure of oxygen and the % oxygen-saturation of hemoglobin are NOT linearly proportional. As a consequence of these shifts in oxygen affinity with each binding, the line representing the oxygen-dissociation curve for hemoglobin is not straight, but rather a sigmoidal, or S-shaped, curve. Thus, choice D is the right answer. Lets take a look at the wrong answers for a minute. When the iron molecule of the heme group binds to oxygen, it is reduced; when the iron releases the oxygen, it is oxidized. However, this neither results in the sigmoidal shape of the curve, nor does it affect it. So, choice A is wrong. The concentration of carbon dioxide in the blood, choice B, is a factor that does affect hemoglobins affinity for oxygen, and therefore affects the positioning of the curve, but it is NOT RESPONSIBLE for the sigmoidal shape. A high concentration of carbon dioxide in the blood will decrease hemoglobins affinity for oxygen, and will therefore shift the curve to the right. So, choice B is also wrong. Choice C is also a true statement \" myoglobin does have a higher affinity for oxygen than does hemoglobin, as shown in Figure 1. However, this does not affect the shape of the sigmoidal curve. Therefore, choice C is also wrong.",
        topic: "biochemistry"
      },
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q5",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "A sample of human adult Hb is placed in an 8 M urea solution, resulting in the disruption of noncovalent interactions. After this procedure, the ־± chains of Hb are isolated. Which of the four curves most closely resembles the O -dissociation curve for the isolated ־± chains? [Note: Assume that Curve B represents the O - dissociation curve for human adult Hb in vivo.]",
        options: [
          "Curve A",
          "Curve B",
          "Curve C",
          "Curve D"
        ],
        correctAnswer: "Curve D",
        explanation: "From the passage you know that the four subunits in Hb are held together by noncovalent interactions. So placing a sample of human adult hemoglobin in an 8 M urea solution, which youre told disrupts noncovalent interactions, will cause the subunits to break apart. Youre also told in the question stem that the alpha chains of this sample of hemoglobin were isolated. So you need to figure out what the oxygen dissociation curve of a single peptide chain would look like. From the passage you also know that myoglobin consists of a single polypeptide chain. Therefore, the oxygen-dissociation curve for one polypeptide chain of Hb would be expected to look similar to the curve for myoglobin. In fact, both the individual alpha chains and the beta chains of hemoglobin resemble the tertiary structure of myoglobin. Thus, the curve for the alpha chain will look like Curve D and so, choice D is correct. The single chain of Hb will NOT look like Curves A, B or C because these curves have a unique shape due to the cooperativity of the four hemoglobin subunits. And since youre now dealing with a single chain, because of that treatment with an 8 M urea solution, no cooperativity is possible.",
        topic: "biochemistry"
      },
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q6",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "The utilization coefficient is continually being adjusted in response to physiological changes. Which of the following values most likely represents the utilization coefficient for human adult Hb during strenuous exercise?",
        options: [
          "0.0",
          "0.125",
          "0.25",
          "0.75"
        ],
        correctAnswer: "0.75",
        explanation: "Youre told that the utilization coefficient is the fraction of the blood that releases its oxygen to tissues under normal conditions, and that under these conditions, the value of the coefficient is approximately 0.25. During strenuous exercise, there is a greater demand for oxygen, especially in skeletal muscle, where oxygen supplies are rapidly depleted during cellular respiration. Under such conditions, one would expect that a greater fraction of the blood would give up its oxygen, and that the utilization coefficient would therefore be some value greater than 0.25. Since choice D is the only value greater than 0.25, choice D is the right answer, and choices A, B, and C are wrong. During strenuous exercise, the utilization coefficient has been recorded at values ranging between 0.75 and 0.85 meaning that",
        topic: "biochemistry"
      },
      {
        id: "passage-Hemoglobin-Hb-and-myoglobin-q7",
        type: "passage",
        passageId: "passage-Hemoglobin-Hb-and-myoglobin",
        question: "In sperm whales, the Mb content of muscle is about 0.004 moles/kg of muscle. If a sperm whale has 1000 kg of muscle, approximately how much O is bound to Mb, assuming that the Mb is saturated with O ?",
        options: [
          "4 moles",
          "8 moles",
          "12 moles",
          "16 moles"
        ],
        correctAnswer: "4 moles",
        explanation: "Basically what you need to do to solve this problem is figure out how much oxygen will be bound to myoglobin, if the myoglobin in this sperm whale is completely saturated with oxygen. If you look at the answer choices, all of the values are in moles. So to equate the number of moles of oxygen that will bind to myoglobin, you need to figure out how many moles of myoglobin are present in the sperm whales muscles. From the question stem you know that there are 0.004 moles of myoglobin per kg of muscle and the whale has 1000 kg of muscle. Multiplying these two numbers together gives you 4 moles of myoglobin. This means that the whale has 4 moles of myoglobin in its muscles. So how many moles of oxygen will there be? You need to determine how many molecules of oxygen bind to a single molecule of myoglobin. The answer is one. Why? Because myoglobin consists of a single polypeptide chain, which contains a single heme group. Thus, myoglobin binds only one molecule of oxygen. If one molecule of oxygen binds to one molecule of myoglobin, then one MOLE of oxygen will bind to one MOLE of myoglobin. And since you know that the whale has 4 moles of myoglobin in its muscle, then 4 moles of oxygen will be bound to myoglobin, when myoglobin is completely saturated with oxygen. Therefore, choice A is correct.",
        topic: "biochemistry"
      }
    ]
  },
  {
    id: "passage-The-mechanism-for-the",
    text: "The mechanism for the acid-catalyzed esterification of a carboxylic acid, carried out with R'OH, is shown below. The tagged alcohol R'18OH is used to study the reaction mechanism. The resulting ester is separated from the reaction mixture; the water from the reaction mixture is then distilled off completely and collected as a separate fraction",
    image: "images/q43/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-The-mechanism-for-the-q1",
        type: "passage",
        passageId: "passage-The-mechanism-for-the",
        question: "Assuming that only the forward reaction occurs, which of the following statements is correct?",
        options: [
          "The ester will contain labeled oxygen, while the water fraction will not.",
          "The water fraction will contain labeled oxygen, while the ester will not.",
          "Both the water fraction and the ester will contain labeled oxygen.",
          "The location of the labeled oxygen cannot be determined."
        ],
        correctAnswer: "The ester will contain labeled oxygen, while the water fraction will not.",
        explanation: "This question concerns the acid-catalyzed esterification of a carboxylic acid. In this reaction, the carbonyl carbon of the carboxylic acid reacts with the alcohol oxygen to form an ester linkage. Therefore, if the alcohol has a tagged oxygen, the ester itself will be tagged when the reaction is complete. Thus Choice A is correct. Choices B, and C are incorrect because the water fraction will not contain labeled oxygen, since the oxygen of the water comes from the hydroxyl group on the carboxylic acid, which was never labeled. The answer CAN be determined from knowledge of the mechanism, so choice D is incorrect as well.",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-mechanism-for-the-q2",
        type: "passage",
        passageId: "passage-The-mechanism-for-the",
        question: "The rate of the reaction is negligible without the acid catalyst. The catalyst:",
        options: [
          "attacks the carbonyl oxygen, permitting the nucleophilic group to attack the carbonyl carbon.",
          "attacks the carbonyl carbon, permitting the nucleophilic group to attack the carbonyl oxygen.",
          "attacks the carbonyl oxygen, permitting the electrophilic group to attack the carbonyl carbon.",
          "attacks the carbonyl carbon, permitting the electrophilic group to attack the carbonyl oxygen"
        ],
        correctAnswer: "attacks the carbonyl oxygen, permitting the nucleophilic group to attack the carbonyl carbon.",
        explanation: "This question asks why the esterification of a carboxylic acid with an alcohol should be carried out under acid catalysis. To answer this, its important to understand the mechanism presented in the passage. In the first step, the proton of the acid catalyst attacks the oxygen of the carboxylic acid carbonyl group. This produces a positively charged carbon, which is very susceptible to nucleophilic attack by the alcohol. Thus the reaction occurs between the carbonyl carbon, which is electrophilic and the alcohol oxygen, which is nucleophilic. Choice A agrees with this mechanism and is therefore the correct response.",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-mechanism-for-the-q3",
        type: "passage",
        passageId: "passage-The-mechanism-for-the",
        question: "Esterification may also occur between parts of the same molecule. Which of the following compounds would most easily undergo internal esterification to form a cyclic ester?",
        options: [
          "COOHCH CH OH",
          "COOHCH CH CH OH",
          "COOHCH CH CH CH OH",
          "COOHCH CH CH CH CH OH"
        ],
        correctAnswer: "COOHCH CH CH CH OH",
        explanation: "This question asks which compound would most easily undergo internal esterification to form a cyclic ester. In this case, the stability of ring structures must be considered. The least amount of ring strain occurs in structures that can form six-membered rings, like cyclohexane. If choice A were to form a cyclic ester, it would be a four-membered ring with a lot of angle and eclipsing strain. Choice B would be a five-membered ring, which is not ideally stable. Choice C, if it underwent internal esterification, would form a six-membered ring. Five of the atoms comprising the ring would be carbons, and one would be an oxygen. This formation is strain free; therefore, it would be most easily formed. Choice D would yield a seven-membered ring, which is less stable than choice C. Another method for forming esters is: RCOO - + RX †’ RCOOR² + Xˆ’ ˆ’",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-mechanism-for-the-q4",
        type: "passage",
        passageId: "passage-The-mechanism-for-the",
        image: "images/q43/q4.png", // images/q43/q4_1.png",
        question: "Why does this reaction occur?",
        options: [
          "The halide is a poor leaving group.",
          "The halide acts as a good nucleophile.",
          "The halide is an electron-donating group.",
          "The carboxylate anion is highly nucleophilic."
        ],
        correctAnswer: "The carboxylate anion is highly nucleophilic.",
        explanation: "This question asks you to explain why a reaction occurs between carboxylic acids and alkyl halides. This reaction is an example of a nucleophilic substitution reaction with the carboxylate ion serving as the nucleophile and the leaving group. On the basis of this information, choice D is the correct response. Choice A is wrong because, in this case, the halide is a very good leaving group. Choice B is wrong because the halide is not the nucleophile but the leaving group. And finally, choice C is incorrect because the leaving group is an electron withdrawing group by virtue of its electronegativity.",
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-A-student-was-given",
    text: "A student was given a sample of an unknown liquid and asked to determine as much as possible about its structure. He was told that the compound contained only carbon, hydrogen, and oxygen, and had only one type of functional group. The student found its boiling point to be 206 °C. Using mass spectroscopy, he determined its molecular weight to be 138 g/mol. Finally, he took the infrared spectrum of the compound, which is shown below. From this spectrum, the student quickly reached a conclusion about the functional group. He then turned his attention to the fingerprint region of the compound, which generally has a complicated pattern of peaks that are determined by the structure of the hydrocarbon portion of a molecule. The student decided that the large peak at 750 cm⁻¹ must indicate that this was a disubstituted aromatic compound. The overlapping set of peaks near 3000 cm⁻¹ includes one peak at 2850 cm⁻¹.",
    image: "images/q48/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-A-student-was-given-q1",
        type: "passage",
        passageId: "passage-A-student-was-given",
        question: "What type of functional group could this indicate?",
        options: [
          "Methyl",
          "Phenol",
          "Carboxyl",
          "Aldehyde carbonyl"
        ],
        correctAnswer: "Methyl",
        explanation: "The peak at 2850 cm - is characteristic of the Cˆ’H stretch of an alkyl group; in the case, it is attributed to the methyl group of the alkoxide. Thats not a terribly exciting functional group, so you might not have known this right off the top of your head, but you could get it by a process of elimination. Choice B, a phenol group, would produce a broad peak somewhere between 3600 and 3200 cm, which represents the oxygen-hydrogen bond that is characteristic of all hydroxyl groups and is pretty unmistakable. Since this peak is not present in this spectrum, choice B must be incorrect. Choice C, a carboxyl group, would also produce a broad peak due to its hydroxyl group; this can be anywhere from 300 to 2400 cm , and tends to be even broader than a regular hydroxyl peak. The other peaks near the methoxy group peak are much too sharp to belong to a carbonyl group; they actually represent the carbon-hydrogen bonds of the aromatic ring. Whenever you look at the IR spectrum of an organic compound, remember that there will always be some kind of peak or peaks between 2800 and 3300 cm thats simply due to the carbon backbone \" alkane, alkene, alkyne, aromatic, or mixtures of all of these. Anyway, getting back to the question, a carboxyl group would also produce another peak associated with the carbon-oxygen double bond, around 1700 cm , and thats also lacking in this spectrum, so choice C is definitely wrong. Finally, choice D, an aldehyde group, would have the same peak at about 1700; it would also produce two characteristic peaks in the range of 2720 and 2820 cm , called Fermi doublets. Neither of these are present, so D is also wrong.",
        topic: "organicChemistry"
      },
      {
        id: "passage-A-student-was-given-q2",
        type: "passage",
        passageId: "passage-A-student-was-given",
        question: "Assuming that all of the students deductions were correct, which of the following could be the structure of the unknown compound?",
        image: "images/q48/q2.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option B",
        explanation: "The student theorized that the peak at 750 cm indicates a disubstituted aromatic compound, and since were told to assume that all of his deductions were correct, this allows us to eliminate choice D, which has only one substituent on the ring. The passage also says that the compound contains only one type of functional group and so choice A, which contains two different functional groups, is also clearly wrong. By the way, neither choice A nor choice D corresponds to the correct molecular weight anyway You are now left with choices B and C, and to decipher between these, you have to look back at the spectrum. If this were an alcohol, as in choice C, the spectrum would contain a broad peak at about 3350 cm to 3250 cm , which is characteristic of a hydroxyl group. This is much like the peak we mentioned for a phenol and for the O\"H group of a carboxyl group; like those, its broadened by the fact that it can form hydrogen bonds. This is a very characteristic feature of ANY type of hydroxyl-bearing group, and since its not here, choice C must be incorrect.",
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-Compounds-containing-a-hydroxyl",
    text: "Compounds containing a hydroxyl group attached to a benzene ring are called phenols. Derivatives of phenols, such as naphthols and phenanthrols, have chemical properties similar to those of phenols, as do most of the many naturally-occurring substituted phenols. Like other alcohols, phenols have higher boiling points than hydrocarbons of similar molecular weight. Like carboxylic acids, phenols are more acidic than their alcohol counterparts. Phenols undergo a number of different reactions; both their hydroxyl groups and their benzene rings are highly reactive. A number of chemical tests can be used to distinguish phenols from alcohols and carboxylic acids. Thymol, a naturally occurring phenol, is an effective disinfectant that is obtained from thyme oil. Thymol can also be synthesized from m-cresol, as shown in Reaction A below. Thymol can then be converted to menthol, another naturally-occurring organic compound; this conversion is shown in Reaction B.",
    image: "images/q50/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-Compounds-containing-a-hydroxyl-q1",
        type: "passage",
        passageId: "passage-Compounds-containing-a-hydroxyl",
        question: " Reaction A – m-cresol, thymol Reaction B -thymol, methnol Reaction A is an example of:",
        image: "images/q50/q1.png",
        options: [
          "a free radical substitution.",
          "an electrophilic aromatic substitution.",
          "an electrophilic addition.",
          "a nucleophilic aromatic substitution."
        ],
        correctAnswer: "an electrophilic aromatic substitution.",
        explanation: "Reaction A is an electrophilic aromatic substitution reaction, in which thymol is formed from meta-cresol. Both the methyl and hydroxyl substituents in meta-cresol are ortho-para directing activators. However, hydroxyl is the more powerful of the two and if you look at reaction A you can see that substitution occurs ortho to the hydroxyl group. However, we are not too concerned about substituent effects but rather the mechanism of the reaction, so lets briefly review what happens. Initially, phosphoric acid abstracts an electron from propene creating a secondary carbocation. This carbocation then acts as an electrophile and adds to the electron rich benzene ring, ortho to the hydroxyl group. This results in the formation of an arenium ion and aromaticity is regained by loss of a proton, generating thymol. Therefore, this mechanism is electrophilic aromatic substitution \" making choice B the correct answer. From this mechanism, it should be pretty easy to eliminate the other answer choices. Choice C is wrong, because although the carbocation adds to the ring, a proton is lost in order to regain aromaticity. Therefore, this is an example of substitution NOT addition. Choice D is wrong because the carbocation which adds to the ring is acting as an electrophile, not a nucleophile. Remember that benzene is electron rich, and the substituents on meta-cresol enhance this, so there is no way that meta-cresol could be susceptible to nucleophilic attack. Finally, choice A \" free radical substitution \" is also wrong. There is nothing in reaction A to suggest that free radicals are formed and phosphoric acid will not induce radical formation.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Compounds-containing-a-hydroxyl-q2",
        type: "passage",
        passageId: "passage-Compounds-containing-a-hydroxyl",
        question: " Reaction A - Reaction B - Comparing the K - values for cyclohexanol (K= 10) and phenol (K= 1.3ֳ — 10) reveals that phenol is more acidic than cyclohexanol. Which of the following explain(s) the acidity of phenol? I.\tThe exceptionally strong hydrogen bonding possible with phenol facilitates the loss of a proton, making it more acidic than cyclohexanol. II.\tPhenols conjugate base, phenoxide, is stabilized by resonance to a greater extent than phenol itself. III.\tThe negative charge of the oxygen atom on the phenoxide ion is delocalized over the benzene ring.",
        image: "images/q50/q2.png",
        options: [
          "I only",
          "II only",
          "II and III only",
          "I, II, and III"
        ],
        correctAnswer: "II and III only",
        explanation: "To answer this, you need to understand the resonance stabilization effect that makes phenols more acidic than aliphatic alcohols, such as cyclohexanol. In the phenoxide ion, the negative charge on the oxygen is dispersed throughout the benzene ring which, in effect, acts like an electron sink, withdrawing electron density. This delocalizing charge effect, as its called, stabilizes the phenoxide ion, and is described by Statement III, which therefore must be included in the correct answer. So you can eliminate the choices that dont include III, which are choices A and B. Now, the phenoxide ion has more possible resonance structures than the undissociated phenol, which still has its proton; thus Statement II is also correct. As for Statement I, its factually true \" that is, phenols CAN hydrogen-bond more strongly than aliphatic alcohols, as indicated by the higher boiling points mentioned in the passage \" but this is really a consequence, not a cause, of phenols greater stability. So even though Statement I is true, it doesnt explain phenols acidity, and so choice D, which includes Statement I, is incorrect.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Compounds-containing-a-hydroxyl-q3",
        type: "passage",
        passageId: "passage-Compounds-containing-a-hydroxyl",
        question: " Reaction A - Reaction B - Which of the following shows the order of decreasing acidity among the four compounds below?",
        image: "images/q50/q3.png",
        options: [
          "I, III, IV, II",
          "IV, I, II, III",
          "IV, III, II, I",
          "IV, II, I, III"
        ],
        correctAnswer: "IV, II, I, III",
        explanation: "In order to answer this question, you need to know what characteristics of a substituted phenol will tend to increase its acidity. The more electron-withdrawing groups a phenol has, the more any negative charge can be dispersed and stabilized by resonance. Since resonance stabilization stabilizes the phenoxide ion more than the phenol, increased resonance stabilization will make a phenol more acidic. Looking at the four phenols, three of them have varying numbers of nitro groups, which you should know are strongly electron-withdrawing, and the fourth has a methyl group, which is electron-donating and should have the opposite effect from the nitro groups. So trinitrophenol, roman numeral four, which has the most nitro groups, is the most acidic, followed by dinitrophenol, which is roman numeral two, then para-nitrophenol, which is roman numeral one and, finally, para-cresol, roman numeral three, with the methyl group.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Compounds-containing-a-hydroxyl-q4",
        type: "passage",
        passageId: "passage-Compounds-containing-a-hydroxyl",
        question: " Reaction A - Reaction B - The reaction of phenol with dilute nitric acid produces which of the following compounds?",
        image: "images/q50/q4.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option A",
        explanation: "To answer this question, you need to know that hydroxyl groups are electron-donating and so they activate aromatic rings towards electrophilic aromatic substitution. Like all electrondonating groups, hydroxyl groups are ortho-para directors. So in this case, the nitro group will add to phenol to form two products, ortho-nitrophenol and para-nitrophenol. This means choice A is the correct answer. Choice B, which has only para-nitrophenol, is incomplete and therefore wrong. Choices C and D can be eliminated because they both include meta-nitrophenol, which will NOT be formed. The only way to get meta-nitrophenol would be to start with nitrobenzene and turn it into a phenol, which would work because the nitro group is an electron-withdrawing, deactivating meta director. The reaction will produce only negligible amounts of meta-nitrophenol, if any.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Compounds-containing-a-hydroxyl-q5",
        type: "passage",
        passageId: "passage-Compounds-containing-a-hydroxyl",
        question: " Reaction A - Reaction B - What simple chemical test could be used to distinguish between the following two compounds?",
        image: "images/q50/q5.png",
        options: [
          "Compound IIs solubility in NaHCO",
          "Compound Is solubility in NaOH",
          "Compound Is ability to decolorize a bromine solution",
          "Compound Is solubility in NaHCO"
        ],
        correctAnswer: "Compound Is solubility in NaOH",
        explanation: "Compound I is para-cresol or para-methylphenol, and Compound II is benzyl alcohol, which behaves more like an aliphatic alcohol than a phenol. We can take advantage of this fact in order to distinguish between these two compounds. One of the easiest ways to do this is by their solubility behavior, which is also an easy way of separating them out of a mixture. Phenols are appreciably acidic, so they are quite soluble in aqueous sodium hydroxide. Alcohols, including benzyl alcohol, are NOT acidic and wont be soluble in aqueous sodium hydroxide. Now there is one exception; very small alcohols, with fewer than five carbons, are water-soluble, so they would dissolve in ANY aqueous solution. However, benzyl alcohol is too big a molecule to be water- soluble, so it wont be soluble in sodium hydroxide solution. So, the solubility of paracresol, Compound I, in aqueous sodium hydroxide would provide an effective test to distinguish between the two compounds, and thus choice B is the correct answer. Notice that this means you could separate a mixture of these two compounds by dissolving it in an organic solvent, and then extracting the solution in a separatory funnel with aqueous layer. Choice C is wrong, because compound I wont react with a bromine solution and decolorize it. Both compounds will react under stronger conditions, namely, the presence of a Lewis acid, but bromine in solution is too mild a reagent to react with the stable aromatic ring. Therefore, compound I, and compound II for that matter, wont decolorize bromine solution and choice C is incorrect. Choice D is incorrect because neither of the two compounds will be soluble in sodium bicarbonate. Sodium bicarbonate is a weak base, but since phenols are fairly weak acids, it takes a fairly STRONG base to make a phenol give up its acidic proton. Thus, para-cresol wont dissolve in sodium bicarbonate. As weve said, benzyl alcohol is an even weaker acid than para-cresol, so it certainly wont dissolve in sodium bicarbonate. And since neither compound will be soluble in sodium bicarbonate, sodium bicarbonate cant be used to distinguish between them.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Compounds-containing-a-hydroxyl-q6",
        type: "passage",
        passageId: "passage-Compounds-containing-a-hydroxyl",
        question: " Reaction A - Reaction B - Compound H(O) dissolves in aqueous sodium hydroxide but is insoluble in aqueous sodium bicarbonate. The proton NMR spectrum of compound X is as follows:",
        image: "images/q50/q6.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option B",
        explanation: "All four answer choices are aromatic compounds, so Compound X must be aromatic. The chemical formula for this compound consists of carbons, hydrogens, and oxygens (which means you can eliminate choice C immediately, since that contains bromine atoms). The next piece of information in the question is that Compound X is soluble in aqueous sodium hydroxide, but not in aqueous sodium bicarbonate. This eliminates choice A, which is a substituted benzoic acid which WOULD certainly dissolve in sodium bicarbonate. From our discussion in the previous question, you should remember that the ability to dissolve in aqueous sodium hydroxide, but NOT in aqueous sodium bicarbonate, is characteristic of phenols. This suggests that Compound X is a phenol, which would make choice B correct and choice D, which is a phenyl ether, incorrect. But theres other information in this passage, so you should check through it to see if it supports your preliminary conclusion. Now lets look at the NMR spectrum and see what information we can get from that. The NMR spectrum has three separate peaks. The multiplet of area four has a chemical shift of 7.1, which is very far upfield; this represents the aromatic ring, and is due to the spin spin coupling of four aromatic hydrogens. The signal at a chemical shift of 1.3 has a peak area of 9 hydrogens; the chemical shift indicates carbon- hydrogen single bonds, and the fact that there are nine hydrogens that are all equivalent means that this represents a tert-butyl group. This would fit EITHER choice B or choice D. And finally, the second singlet peak, whose chemical shift is 4.8 has an area of one. If Compound X were choice D, the single hydrogen peak that youd get would be from the -CH group of the tert-buyl, next to the ether- group oxygen; this would be much further downfield, probably with a chemical shift of about 2.3 or 2.4, so choice D must be wrong. The fact that the signal from the single hydrogen is shifted much further upfield, to 4.8, indicates that the proton involved is deshielded, which in turn suggests that its attached to a more elec-tronegative element than carbon. This magnitude of shift is in fact characteristic of a phenolic hydrogen. This agrees with our previous conclusion, that Compound X is choice B, and so B is the correct answer, as we suspected before.",
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-Synthetic-dyes-constitute-a",
    text: "Synthetic dyes constitute a commercially significant area of organic chemistry. The color producing properties of these compounds are the result of highly delocalized electron systems giving rise to electronic transitions whose absorptions occur in the visible region. Most commercially useful dyes can be classified as one of three types \" anthraquinones, azo dyes, or triarylmethyl salts. Examples of each type are illustrated in Figure 1. In order for a dye to be useful in the fabric industry, it must have sufficient affinity for the polymeric fibers of which the material is composed; the dye must not only impart a color to the fabric, but must also do so in a relatively permanent manner (color fastness). Proper design of synthetic polymers requires the placement of acidic or basic side chains along the polymer backbone such that binding sites are available for dying. Similarly, dyes must be produced not only with the appropriate color-producing structure, but also with an affinity for the fabric in question. The structural units of several common synthetic fibers are shown in Figure 2.",
    image: "images/q56/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-Synthetic-dyes-constitute-a-q1",
        type: "passage",
        passageId: "passage-Synthetic-dyes-constitute-a",
        question: "Certain natural protein fibers such as silk or wool can be treated with aqueous base, then with solutions containing cationic dyes such as malachite green to produce color fast yarns. The most likely explanation for the affinity of malachite green for silk or wool via this process is that:",
        options: [
          "many of the R groups on the amino acids of which these fibers are composed contain COOH groups.",
          "very few of the R groups on the amino acids of which these fibers are composed contain OH groups.",
          "the aqueous base hydrolyzes some of the peptide linkages in these fibers.",
          "the aqueous base neutralizes the cationic dye."
        ],
        correctAnswer: "many of the R groups on the amino acids of which these fibers are composed contain COOH groups.",
        explanation: "Since malachite green, as depicted in figure 1, is cationic, it follows that it will have an affinity for anionic binding sites. Such anionic binding sites, alluded to in the passage, would be produced from acidic side chains upon treatment with aqueous base, and acidic side chains in natural proteins would most likely contain the COOH functionality. Choice B is incorrect since acidic side chains on natural amino acids often contain OH groups. Choice C is wrong since treatment with base is part of the process of producing color-fast yarns; this treatment makes the color stick, it does not break down the yarn into smaller polypeptide chains as choice C suggests. Choice D is incorrect because the base reacts with the fiber before the dye is added, and not with the dye",
        topic: "organicChemistry"
      },
      {
        id: "passage-Synthetic-dyes-constitute-a-q2",
        type: "passage",
        passageId: "passage-Synthetic-dyes-constitute-a",
        question: "Dacron belongs to which of the following general classifications?",
        options: [
          "Polyamide",
          "Polyester",
          "Polyurethane",
          "Polypeptide"
        ],
        correctAnswer: "Polyester",
        explanation: "Dacron, as shown in figure 2, is a polyester since it contains the COOR functionality in its monomer (subunit). Choice A is incorrect since polyamides would need to contain nitrogen in their monomers in order to contain an amide functional group, CONR . Dacron does not. (However, nylon, also shown in figure 2, is a polyamide.) Choice C is wrong, like A, for lack of nitrogen, a necessary element to classify the monomeric compound as a urethane, ArNHCOOR. Choice D is wrong since the monomer structure is not a peptide.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Synthetic-dyes-constitute-a-q3",
        type: "passage",
        passageId: "passage-Synthetic-dyes-constitute-a",
        question: "Cotton is a natural fiber composed of cellulose, a polymer of glucose. Which of the compounds shown in Figure 1 would adhere to a cotton fiber via hydrogen bonding?",
        options: [
          "Alizarin only",
          "Malachite green only",
          "Alizarin and aniline yellow only",
          "Malachite green, alizarin, and aniline yellow"
        ],
        correctAnswer: "Alizarin and aniline yellow only",
        explanation: "Hydrogen bonding occurs between OH groups and NH groups in any combination. Since the glucose monomer in cellulose has OH groups, cellulose should be capable of hydrogen bonding to either alizarin, with its two OH groups, or to aniline yellow, with its aromatic amine functionality. Malachite green, on the other hand, has no acidic protons available for hydrogen bonding due to the methylation of the nitrogen atoms.",
        explanationImage: "images/q56/q3_ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Synthetic-dyes-constitute-a-q4",
        type: "passage",
        passageId: "passage-Synthetic-dyes-constitute-a",
        question: "Nylon, Dacron, and many other synthetic fibers are produced via condensation reactions. Which of the following would be the best starting materials for the production of nylon 66?",
        image: "images/q56/q4.png",
        options: [
          "cis-2-butenoic acid and 1,6-hexanediamine",
          "butanedioic acid and 1,6-hexanediamine",
          "n-hexanoic acid and 2,5-hexanediamine",
          "hexanedioic acid and 1,6-hexanediamine"
        ],
        correctAnswer: "hexanedioic acid and 1,6-hexanediamine",
        explanation: "Amides are produced by the condensation of amines with carboxylic acids: To produce a repeating chain, or polyamide, one would need to condense a diamine with a dicarboxylic acid. As indicated in figure 2, nylon 66 has a straight chain of six carbons between the two nitrogen atoms and six more carbon atoms, also unbranched, in the dicarbonyl portion of the monomer. As such, the amine starting material must therefore be 1,6-hexanediamine, while the carboxylate reactant is hexanedioic acid: Choice A is incorrect because cis-2-butenoic acid has only one carboxylate functionality and therefore would not condense on both ends, and it would produce a condensation product in which the butane double bond is still present. It also contains only four carbon atoms, rather than the required six. Choice B is incorrect since, while butanedioic acid can polymerize with the diamine, it would produce a polymer with only two methylene groups between the carbonyl carbons in each monomer. (This product would be called nylon 64.) Choice C is wrong on two counts: first, the hexanoic acid is a monocarboxylic acid, and thus will not combine with two amine molecules; second, any polyamide formed via condensation of an appropriate diacid and the suggested amine, 2,5-hexanediamine, would have two methyl group side chains.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Synthetic-dyes-constitute-a-q5",
        type: "passage",
        passageId: "passage-Synthetic-dyes-constitute-a",
        question: "Azo dyes are synthesized via diazotization. The sequence of diazotization involves first treating an aromatic amine with NaNO₂ in acidic solution, thereby converting it to the corresponding diazonium salt (with the general formula ArN₂⁺ X⁻), then reacting with a second aromatic compound to form the azo dye.What is the structure of the azo dye produced by the reaction sequence below?",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option D",
        explanation: "Aromatic diazonium salts have the general formula ArN₂⁺ X⁻. The second step of the diazotization reaction described is electrophilic aromatic substitution, with ArN₂⁺ acting as the electrophile, thus one should predict that the nitrogen of the salt should attach to the second ring in the position dictated by the second ring’s substituents. Since the second aromatic compound, p-nitroanisole, has two substituents, we need to examine the directing effect of each: •\tThe nitro group (–NO₂) is a meta director, •\tWhile the ether (–OCH₃) is an ortho/para director. The effects of these two groups should thus be additive, placing the new substituent ortho to the –OCH₃, as shown in choice D. Choices A and B are incorrect since the substitution reaction will take place at one of the ring protons, rather than one of the substituent groups. Choice C is wrong because –NO₂ is meta directing but is forced here to be ortho directing.",
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-Morphine-alkaloids-derived-from",
    text: "Morphine alkaloids derived from the opium poppy have long been used as analgesics. Codeine, the methyl ether of morphine, is a naturally occurring alkaloid with medicinal properties very similar to those of morphine. Thousands of derivatives of morphine have been synthesized and tested for their biological effects. For example, the diacylated derivative of morphine, heroin, is a highly addictive drug. Much effort has gone into understanding how morphine and its derivatives function. Studies have shown that certain common structural features of alkaloids are required for the compound to exhibit biological activity. These structural requirements are summarized by the so called morphine rule: Demerol and methadone, shown in Figure 2, are two synthetic alkaloids designed to satisfy the morphine rule. Synthetic alkaloids such as these have been found to mimic certain physiological properties of morphine and its derivatives, and have found pharmacological application due to other, more desirable biological effects. Methadone has been used widely in the United States and Great Britain as a treatment for heroin addiction; it reduces the physical symptoms accompanying withdrawal without producing many of the other effects of heroin.",
    image: "images/q64/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-Morphine-alkaloids-derived-from-q1",
        type: "passage",
        passageId: "passage-Morphine-alkaloids-derived-from",
        question: "One of the requirements of the morphine rule is that an aromatic ring be attached to a quaternary carbon in order for the molecule to be biologically active. The quaternary carbon of any morphine-like substance must be: I.\ta stereocenter - II.\tsp - hybridized III.\tsp - hybridized",
        options: [
          "I only",
          "II only",
          "I and II only",
          "I and III only",
          "quaternary carbon is bonded to four alkyl groups. Any carbon that forms four bonds adopts the tetrahedral configuration and must be sp hybridized. sp hybridization occurs when one s orbital and three p orbitals mix to form four equivalent hybrid orbitals capable of forming four bonds."
        ],
        correctAnswer: "II only",
        explanation: "Choices A and C are incorrect because a quaternary carbon (bonded to 4 alkyl groups) need not be a chiral center if two of these alkyl groups are identical. This is shown below: Choice D is incorrect because an sp hybridized carbon adopts a planar configuration and can only bind to three substituents (not the four required of a quaternary carbon).",
        explanationImage: "images/q64/q1-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Morphine-alkaloids-derived-from-q2",
        type: "passage",
        passageId: "passage-Morphine-alkaloids-derived-from",
        question: "How many chiral carbons are there in morphine?",
        options: [
          "4",
          "5",
          "6",
          "7"
        ],
        correctAnswer: "5",
        explanation: "Any carbon bonded to four different substituents will be chiral. Morphine has five such carbons as shown in image Note that the nitrogen atom is also a chiral center. If nitrogens lone pair of electrons is considered a fourth substituent bonded to nitrogen, it can be seen that nitrogen can also act as a chiral center. Some amines can invert configuration (and thus are not chiral). The tertiary amine of morphine cannot invert \" it is locked into its configuration by the ring structure. However, the question asks for the number of chiral carbons, not the number of chiral centers.",
        explanationImage: "images/q64/q2-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Morphine-alkaloids-derived-from-q3",
        type: "passage",
        passageId: "passage-Morphine-alkaloids-derived-from",
        question: "Which of the following compounds would be most likely to have morphine-like biological effects?",
        image: "images/q64/q3.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option D",
        explanation: "The passage states that there are certain requirements, the morphine rules, that give a compound morphine-like biological activity. These requirements are an aromatic ring attached to a quaternary carbon and a tertiary amine situated two carbons away from that quaternary carbon. A quaternary carbon is a carbon bonded to four alkyl groups. A tertiary amine is bonded to three alkyl groups. The only structure that meets these requirements is structure D. The other answer choices look like the structures in the passage but do not meet all of the morphine rules. Note that if the written description of the morphine rules is not clear enough, you can look at the figures in the passage as well. Choice A is incorrect because the aromatic ring is not attached to a quaternary carbon. It is attached to two secondary carbons. Choice B is incorrect because it lacks a tertiary amine. It has a secondary amine bonded to only 2 alkyl groups. Choice C is incorrect because the tertiary amine is not located two carbons away from the quaternary carbon. It is only one carbon away from the quaternary carbon.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Morphine-alkaloids-derived-from-q4",
        type: "passage",
        passageId: "passage-Morphine-alkaloids-derived-from",
        question: "Morphine can be reacted with 2 equivalents of ethanoyl chloride (acetyl chloride) to form heroin. In this reaction, the hydroxy groups of morphine function as:",
        options: [
          "nucleophiles.",
          "electrophiles.",
          "leaving groups.",
          "Lewis acids."
        ],
        correctAnswer: "nucleophiles.",
        explanation: "This reaction proceeds through nucleophilic attack by the hydroxy oxygen (of morphine) on the electrophilic carbonyl carbon of ethanoyl chloride. A nucleophile is an electron rich (Lewis Base) species that can attack an electrophile (electron poor species). Thus, the hydroxy groups on morphine act as nucleophiles. Choice B is incorrect because the carbonyl carbon is the electrophile in this reaction. The carbonyl group is polarized. Electrons are drawn towards the electronegative oxygen leaving the carbon with a slightly positive charge. Thus, the carbon is electron deficient and wants electrons. It is an electrophile. Choice C is incorrect because chloride acts as the leaving group in this reaction. Choice D is incorrect because Lewis acids are electron pair acceptors. The hydroxy group acts as an electron pair donor, a Lewis base.",
        explanationImage: "images/q64/q4-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Morphine-alkaloids-derived-from-q5",
        type: "passage",
        passageId: "passage-Morphine-alkaloids-derived-from",
        question: "Hofmann elimination involves methylation of the amine nitrogen followed by elimination (E2). Which of the following represents a possible product of one sequence of Hofmann elimination on Meperidine (demerol)?",
        image: "images/q64/q5.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option B",
        explanation: "Hofmann elimination proceeds through exhaustive methylation of the amine to the quaternary ammonium compound followed by elimination. Choice B shows a structure that has the double bond and the tertiary amine produced by Hofmann elimination. Note that the alkene bond could have formed on the other side of the nitrogen by an equally likely elimination giving the product shown below: Choice A is incorrect because the structure indicated is the intermediate of the Hofmann elimination. Choice A shows the structure following methylation but prior to elimination. Choice C is incorrect because the amine is not fully methylated (to the tertiary amine). Note the similarity between choice C and the valid elimination product shown above. Choice D is incorrect because it does not show the cleavage of the N-C bond that occurs in a Hofmann elimination (as described in the question stem).",
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-The-hydrogens-of-alkanes",
    text: "The hydrogens of alkanes have pKₐ values that are over 30 or 40. In contrast, the α-hydrogens of aldehydes and ketones have pKₐ values that range from 19 to 21. These fairly acidic α-hydrogens can be removed by strong bases to form anions called enolates. The enolate ions are strongly stabilized by resonance. Protonation of the enolate at oxygen produces an enol. Interconversion between the keto and enol forms is called tautomerization and is illustrated in Figure 1. The keto form is usually highly favored. Keto-enol tautomerization has some interesting consequences. For example, if a ketone is treated with acid or base in a solvent of D₂O (heavy water), all of the α-hydrogens will be exchanged for deuterium. This reaction is shown in Figure 2. Another consequence of keto-enol tautomerization is the racemization of chiral α-carbons. In the enol form, the α-carbon adopts a planar configuration and is no longer chiral. Tautomerization back to the ketone produces a racemic mixture of products. This is shown in Figure 3. Figure 3 - A scientist attempts to follow the progress of the α-deuteration shown in Figure 2 using proton NMR.",
    image: "images/q65/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-The-hydrogens-of-alkanes-q1",
        type: "passage",
        passageId: "passage-The-hydrogens-of-alkanes",
        question: "Which of the following would be the best indicator that the reaction has proceeded to completion?",
        options: [
          "Singlet at 9.8 ppm",
          "Quadruplet between 1.0 and 2.0 ppm",
          "Doublet between 3.0 and 4.0",
          "No signal"
        ],
        correctAnswer: "No signal",
        explanation: "Proton NMR is used to identify the number and environments of 1H nuclei. Therefore, deuterium, 2H, will not appear on the NMR and as the alpha hydrogens are replaced with deuterium, the signals will disappear. Choice A is incorrect because a peak at 9.8 ppm, which, by the way, is rarely a singlet, indicates an aldehyde proton. No aldehydes are present here. Choice B is incorrect because a quadruplet in the alkane range (1.0-2.0) indicates hydrogens with 3 neighboring hydrogens, leading to splitting. Choice C is incorrect because a peak between 3.0-4.0 may indicate an alcohol. A doublet indicates splitting by a single neighboring hydrogen.",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-hydrogens-of-alkanes-q2",
        type: "passage",
        passageId: "passage-The-hydrogens-of-alkanes",
        question: "The IUPAC name for the reactant in Figure 3 is:",
        options: [
          "(R)-3-methyl-2-pentanone",
          "(R)-3-ethyl-2-butanone",
          "(R)-3-ethyl-3-methyl-propanal",
          "(R)-2,2-diethyl-propanone"
        ],
        correctAnswer: "(R)-3-methyl-2-pentanone",
        explanation: "The structure can be drawn as shown below: The longest chain has 5 carbons and this compound will be named with the pent- prefix. This is enough to select Choice A. Numbering proceeds to give the lowest numbered ketone (the highest priority group in this compound). Choice B is incorrect because it does not number the longest chain correctly, naming the molecule as an ethyl substituted butanone. Choice C is incorrect because it too does not number the longest chain correctly. Choice D describes an impossible molecule.",
        explanationImage: "images/q65/q2-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-hydrogens-of-alkanes-q3",
        type: "passage",
        passageId: "passage-The-hydrogens-of-alkanes",
        question: "Which of the following ketones will have the most acidic ־±-hydrogen:",
        image: "images/q65/q3.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option B",
        explanation: "Alpha hydrogens are relatively acidic because of resonance stabilization as shown below. The acidity of the alpha hydrogens will be increased by proximity to electron withdrawing groups. The chloride groups in choice B are electron withdrawing and will help stabilize the negative charge. Choice A is incorrect because dimethylketone has no additional electron withdrawing groups. Choice C is incorrect because an amine is an electron donating group and would tend to decrease the acidity of the alpha hydrogen. Choice D is incorrect because there is no alpha hydrogen to be removed.",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-hydrogens-of-alkanes-q4",
        type: "passage",
        passageId: "passage-The-hydrogens-of-alkanes",
        question: "The two products formed by the racemization reaction in Figure 3 could best be described as:",
        image: "images/q65/q4.png",
        options: [
          "enantiomers",
          "diastereomers",
          "conjugate acid and base",
          "same compound"
        ],
        correctAnswer: "enantiomers",
        explanation: "The passage states that a racemic mixture is produced, indicating the presence of enantiomers in equal concentrations. Figure 3 shows the structure of the two compounds. The compounds differ in configuration at their only chiral center, indicating that they are enantiomers. Choice B is incorrect because diastereomers are not mirror images. Diastereomers may have optical rotations of different magnitudes. Thus, a solution with equal concentrations of two diastereomers may still rotate plane polarized light. In contrast, a racemic mixture does not rotate plane polarized light. Choice C is incorrect because the compounds are not conjugate acids and bases. Choice D is incorrect because meso compounds are compounds that have chiral centers but lack optical activity due to an internal plane of symmetry.",
        topic: "organicChemistry"
      },
      {
        id: "passage-The-hydrogens-of-alkanes-q5",
        type: "passage",
        passageId: "passage-The-hydrogens-of-alkanes",
        question: "The aldol condensation proceeds through formation of an enolate anion. This is followed by nucleophilic attack by the enolate ion on the carbonyl carbon of the original aldehyde. Which of the following reactants would lead to the product indicated below?",
        image: "images/q65/q5.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option C",
        explanation: "The reaction proceeds through the following steps: Choices A, B, and D are incorrect because they would not lead to the indicated aldol condensation product.",
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-Sugars-are-carbohydrates-that",
    text: "Sugars are carbohydrates, that is, molecules usually with the empirical formula C(H₂O), and structural formulas made up of polyhydroxy aldehydes or ketones. Because of their polyfunctional nature, sugars can undergo a wide variety of transformations upon treatment with acids, bases, or heat, and upon reaction with other simple reagents and enzymes. While many sugars occur in nature and are thus readily available, the synthesis and modification of simple sugars is a necessary step in studies of enzymatic processes. Higher sugars can be synthesized from the simple carbohydrate D-glyceraldehyde with the following procedure: D-glyceraldehyde (Compound A) is reacted with HCN to produce a cyanohydrin (Compound B). Compound B is then treated with hydrogen gas and a modified palladium catalyst (similar to the Lindlar reagent) to give Compound C. Compound C is hydrolyzed to give the higher sugars in Mixture D. This reaction is summarized in Figure 1. Mixture D contains two compounds, which can be separated by crystallization. Two doublets near 9.5 δ (ppm) are observed in the ¹H NMR spectrum of Mixture D, with each doublet corresponding to one of the two products present in the mixture. IR spectroscopy shows broad absorptions for both products around 3300 cm⁻¹. The hydroxyl groups of carbohydrates can also participate in reactions. For example, D-glyceraldehyde can react with chloromethane under basic conditions to yield a completely methylated product. This SN2 reaction is shown in Figure 2.",
    image: "images/q71/1.png",
    topic: "organicChemistry",
    questions: [
      {
        id: "passage-Sugars-are-carbohydrates-that-q1",
        type: "passage",
        passageId: "passage-Sugars-are-carbohydrates-that",
        question: "The reaction shown in Figure 2 most likely proceeds via the formation of a(n):",
        options: [
          "water leaving group.",
          "nucleophilic alkoxide ion.",
          "carbocation intermediate.",
          "tetrahedral intermediate."
        ],
        correctAnswer: "nucleophilic alkoxide ion.",
        explanation: "The passage states that an SN2 reaction occurs. This requires a good nucleophile. Alkoxides (RO⁻) are strong bases and thus good nucleophiles. Sodium hydroxide (NaOH) is used in this reaction to remove the hydrogen from the hydroxyl group to form the alkoxide. Choice A is incorrect because a hydroxyl group would be converted to water, a good leaving group, under acidic conditions. The reaction in Figure 2 occurs under basic conditions. Choice C is incorrect because carbocation intermediates occur in SN1 and E1 reactions, but not in SN2. Choice D is incorrect because tetrahedral intermediates are formed during addition reactions to a carbon/oxygen double bond. The reaction in Figure 2 does not involve attack on the carbonyl group.",
        explanationImage: "images/q71/q1-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Sugars-are-carbohydrates-that-q2",
        type: "passage",
        passageId: "passage-Sugars-are-carbohydrates-that",
        question: "The modified palladium catalyst is used instead of platinum to:",
        options: [
          "avoid reduction of the cyanohydrin to the amine.",
          "make the reaction energetically favorable.",
          "act as a Lewis acid.",
          "reduce the likelihood of attack at the carbonyl carbon."
        ],
        correctAnswer: "avoid reduction of the cyanohydrin to the amine.",
        explanation: "The cyanohydrin (Compound B) is reduced to an imine (Compound C). If platinum were used, reduction would proceed all the way to the amine. This must be avoided in order to produce the carbonyl group on the extended sugar. Choice B is incorrect because a catalyst does not alter the thermodynamic favorability of a reaction; it only increases the rate by lowering activation energy. Choice C is incorrect because a Lewis acid is an electron pair acceptor. The palladium catalyst acts as an activator of hydrogen. Choice D is incorrect because Compound B does not have a carbonyl group.",
        explanationImage: "images/q71/q2-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Sugars-are-carbohydrates-that-q3",
        type: "passage",
        passageId: "passage-Sugars-are-carbohydrates-that",
        question: "The two sugars in Mixture D are:",
        options: [
          "enantiomers.",
          "anomers.",
          "epimers.",
          "disaccharides."
        ],
        correctAnswer: "epimers.",
        explanation: "Epimers are sugars that differ in configuration about a single stereocenter. A new chiral center is formed in the first step of the sugar extension (cyanohydrin formation), leading to the formation of two different sugars in Mixture D. Choice A is incorrect because enantiomers are mirror images that differ at every stereocenter. Choice B is incorrect because anomers differ at a new chiral center formed when adopting a ring structure — not relevant here. Choice D is incorrect because disaccharides are formed from the condensation of two monosaccharides, which is not what’s occurring here.",
        explanationImage: "images/q71/q3-ans.png",
        topic: "organicChemistry"
      },
      {
        id: "passage-Sugars-are-carbohydrates-that-q4",
        type: "passage",
        passageId: "passage-Sugars-are-carbohydrates-that",
        question: "What are the missing compounds, respectively, in the following reaction?",
        image: "images/q71/q4.png",
        options: [
          "Option A",
          "Option B",
          "Option C",
          "Option D"
        ],
        correctAnswer: "Option D",
        explanation: "This reaction is called the Wolff–Kishner Reduction, which reduces a carbonyl group to the corresponding alkane. •\tStep 1: Reaction with hydrazine forms a hydrazone •\tStep 2: Basic solution leads to loss of N₂ gas and formation of the hydrocarbon Choice A is incorrect because the indicated structures do not form. Choice B is incorrect because ethers do not form alkoxides under basic conditions. Choice C is incorrect because hydrazine reacts with a carbonyl to form a hydrazone, not an addition product.",
        topic: "organicChemistry"
      },
      {
        id: "passage-Sugars-are-carbohydrates-that-q5",
        type: "passage",
        passageId: "passage-Sugars-are-carbohydrates-that",
        question: "In glucose, the carbonyl carbon can be attacked, intramolecularly, by the hydroxyl oxygen of carbon-5 to form:",
        options: [
          "glucofuranose.",
          "a hemiacetal.",
          "a lactone.",
          "a glycoside.",
          "hemiacetal is formed by reaction of a carbonyl and hydroxyl group within the same molecule. In glucose, this occurs intramolecularly, forming the ring structure."
        ],
        correctAnswer: "a hemiacetal.",
        explanation: "Choice A is incorrect because glucofuranose refers to a 5-membered ring, which would form from carbon-4, not carbon-5. Choice C is incorrect because a lactone is a cyclic ester — no ester is formed here. Choice D is incorrect because a glycoside is a sugar acetal formed when a sugar reacts with another alcohol, usually under acidic conditions.",
        explanationImage: "images/q71/q5-ans.png", // "images/q71/q5-1-ans.png"
        topic: "organicChemistry"
      }
    ]
  },
  {
    id: "passage-Several-models-have-been",
    text: "Several models have been developed for relating changes in dissociation constants to changes in the tertiary and quaternary structures of oligomeric proteins. One model suggests that the protein's subunits can exist in either of two distinct conformations, R and T. At equilibrium, there are few R conformation molecules: 10 000 T to 1 R and it is an important feature of the enzyme that this ratio does not change. The substrate is assumed to bind more tightly to the R form than to the T form, which means that binding of the substrate favors the transition from the T conformation to R. The conformational transitions of the individual subunits are assumed to be tightly linked, so that if one subunit flips from T to R the others must do the same. The binding of the first molecule of substrate thus promotes the binding of the second and if substrate is added continuously, all of the enzyme will be in the R form and act on the substrate. Because the concerted transition of all of the subunits from T to R or back, preserves the overall symmetry of the protein, this model is called the symmetry model. The model further predicts that allosteric activating enzymes make the R conformation even more reactive with the substrate while allosteric inhibitors react with the T conformation so that most of the enzyme is held back in the T shape. Experiment Evaluating Non-Symmetry Model Enzymes Experiments were performed with enzyme conformers that did not obey the symmetry model. The data is summarized in Figure 1.  Figure 1: Equilibrium distribution of two conformers at different temperatures given the free energy of their interconversion. (modified from Mr.Holmium).",
    image: "images/q149/1.png",
    topic: "biochemistry",
    questions: [
      {
        id: "passage-Several-models-have-been-q1",
        type: "passage",
        passageId: "passage-Several-models-have-been",
        question: "What assumption is made about the T and R conformations and the substrate?",
        options: [
          "In the absence of any substrate, the T conformation predominates.",
          "In the absence of any substrate, the R conformation predominates.",
          "In the absence of any substrate, the T and R conformations are in equilibrium.",
          "In the absence of any substrate, the enzyme exists in another conformation, S."
        ],
        correctAnswer: "In the absence of any substrate, the T conformation predominates.",
        explanation: "Paragraph 1. Information concerning the relative amounts of T and R conformations present before substrate is added is given in the passage.",
        topic: "biochemistry"
      },
      {
        id: "passage-Several-models-have-been-q2",
        type: "passage",
        passageId: "passage-Several-models-have-been",
        question: "The substrate binds more tightly to R because:",
        options: [
          "T has a higher affinity for the substrate than R.",
          "R has a higher affinity for the substrate than T.",
          "there are 10 000 times more T conformation molecules than R conformation molecules.",
          "the value of the equilibrium constant does not change."
        ],
        correctAnswer: "R has a higher affinity for the substrate than T.",
        explanation: "If a molecule has a high affinity for something, it is likely to be associated with it maximally. The substrate binds more tightly to the R conformation even though the R conformation is present in small amounts because R has a higher affinity for the substrate than T.",
        topic: "biochemistry"
      },
      {
        id: "passage-Several-models-have-been-q3",
        type: "passage",
        passageId: "passage-Several-models-have-been",
        question: "The symmetry model describes a form of cooperative binding. Most enzymes do not engage in cooperative binding. The predicted shape of a graph representing reaction rate versus the addition of substrate to most enzymes would be expected to be:",
        options: [
          "a hyperbola.",
          "a straight line with a positive slope.",
          "a straight line with a negative slope.",
          "sigmoidal."
        ],
        correctAnswer: "a hyperbola.",
        explanation: "The amount of substrate-enzyme complex would increase steadily as more substrate is added until a point at which all enzymes are involved in a substrate- enzyme complex, and any more substrate added will have no effect (saturation kinetics). The graph would show a steadily slowing curve of positive slope which reaches a point at which it levels off into a horizontal line. This curve is called a hyperbola (see image below). A sigmoidal shape would be expected in cooperative binding (i.e. the symmetry model as described in the passage or hemoglobin). Note: This was a classic question in the old MCAT and, not surprisingly, the same concept comes up in the AAMC's new MCAT practice materials: the difference between the simple (rectangular) hyperbola and the sigmoidal curve suggesting cooperative binding (and also, the ability to recognize the shapes of these 2 curves independently). Also note that the myoglobin saturation curve is a hyperbola, but hemoglobin has a sigmoid shape due to the cooperative binding of oxygen molecules. And finally, note the positions of Vmax (= maximum velocity/reaction rate) and Km (substrate concentration at 1/2 Vmax) displaying Michaelis-Menten kinetics associated with the hyperbolic curve on the left, as opposed to the sigmoidal curve on the right (image from the GS BIO book or ebook, BCM 2.9):",
        explanationImage: "images/q149/q3-ans.png",
        topic: "biochemistry"
      },
      {
        id: "passage-Several-models-have-been-q4",
        type: "passage",
        passageId: "passage-Several-models-have-been",
        question: "The symmetry model would NOT account for an enzyme:",
        options: [
          "with many different biologically active conformations.",
          "which engages in positive cooperativity.",
          "with a complex metal cofactor.",
          "which is a catalyst for anabolic reactions."
        ],
        correctAnswer: "with many different biologically active conformations.",
        explanation: "The symmetry model describes an instance of something which may be described as positive cooperativity (paragraph 2). The model does not exclude the enzyme from having cofactors, and places no restriction on what the enzyme's function will be. However, the symmetry model does not account for the existence of any other conformations than the two described (paragraph 2).",
        topic: "biochemistry"
      },
      {
        id: "passage-Several-models-have-been-q5",
        type: "passage",
        passageId: "passage-Several-models-have-been",
        question: "Allosteric enzymes differ from other enzymes in that they:",
        options: [
          "are not denatured at high temperatures.",
          "are regulated by compounds which are not their substrates and which do not bind to their active sites.",
          "they operate at an optimum pH of about 2.0.",
          "they are not specific to just one substrate."
        ],
        correctAnswer: "are regulated by compounds which are not their substrates and which do not bind to their active sites.",
        explanation: "You must be familiar with how enzyme function is regulated to answer this question. An allosteric enzyme has a site other than the one for the substrate at which a molecule (not the substrate) that directs the function of the enzyme can bind. The above illustrates the allosteric regulation of an enzyme with a positive effector (on the left) and a negative effector (on the right).",
        explanationImage: "images/q149/q5-ans.png",
        topic: "biochemistry"
      }
    ]
  },
  {
    id: "passage-The-periodic-beating-of",
    text: "The periodic beating of the heart is controlled by electrical impulses that originate within the cardiac muscle itself. These pulses travel to the sinoatrial node and from there to the atria and the ventricles, causing the cardiac muscles to contract. If a current of a few hundred milliamperes passes through the heart, it will interfere with this natural system, and may cause the heart to beat erratically. This condition is known as ventricular fibrillation, and is life-threatening. If, however, a larger current of about 5 to 6 amps is passed through the heart, a sustained ventricular contraction will occur. The cardiac muscle cannot relax, and the heart stops beating. If at this point the muscle is allowed to relax, a regular heartbeat will usually resume. The large current required to stop the heart is supplied by a device known as a defibrillator. A schematic diagram of a defibrillator is shown below. This device is essentially a heavy-duty capacitor capable of storing large amounts of energy. To charge the capacitor quickly (in 1 to 3 seconds), a large DC voltage must be applied to the plates of the capacitor. This is achieved using a step-up transformer, which creates an output voltage that is much larger than the input voltage. The transformer used in this defibrillator has a step-up ratio of 1:50. The AC voltage that is obtained from the transformer must then be converted to DC voltage in order to charge the capacitor. This is accomplished using a diode, which allows current flow in one direction only. Once the capacitor is fully charged, the charge remains stored until the switch is moved to position B and the plates are placed on the patients chest. To cut down the resistance between the patients body and the defibrillator, the electrodes are covered with a wetting gel before use. Care must be taken to insure that the patient is not in electrical contact with the ground while the defibrillator is in use.",
    image: "images/q167/1.png",
    topic: "physics",
    questions: [
      {
        id: "passage-The-periodic-beating-of-q1",
        type: "passage",
        passageId: "passage-The-periodic-beating-of",
        question: "If the defibrillator has a capacitance of 10 ־¼F, how much charge will build up on the two plates?",
        options: [
          "0.08 coulombs",
          "0.8 coulombs"
        ],
        correctAnswer: "0.08 coulombs",
        explanation: "The correct answer choice here is 0.08 coulombs. To do this question, you must remember the equation Q = CV, where Q is the charge stored, C is the capacitance, and V is the voltage across the plates. We are given that the capacitance is 10 micro farads, but we do not have a value for the voltage V, since the input voltage to the transformer is stepped-up 50 times. From the diagram we can see that the input voltage is 160 volts. So the output voltage is 160 times 50, or 8,000 volts. Substituting the voltage and the capacitance into our equation, gives a value for the charge of 8,000 times 10 ֳ— 10, or 0.08 coulombs, choice A.ˆ’6",
        topic: "physics"
      },
      {
        id: "passage-The-periodic-beating-of-q2",
        type: "passage",
        passageId: "passage-The-periodic-beating-of",
        question: "The resistance between the two electrodes when placed apart on the patients chest is 1,000 „¦ when wetting gel is used. What is the initial current through the patients heart, assuming that all the current takes this path?",
        options: [
          "0.16 A",
          "4 A",
          "6.25 A",
          "8 A"
        ],
        correctAnswer: "8 A",
        explanation: "This question asks you to calculate the initial current through the patient, and this can be done by using Ohms law which states that the current is equal to the voltage divided by the resistance. We know that the resistance across the two electrodes is 1000 ohms when a wetting gel is applied, but as in the previous question we do not have a value for the initial voltage. This be calculated as well. We know that the transformer increases the input voltage by a factor of 50, and since the input voltage is 160 volts, the output voltage will be 8000 volts. This voltage charges the capacitor only, so the voltage across the capacitor when fully charged will be 8000 volts. By substituting the values for the resistance and the voltage into Ohms law, we find that the initial current flowing through the patient is 8000 divided by 1000, or 8 amps which is choice D.",
        topic: "physics"
      },
      {
        id: "passage-The-periodic-beating-of-q3",
        type: "passage",
        passageId: "passage-The-periodic-beating-of",
        question: "The plates of the capacitor are originally separated by a vacuum. If a dielectric K > 1 is introduced between the plates of the capacitor, and the capacitor is allowed to charge up, which of the following statements is/are true? I)\tThe capacitance of the capacitor will increase. II)\tThe voltage across the capacitor plates will increase. III)\tThe charge stored on the capacitor will increase.",
        options: [
          "I only",
          "I and II only",
          "II and III only",
          "I and III only"
        ],
        correctAnswer: "I and III only",
        explanation: "The capacitance of a parallel-plate capacitor is given by where K is the dielectric constant, ֿµ is the permittivity of free space, A is the area of overlap of the two the plates, and d is the separation of the two plates. This implies that when a material with a dielectric constant K is introduced between the plates of a capacitor, the capacitance increases by a numerical factor K. In the question we are told that a dielectric with a value of K > 1 is introduced between the plates which means that the capacitance will increase. So statement I is correct and choice C can be ruled out. It is important to note at this point that the voltage across the plates does not increase with the introduction of a dielectric. This is because the voltage across the plates of a fully charged capacitor is equal to the voltage applied across the plates when it was initially charged. Since this is held constant at 8,000 volts, the voltage across the plates will remain at 8,000 volts. So statement II is false and choice B can be eliminated. To choose between choices A and D, look at how the charge on the plates of a capacitor is affected by the introduction of a dielectric. The capacitance of a capacitor is related to the voltage across the plates and the charge stored by the equation C = Q/V, where C is the capacitance, Q is the charge stored, and V is the voltage. As mentioned previously, the voltage across the capacitor remains constant when the dielectric is introduced. This implies that the capacitance of the capacitor is directly proportional to the charge stored. Since this is the case, as the capacitance increases, the charge stored on the plates must also increase. So statement III is true and choice D is the correct answer.",
        topic: "physics"
      },
      {
        id: "passage-The-periodic-beating-of-q4",
        type: "passage",
        passageId: "passage-The-periodic-beating-of",
        question: "Why is it important to insure that the patient is not in electrical contact with the ground while the defibrillator is in use?",
        options: [
          "Contact with the ground will decrease the resistance across the patients body.",
          "The doctor administering the treatment will be in greater danger of receiving an electric shock if the patient is in electrical contact with the ground.",
          "Contact with the ground will cause a smaller current to pass through the patients heart.",
          "The patient receiving the treatment will be in greater danger of receiving burns due to the high current density if he is in electrical contact with the ground."
        ],
        correctAnswer: "Contact with the ground will cause a smaller current to pass through the patients heart.",
        explanation: "When there is no ground connection, all the current is forced through the patients heart, despite the relatively large resistance of the patients body. However, if the patient is in contact with the ground, this provides a path of far less resistance than the patients body, resulting in most of the current flowing through the ground, rather than through the patient. This will render the defibrillator ineffective. Choice A is incorrect because the resistance across the patients body cannot change. Choice B is incorrect. If the defibrillator is not in contact with the patient when the doctor receives a shock, then the shock hazard has nothing to do with the patient being grounded or not. If, however, the electrodes are in contact with the patient when the doctor receives a shock, the ground will take most of the current, and thereby reduce the shock that the doctor experiences. So the doctor administering the treatment will be in less danger of receiving a shock when the patient is in contact with the ground. Choice D is incorrect since the burns received by the patient are due to the application of large currents over a small area of skin, and have nothing to do with the presence of a ground. Therefore, in order to reduce the burns that the patient receives, the area of the electrodes is increased to distribute the current and reduce the current density. The correct answer is choice C, contact with the ground will cause a smaller current to pass through the patients heart.",
        topic: "physics"
      },
      {
        id: "passage-The-periodic-beating-of-q5",
        type: "passage",
        passageId: "passage-The-periodic-beating-of",
        question: "If a dielectric was inserted between the plates of the capacitor in the defibrillator when the switch is in position A:",
        options: [
          "the energy stored in the capacitor would increase.",
          "the energy stored in the capacitor would decrease.",
          "the electric field between the plates would increase.",
          "the electric field between the plates would decrease."
        ],
        correctAnswer: "the energy stored in the capacitor would increase.",
        explanation: "Since the capacitor is, in effect, connected to a constant voltage source, the potential difference doesnt change when a dielectric is inserted between the plates. Therefore, the charge on the plates must increase to compensate for the effect of the polarization of charge in the dielectric. The polarization of charge in the dielectric sets up an electric field opposite in direction and weaker in magnitude than the electric field due to the charge on the capacitor plates. This would decrease the net electric field between the plates if the capacitor were not connected to a constant voltage source. However, since it is connected to a constant voltage source when the dielectric is inserted, additional charge builds up on the plates to keep the potential difference constant. Therefore, the net electric field between the plates with the dielectric in place is equal to the net electric field between the plates with no dielectric and choices C and D are wrong. Since the charge on the plates increases, the energy stored will increase because the energy stored is given by (1/2)QVk, where Q is the charge on the plates and V is the potential difference between the plates. Therefore, choice A is correct.",
        topic: "physics"
      }
    ]
  },
  {
    id: "passage-Many-nutrients-required-by",
    text: "Many nutrients required by plants exist in soil as basic cations: Mg²⁺, Mn²⁺, and Ca²⁺. A soil’s cation-exchange capacity is a measure of its ability to adsorb these 2⁺ basic cations as well as exchangeable hydrogen (H⁺) and aluminum (Al³⁺) ions. The cation-exchange capacity of soil is derived from two sources: small clay particles called micelles consisting of alternating layers of alumina and silica crystals, and organic colloids. Replacement of Al³⁺ and Si⁴⁺ by other cations of lower valence creates a net negative charge within the inner layers of the micelles. This is called the soil’s permanent charge. For example, replacement of an atom of aluminum by calcium within a section where the net charge was previously zero, as shown below, produces a net charge of −1, to which other cations can become adsorbed. Figure 1 – A pH-dependent charge develops when hydrogen dissociates from hydroxyl moieties on the outer surfaces of the clay micelles. This leaves negatively-charged oxygen atoms to which basic cations may adsorb. Likewise, a large pH-dependent charge develops when hydrogen dissociates from carboxylic acids and phenols in organic matter. In most clays, permanent charges brought about by substitution account for anywhere from half to nearly all of the total cation-exchange capacity. Soils very high in organic matter contain primarily pH-dependent charges. In a research study, three samples of soil were leached with a 1 N solution of neutral KCl, and the displaced Al³⁺ and basic cations were measured. The sample was then leached again with a buffered solution of BaCl₂ and triethanolamine at pH 8.2, and the displaced H⁺ measured. Table 1 gives results for three soils tested by this method. Due to the buffering effect of the soil’s cation exchange capacity, just measuring the soil solution’s pH will not indicate how much base is needed to change the soil pH. In another experiment, measured amounts of acid and base were added to 10-gram samples of well-mixed soil that had been collected from various locations in a field. The volumes of the samples were equalized by adding water. The results were recorded in Figure 2.",
    image: "images/q168/1.png",
    topic: "generalChemistry",
    questions: [
      {
        id: "passage-Many-nutrients-required-by-q1",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "Which column(s) in Table 1 represent(s) the permanent charge of the soil micelles?",
        options: [
          "Al³⁺",
          "H⁺",
          "Al³⁺ and Basic Cations",
          "Al³⁺ and H⁺"
        ],
        correctAnswer: "Al³⁺ and Basic Cations",
        explanation: "The permanent charge would be represented by the ions that are removed at a neutral pH. The passage tells us that the permanent charge is the net negative charge held in the inner layer of the micelles that is generated when lower valence cations displace other cations like Al³⁺ and Si⁴⁺. This part of the soil’s charge is not dependent on the pH and will be displaced by the low valence ion K⁺ in the KCl solution. Therefore, since Al³⁺ and the basic cations were displaced by the KCl solution, together they represent the permanent charge.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q2",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "What percentage of the cation exchange capacity of Sample I is base-saturated?",
        options: [
          "4%",
          "6%",
          "29%",
          "40%"
        ],
        correctAnswer: "4%",
        explanation: "The percentage base saturation consists of the number of milliequivalents of basic ions divided by the entire cation exchange capacity of the soil. For Sample I, that is the third column in Table 1 divided by the fifth, or 1.9 divided by 47.6. If you multiply 1.9/47.6 by 2/2, you can estimate this ratio to be approximately 4/96, which is about 4%, choice A.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q3",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "Which soil from Table 1 most likely has the highest percentage of organic matter?",
        options: [
          "Sample I",
          "Sample II",
          "Sample III",
          "Cannot be determined"
        ],
        correctAnswer: "Sample I",
        explanation: "According to the passage, soils that are high in organic matter contain primarily pH-dependent charges. These are formed when hydrogen dissociates from the hydroxyl moieties of organic acids or alcohols. The pH-dependent charge is represented in the table by the column for H+, which was removed by leaching with a basic solution. When looking at the table, we see that sample I has far more than half its ion exchange capacity accounted for by pH-dependent charges. Samples II and III have roughly half of their total ion exchange capacity accounted for by pH-dependent charges. Therefore, sample I probably has the highest percentage of organic matter in it, choice A.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q4",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "What would be the effect of leaching the three soil samples in Table 1 with a buffered BaCl2 solution at pH 9.5 instead of 8.3?",
        options: [
          "The measured permanent charge would be greater.",
          "The measured pH-dependent charge would be greater.",
          "The measured permanent charge would be smaller.",
          "The measured pH-dependent charge would be smaller."
        ],
        correctAnswer: "The measured pH-dependent charge would be greater.",
        explanation: "You are told in the passage that the pH-dependent charge of soil is created when hydrogen dissociates from hydroxyl moieties found in organic matter and on the surface of the soil micelles. Remember that hydrogen does not normally dissociate from a hydroxyl or carboxyl group under acidic or neutral conditions. Under alkaline conditions, the hydrogen from a hydroxyl or carboxyl group may be pulled away from the oxygen by hydroxide ions in the solution. Thus, the more basic the leaching solution, the more hydrogen is likely to be released. This will result in a larger reading for the pH-dependent charge.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q5",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "The amount of soil on a particular one-acre field down to a depth of one furrow slice weighs 9 × 10³ kilograms. Based on Figure 2, how many kilograms of CaCO₃ would have to be added to this field to raise the pH from 5 to 6?",
        options: [
          "900 kg",
          "1800 kg",
          "9 × 10³ kg",
          "1.8 × 10⁴ kg"
        ],
        correctAnswer: "900 kg",
        explanation: "Beginning at pH 5, the graph tells you how much of a change in pH is produced by adding a given number of milliequivalents of acid or base to 10 grams of soil. You can see by examining the graph that 0.2 milliequivalents of base would raise the pH of the sample from 5 to 6. Since one equivalent equals a thousand milliequivalents, and one kilogram equals a thousand grams, you can convert this ratio from 0.2 milliequivalents per 10 grams, to 0.2 equivalents per 10 kilograms, or 0.02 equivalents per one kilogram. Since one mole of carbonate can take up two moles of hydrogen ions, a mole of calcium carbonate acts as two equivalents of base. Remember that as the concentration of hydrogen ions goes down, the pH of the solution goes up. The molecular weight of calcium carbonate is 100, so 100 grams of calcium carbonate will provide 2 equivalents of base. We have determined that you need 0.02 equivalents of calcium per kg of soil. Since 2 equivalents are provided by 100 grams of calcium carbonate, 0.02 equivalents are provided by 1 gram. So you need 1 gram of calcium carbonate for each kilogram of soil in the acre furrow slice. This comes to 9 105 grams of calcium carbonate, or 900 kilograms, choice A.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q6",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "Which of the following would probably NOT displace A1 in soil micelles? 3+",
        options: [
          "A1 3+",
          "H +",
          "A1 and Basic Cations 3+",
          "A1 and H 3+ +"
        ],
        correctAnswer: "A1 and Basic Cations 3+",
        explanation: "The passage tells you that in soil micelles, cations like A1 and Si are replaced by cations with lower valences. That is what gives the micelles their negative 4+ charge. When an A1 cation is displaced by a cation with a +2 charge, the micelle gains a ˆ’1 charge. So the leaching of these actions as depicted in Table 1 gives an indication of the permanent charge as we saw in the earlier questions. Knowing this, it is easy to see that Si , with a valence of +4, is the cation that could not 4+ displace the A1 , since Na , Mg , and Cr all have lower valences than the aluminums +3 and would give a net negative charge to the micelle. 3+ + 2+ 2+",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q7",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "Anaerobic organisms are able to denitrify wet soils by the following metabolic pathway: If all the oxygen in the nitric acid is converted to water, how many additional equivalents of acid will be consumed during the production of 5 moles of nitrogen (N₂)?",
        image: "images/q168/q7.png",
        options: [
          "20",
          "30",
          "40",
          "50"
        ],
        correctAnswer: "50",
        explanation: "Each mole of nitrogen is a bimolecular molecule. Therefore, to produce five moles of nitrogen you would need ten moles of nitric acid. Ten moles of nitric acid contain thirty moles of oxygen. To convert this oxygen into water, you would need sixty moles of hydrogen ions. The ten moles of nitric acid provides only ten moles of hydrogen ions; therefore you would need another fifty moles, which is the same as fifty equivalents of acid, choice D.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q8",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "Solution X boils at 100.26ֲ° C and solution Y boils at 101.04ֲ° C. Both solutions are at atmospheric pressure and contain the same solute concentration. Which of the following conclusions can be drawn?",
        options: [
          "The freezing point of solution X is lower than that of solution Y.",
          "The vapor pressure of solution X is higher than that of solution Y at 100.26ֲ° C.",
          "Solution X and solution Y are immiscible.",
          "The vapor pressure of solution X is lower than that of solution Y at 100.26ֲ° C."
        ],
        correctAnswer: "The vapor pressure of solution X is higher than that of solution Y at 100.26ֲ° C.",
        explanation: "This question deals with the colligative properties of solutions. It brings up several critical points about solutions. One is that the presence of a solute in a solution ALWAYS raises the boiling point and lowers the freezing point, compared to the boiling and freezing points of the pure solvent. The more concentrated the solution, the higher the boiling point and lower the freezing point will be. Thus it is clear that choice A is incorrect; since Solution Ys boiling point is higher than Solution Xs, its freezing point must be lower as well. Since there isnt actually enough information to say that this answer is right or wrong since you dont know the original freezing point or freezing point depression constant for either solution, there must be a better answer. The second important concept is that of vapor pressure, which is the Section of both answers B and D. A solution boils when its vapor pressure is equal to the atmospheric pressure, solution Y must have had a lower vapor pressure to begin with. Choice B is therefore correct, and choice D incorrect. Choice C concerns the solubility of the two solutions in each other. Again, we dont have enough information to say that this answer is correct. After all, we know nothing about the two solvents of solutions X and Y, only that they have the same concentration of solute in them and what the resultant boiling points are.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q9",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "A converging lens has a focal length of 8 cm. If the object is 10 cm to the left of the lens, what are the position of the image formed and the magnification of the lens?",
        options: [
          "0.025 cm to the right of the lens and 0.0025X",
          "4.4 cm to the right of the lens and 0.4X",
          "40 cm to the right of the lens and 4X",
          "40 cm to the left of the lens and 4X"
        ],
        correctAnswer: "40 cm to the right of the lens and 4X",
        explanation: "In the question we are told that the object is a distance of 10 centimeters to the left of the lens. To determine the position of the image, simply plug the numbers into the equation: Give where f is the focal length of the lens, p is the object distance, and q is the image distance. This equation rearranges to Plugging in values for the focal length of 8 centimeters, and an object distance of 10 cm, we get an answer of 1/40 for the reciprocal of the image distance, which is equivalent to an image distance of 40 centimeters. Since we have a positive image distance, the image is on the real side of the lens, which is the right side of the lens. To calculate the magnification, we use the equation: where M is the magnification. Putting the known values into the equation, magnification is equal to ˆ’40 centimeters divided by 10 centimeters, or 4x. The minus sign indicates that the image is inverted. So the image is 40 centimeters to the right of the lens, with a magnification of 4x, answer choice C.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q10",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "If 29 g of maleic acid () is dissolved in 500 g of ammonia (N), what is the molality of the resulting solution?",
        options: [
          "0.05 m",
          "0.10 m",
          "0.25 m",
          "0.50 m"
        ],
        correctAnswer: "0.50 m",
        explanation: "This is a relatively simple concentration problem. Molality is defined as the number of moles of solute per kilogram of solvent. Here, you must first calculate the molecular weight of maleic acid, or 116 grams per mole, and determine the number of moles. Dividing actual grams by the grams per mole you get 0.25 moles. Since this is dissolved in 500 grams or 0.5 kilograms of ammonia you have a 0.5 molal solution, so choice D is the correct",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q11",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "An electron travels in the plane of the page from left to right, perpendicular to a magnetic field that points into the page. The direction of the resulting magnetic force on the electron will be in the plane of the page and:",
        options: [
          "upwards.",
          "downwards.",
          "to the left.",
          "to the right."
        ],
        correctAnswer: "downwards.",
        explanation: "To answer this question, we simply apply the right-hand rule. Since the particle is an electron, the direction of qv is opposite to that of v or from right to left. When you point your thumb in this direction and your fingers into the page along the direction of the magnetic field, the palm of your right hand points in the direction of the force which is downwards. Therefore, B is the correct choice.",
        topic: "generalChemistry"
      },
      {
        id: "passage-Many-nutrients-required-by-q12",
        type: "passage",
        passageId: "passage-Many-nutrients-required-by",
        question: "How much solid NaOH is required to neutralize 700 mL of 2 N HNO?",
        options: [
          "40 g",
          "48 g",
          "56 g",
          "64 g"
        ],
        correctAnswer: "56 g",
        explanation: "To solve this problem, you need to remember the definition of normality, and know how acids and bases interact to neutralize each other. Normality is defined as the number of equivalents per liter of solution. Here nitric acid has one equivalent, that is, it has one proton to donate pr mole. Thus, for this compound, normality equals molarity, and we have 2 moles in one liter, or 1.4 moles in 700 milliliters. Since acids and bases react in a 1 to 1 ration of equivalents, in order to neutralize 1.4 moles of nitric acid, you must have an equal number of equivalents of the neutralizing substance present. Since sodium hydroxide also has 1 equivalent per mole, we need the same number of moles of each. Therefore, we need 1.4 moles of sodium hydroxide. Sodium hydroxide has a molar weight of 40 grams, 1.4 moles will have a mass of 56 grams. This is answer C, which is the correct choice.",
        topic: "generalChemistry"
      }
    ]
  },
  {
    id: "passage-When-light-in-the",
    text: "When light in the ultraviolet region of the spectrum is shone on a type of material known as a phosphor, it fluoresces and emits light in the visible region of the spectrum. Lamps that utilize this property, known as fluorescent lamps, are very efficient light sources. The arrangement of a typical fluorescent lamp is shown below. The lamp is a glass tube whose inside walls are covered with a phosphor. The tube has an appreciable length-to-diameter ratio so as to reduce the power losses at each end, and it is filled with argon gas mixed with mercury vapor. Inside each end of the tube are tungsten electrodes covered with an emission material. Electrons are liberated at the cathode and accelerated by an applied electric field. These free electrons encounter the gas mixture, ionizing some mercury atoms and exciting others. Since it requires more energy to ionize the atoms than to excite the electrons, more excitation than ionization occurs. When the excited electrons revert to their ground state, they radiate ultraviolet photons with a wavelength of 253.7 nm. These photons impinge on the phosphor coating of the tube and excite electrons in the phosphor to higher energy states. The excited electrons in the phosphor return to their ground state in two or more steps, producing radiation in the visible region of the spectrum. Not every fluorescent lamp emits the same color of radiation; the color is dependent on the relative percentages of different heavy metal compounds in the phosphor. The fluorescent lamp shown operates at 100 volts and draws 400 milliamps of current during normal operation. Of the total power that the lamp consumes, only 25% is converted to light, while the remaining 75% is dissipated as heat. This energy keeps the lamp at its optimum working temperature of 40°C. In the lamp shown, the phosphor coating is calcium metasilicate, which emits orange to yellow light.",
    image: "images/q169/1.png",
    topic: "physics",
    questions: [
      {
        id: "passage-When-light-in-the-q1",
        type: "passage",
        passageId: "passage-When-light-in-the",
        question: "The photons emitted by the mercury vapor have energies:",
        options: [
          "equal to the energies of the electric current.",
          "equal to the voltage across the tube.",
          "equal to the energy differences between electron orbitals in the mercury atom.",
          "less than or equal to the energy differences between the electron orbitals of the mercury atom."
        ],
        correctAnswer: "equal to the energy differences between electron orbitals in the mercury atom.",
        explanation: "Photons are emitted from an atom when its electrons fall from an excited state to a lower energy state. Conservation of energy then tells us that the energy of the emitted photon must be equal to the energy of the excited state minus the energy of the lower state. Choice A is incorrect because the energies of the electric current have nothing to do with this process. Choice B is likewise unrelated to the physical process of an atom emitting a photon. Choice D violates conservation of energy.",
        topic: "physics"
      },
      {
        id: "passage-When-light-in-the-q2",
        type: "passage",
        passageId: "passage-When-light-in-the",
        question: "If the fluorescent light is left on for 4 hours, how much useful energy is emitted as light?",
        options: [
          "144 kJ",
          "432 kJ",
          "576 kJ",
          "900 kJ"
        ],
        correctAnswer: "144 kJ",
        explanation: "Before answering this question, we must first remember a few facts given in the passage. In the passage we are told that only 25% of the operating power of the lamp is converted to light. We are also told that the lamp has an operating voltage of 100 volts, and that it draws 400 milliamps or 0.4 amps of current. From these facts, we can calculate the operating power of the lamp since P = VI, where P = power, V = voltage, and I = current. The operating power of this lamp, therefore, is (100 V)(0.4 A) = 40 watts. Since only 25% of this power gets converted to light, we get only (10 watts)(4 hours)(3600 seconds/hour), which equals 144 kilojoules, choice A.",
        topic: "physics"
      },
      {
        id: "passage-When-light-in-the-q3",
        type: "passage",
        passageId: "passage-When-light-in-the",
        question: "As the excited electrons in the coating drop back to their ground states in more than one step, they will emit light of:",
        options: [
          "higher frequency than the light absorbed.",
          "longer wavelength than the light absorbed.",
          "the same wavelength as the light absorbed.",
          "greater energy than the light absorbed."
        ],
        correctAnswer: "longer wavelength than the light absorbed.",
        explanation: "We have already discussed in the explanation for question 90 that when an electron falls from an excited energy state to a lower energy state light is emitted. The electrons in the phosphor atoms in the coating are excited to higher energy levels in one step by absorbing ultraviolet light. When these electrons return to the lower energy state from which they were excited, the total energy that is emitted must be equal to the energy of the excited level minus the energy of the lower level. If they return to the lower state in more than one transition, then the energy for each transition will be less than this total energy. In fact, the sum of the energies of the transitions must equal the total energy of the excitation because energy is conserved. Using the fact that the energy of a photon equals hc/λ, where h is Planck's constant, c is the speed of light, and λ is the wavelength of the light, we see that since the energy emitted in each step of the multistep transitions is smaller than the energy absorbed, the wavelengths of the photons emitted in multi-step transitions will be longer than the wavelength of the light absorbed. Once again, choice B is correct.",
        topic: "physics"
      },
      {
        id: "passage-When-light-in-the-q4",
        type: "passage",
        passageId: "passage-When-light-in-the",
        question: "In the phosphor coating, an electron falls from an excited state to a lower energy state, emitting a photon with an energy of 2.07 eV. What is the wavelength of the light emitted by the fluorescent tube? (Note: Planck’s constant h = 4.14 × 10⁻¹⁵ eV·s, and c = 3 × 10⁸ m/s.)",
        options: [
          "300 nm",
          "600 nm",
          "900 nm",
          "1242 nm"
        ],
        correctAnswer: "600 nm",
        explanation: "This question is a straightforward application of the equation E = hc/λ as given in the answer to question 92. Here, the energy is given in electron-volts instead of joules, but that should not bother you since Planck’s constant, h, is given as 4.14 × 10⁻¹⁵ eV·s. The wavelength therefore equals λ = (4.14 × 10⁻¹⁵)(3 × 10⁸) / 2.07 Rounding everything to the nearest integer gives λ = (12 × 10⁻⁷) / 2 ≈ 6 × 10⁻⁷ m = 600 nm, choice B.",
        topic: "physics"
      },
      {
        id: "passage-When-light-in-the-q5",
        type: "passage",
        passageId: "passage-When-light-in-the",
        question: "Some fluorescent light bulbs are observed to glow for a short period after their power supply has been turned off. This glow is generated mainly by:",
        options: [
          "the incandescence of the hot ionic gas within the bulb surface.",
          "emission of light stored as vibrational kinetic energy in the phosphor coating.",
          "the dissipation of electric charge built up on the bulb’s surface.",
          "electrons returning to the ground state from excited states after the power was shut off."
        ],
        correctAnswer: "electrons returning to the ground state from excited states after the power was shut off.",
        explanation: "We can eliminate the other answer choices. Choice A talks about the incandescence of the hot ionic gases in the bulb’s surface. This is one of those answer choices which sounds impressive and very feasible, but is incorrect. Incandescence is light which is emitted due to heat and since we are told in the passage that the lamp works at an optimum temperature of 40°C, this choice cannot be correct. 40°C is not nearly hot enough for incandescence to occur. Choice B states that the glow is due to energy stored in the coating molecules’ vibrational kinetic energy. We can rule out this answer choice since although moving charges can radiate light, the energy of vibration is much too small to emit visible light. Choice C is also incorrect since the dissipation of electric charge cannot cause a steady glow.",
        topic: "physics"
      }
    ]
  },
  {
    id: "passage-A-ski-jump-is",
    text: "A ski jump is an inclined track from which a ski jumper takes off through the air. After traveling down the track, the skier takes off from a ramp at the bottom of the track. The skier lands farther down on the slope. Figure 1 shows a ski jump, in which the ramp at the lower end of the track makes an angle of 30° to the horizontal. The track is inclined at an angle θ to the horizontal, and the slope is inclined at an angle of 45° to the horizontal. A ski jumper is stationary at the top of the track. Once the skier pushes off, she accelerates down the track, and then takes off from the ramp. The vertical height difference between the top of the track and its lowest point is 50 m, and the vertical height difference between the top of the ramp and its lowest point is 10 m. The distance traveled by the skier between leaving the ski jump ramp and making contact with the slope is called the jump distance. In some cases, to increase this distance, a skier will jump slightly upon leaving the ramp, thereby increasing the vertical velocity. Unless otherwise stated, assume friction is negligible and ignore air resistance.",
    image: "images/q171/1.png",
    topic: "physics",
    questions: [
      {
        id: "passage-A-ski-jump-is-q1",
        type: "passage",
        passageId: "passage-A-ski-jump-is",
        question: "How would the speed of a skier leaving the jump ramp change if the vertical height of the jump ramp were increased from its original height of 10 meters?",
        options: [
          "increase",
          "decrease",
          "remain the same",
          "The answer depends on the incline angle of the jump ramp."
        ],
        correctAnswer: "decrease",
        explanation: "Using conservation of energy: \"mgh = \\\\frac{1}{2}mv^2\" Solving for velocity: \"v = \\\\sqrt{2gh}\" Since increasing the ramp height reduces the vertical height h the skier descends, her final speed v decreases. Thus, B is correct.",
        topic: "physics"
      },
      {
        id: "passage-A-ski-jump-is-q2",
        type: "passage",
        passageId: "passage-A-ski-jump-is",
        question: "Another ski jumper sets off from a point farther down the jump track and leaves the ramp at a speed of 16 m/s. If the time in flight is 4 s, what is the total horizontal distance traveled?",
        options: [
          "4 m",
          "838\\sqrt{3} m",
          "32332\\sqrt{3} m",
          "48 m"
        ],
        correctAnswer: "32332\\sqrt{3} m",
        explanation: "Horizontal velocity: \"v_x = v \\\\cos(\\\\theta) = 16 \\\\cos(30^\\\\circ)\" Then: \"d = v_x \\\\cdot t = 16 \\\\cos(30^\\\\circ) \\\\cdot 4 = 16 \\\\cdot \\\\frac{\\\\sqrt{3}}{2} \\\\cdot 4 = 32\\\\sqrt{3}\" So, Answer: C.",
        topic: "physics"
      },
      {
        id: "passage-A-ski-jump-is-q3",
        type: "passage",
        passageId: "passage-A-ski-jump-is",
        question: "Which of the following would increase the jump distance? I. Increasing the vertical height h of the jump track II. Increasing the angle of incline of the jump track III. Carrying extra weight to increase the total mass of the ski jumper",
        options: [
          "I only",
          "I and II only",
          "II and III only",
          "I and III only"
        ],
        correctAnswer: "I only",
        explanation: "•\tI: True. More height → more potential energy → more kinetic energy → more jump distance. •\tII: False. Changing incline angle alone doesn't change potential energy. •\tIII: False. Mass cancels out in: \"mgh = \\\\frac{1}{2}mv^2\" So mass doesn't affect final speed or jump distance.",
        topic: "physics"
      },
      {
        id: "passage-A-ski-jump-is-q4",
        type: "passage",
        passageId: "passage-A-ski-jump-is",
        question: "How would the work done by gravity on the skier when she skis down the track compare with the work done by gravity if she fell the same vertical height?",
        options: [
          "Less work would be done when she skis down.",
          "More work would be done when she skis down.",
          "Equal amounts of work would be done.",
          "Depends on the angle of the track."
        ],
        correctAnswer: "Equal amounts of work would be done.",
        explanation: "Work done by gravity: \"W = mgh\" Only depends on vertical height, not path taken. Gravity is a conservative force.",
        topic: "physics"
      },
      {
        id: "passage-A-ski-jump-is-q5",
        type: "passage",
        passageId: "passage-A-ski-jump-is",
        question: "What is the acceleration of an 80 kg skier going down the track if: \"\\\\theta = 45^\\\\circ\"",
        options: [
          "6.9 m/s²",
          "9.8 m/s²",
          "13.9 m/s²",
          "80 m/s²"
        ],
        correctAnswer: "6.9 m/s²",
        explanation: "Only component of gravity acting down the incline is: \"a = g \\\\sin(\\\\theta) = 9.8 \\\\sin(45^\\\\circ) = 9.8 \\\\cdot \\\\frac{\\\\sqrt{2}}{2} \\\\approx 6.9 \\\\text{ m/s}^2\" So Answer: A.",
        topic: "physics"
      }
    ]
  },
  {
    id: "passage-X-rays-are-produced-by",
    text: "X-rays are produced by a device which beams electrons with an energy between 103 and 106 eV at a metal plate. The electrons interact with the metal plate and are stopped by it. Much of the energy of the incoming electrons is released in the form of X-rays, which are high-energy photons of electromagnetic radiation. An example of such a device is shown below. Electrons are accelerated from the cathode toward the anode by an electric field. (Diagram: classic evacuated X-ray tube showing electron path from cathode to anode, X-rays emitted from anode) There are two mechanisms by which the X-rays are produced within the metal: 1.\tBremsstrahlung (German for \"breaking radiation\") – X-rays are emitted by the electrons as they are brought to rest by interactions with the positive nuclei of the anode. 2.\tCharacteristic X-ray emission – When an incoming electron knocks an inner electron out of one of the metal atoms of the anode, an electron is replaced by one from a higher energy level. The energy difference is emitted as a photon (an X-ray). •\tX-rays are absorbed by a material when they pass through it. •\tThe amount of X-rays absorbed increases with the density of the material. •\tLow-energy X-rays are more likely to be absorbed than higher-energy X-rays. Note: •\t1 eV=1.6×10−19 J1 \\, \\text{eV} = 1.6 \\times 10^{-19} \\, \\text{J} •\tPlanck’s constant: h=4.1×10−15 eV\\cdotpsh = 4.1 \\times 10^{-15} \\, \\text{eV·s} •\tSpeed of light: c=3×108 m/sc = 3 \\times 10^8 \\, \\text{m/s}",
    image:"images/q178/1.png",
    topic: "physics",
    questions: [
      {
        id: "passage-X-rays-are-produced-by-q1",
        type: "passage",
        passageId: "passage-X-rays-are-produced-by",
        question: "What is the direction of the electric field that accelerates the electrons? ",
        options: [
          "From the anode toward the cathode",
          "From the cathode toward the anode",
          "Into the page",
          "Out of the page"
        ],
        correctAnswer: "From the anode toward the cathode",
        explanation: "This question involves knowledge of electric fields and forces: Electrons (negatively charged) are accelerated from cathode to anode. Electric field lines point from positive to negative. Therefore, the field must point from anode to cathode, because electrons accelerate opposite to the direction of the electric field.",
        topic: "physics"
      },
      {
        id: "passage-X-rays-are-produced-by-q2",
        type: "passage",
        passageId: "passage-X-rays-are-produced-by",
        question: "How does the wavelength of an X-ray produced from a K-alpha transition in molybdenum compare to that produced from a lower energy K-alpha transition in copper?",
        options: [
          "It is shorter.",
          "It is the same.",
          "It is longer.",
          "It depends on the energy of the incoming electron."
        ],
        correctAnswer: "It is shorter.",
        explanation: "From the equation E = hf, where E is the energy, h is Plancks constant, and f is the frequency, we know that energy and frequency are proportional. However, the question asks about wavelength, so we have to convert frequency into wavelength. The speed of any wave is equal to its frequency times its wavelength. So solving for frequency, we get that frequency equals the speed of the wave over the wavelength. So frequency is inversely proportional to wavelength. Since we know that frequency and energy are proportional, we can predict that as the energy difference increases, the wavelength of the emitted photon must decrease. This implies that the wavelengths of the photons emitted from molybdenum will be shorter than that of the photons emitted from copper, since wavelength and energy are inversely proportional \" as one gets bigger, the other gets smaller. Therefore, the correct answer is choice A.",
        topic: "physics"
      },
      {
        id: "passage-X-rays-are-produced-by-q3",
        type: "passage",
        passageId: "passage-X-rays-are-produced-by",
        question: "What is the minimum potential difference required to produce a 0.06 nm X-ray from an electron transition in a metal?",
        options: [
          "15,000 V",
          "20,000 V",
          "20,500 V",
          "21,500 V"
        ],
        correctAnswer: "20,500 V",
        explanation: "In the passage, we are told that an X-ray is emitted when an electron makes a transition from a higher to a lower energy level in an atom. This question asks us to calculate the minimum potential difference required to produce a 0.06-nm X-ray from an electron transition. First, we have to determine the energy of the X-ray produced. We use the equation E = hc/־», where E is the energy, h is Plancks constant, c is the speed of light in a vacuum, and ־» is the wavelength. Substituting in, we get that E = (4.1 ֳ— 10 ֳ— 3◌ֳ — 10 ) / (0.06◌ֳ — 10 ), which equals 20,500 electron-volts. This is the energy of an X-ray whose wavelength is 0.06 nm, and it is ˆ’9 therefore the minimum energy required to create an X-ray with a wavelength of 0.06 nanometers. This energy comes from accelerating electrons through a potential difference. Now, recall that 1 electron- volt is the energy of an electron accelerated through a potential difference of 1 volt. Therefore 20,500 electron- volts requires that an electron be accelerated through a potential difference of 20,500 volts. So this represents the minimum potential difference required to produce an X-ray with a wavelength of 0.06 nanometers, and answer choice C is correct.",
        topic: "physics"
      },
      {
        id: "passage-X-rays-are-produced-by-q4",
        type: "passage",
        passageId: "passage-X-rays-are-produced-by",
        question: "An X-ray source produces X-rays with a maximum frequency of 6×1018 Hz6 \\times 10^{18} \\, \\text{Hz}. If the cathode current is doubled so that twice as many electrons are emitted per unit time, what is the new maximum frequency of the X-rays produced?",
        options: [
          "3×1018 Hz3 \\times 10^{18} \\, \\text{Hz}",
          "6×1018 Hz6 \\times 10^{18} \\, \\text{Hz}",
          "12×1018 Hz12 \\times 10^{18} \\, \\text{Hz}",
          "24×1018 Hz24 \\times 10^{18} \\, \\text{Hz}"
        ],
        correctAnswer: "6×1018 Hz6 \\times 10^{18} \\, \\text{Hz}",
        explanation: "The energy of each individual electron (and therefore the maximum frequency of X-rays emitted) is determined by the potential difference the electrons are accelerated through—not by how many electrons are emitted. •\tDoubling the current increases the number of electrons per unit time. •\tBut the energy per electron remains the same, and so does the maximum energy of the photons emitted. •\tSince E=hfE = hf, and the energy EE is unchanged, the maximum frequency ff must also remain unchanged. Thus, the maximum frequency remains: { \"f_max\": \"6 \\\\times 10^{18} \\\\, \\\\text{Hz}\" } Correct answer: B",
        topic: "physics"
      },
      {
        id: "passage-X-rays-are-produced-by-q5",
        type: "passage",
        passageId: "passage-X-rays-are-produced-by",
        question: "In an X-ray tube, electrons of charge e are accelerated through a potential difference of V. The anode is cooled by water of mass m with specific heat c. If n electrons per second strike the anode, what is the maximum possible rise in the temperature of the water after 100 s?",
        options: [
          "nVe / 100mc",
          "100Ve / mc",
          "100n(Ve + mc)",
          "100nVe / mc"
        ],
        correctAnswer: "100nVe / mc",
        explanation: "We must first calculate the maximum energy that the electrons could transfer to the water. Now, the equation that relates the energy of the electrons E to the total charge q and the potential difference V is E = qV. There are n electrons hitting the anode target per second, therefore 100n electrons strike the target in 100 seconds, which is equal to a charge 1 of 100ne. Therefore, the amount of energy transferred in 100 s = 100ne V. Assuming that all of this energy is converted to heat energy, we can use the equation for specific heat to calculate the change in temperature of the anode. This equation is E = mcˆ†T, where E is the energy, m is the mass, c is the specific heat, and ˆ†T is the change in temperature. This is equal to the energy transferred to the anode target. Setting the two expressions equal to one another, we get that 100nVe = mcˆ†T. The question asks us to determine the change in temperature, so if we rearrange this equation to solve for ˆ†T, we get that the change in temperature ˆ†T = 100neV / mc, choice D.",
        topic: "physics"
      }
    ]
  }
]

// Psychological, Social, and Biological Foundations
export const section4Passages: Passage[] = [
  {
    id: "passage-social-psychology",
    text: "Social psychology is the scientific study of how people's thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of others. One of the most famous experiments in social psychology was conducted by Stanley Milgram in the 1960s. Milgram was interested in understanding how ordinary people could be influenced to commit atrocities, such as those carried out by Nazi soldiers during World War II. In his experiment, participants were told they were participating in a study on learning and memory, and were instructed to administer increasingly powerful electric shocks to a 'learner' (who was actually an actor) when they answered questions incorrectly.\n\nThe experimenter, dressed in a lab coat to symbolize scientific authority, instructed the participant (the 'teacher') to increase the shock level after each wrong answer. The learner, who was in another room, would cry out in pain and eventually beg to be released as the shock levels increased. If the participant hesitated, the experimenter would use a series of verbal prods, such as 'The experiment requires that you continue.' Milgram found that about 65% of participants were willing to administer what they believed to be potentially lethal electric shocks (450 volts) when ordered to do so by the experimenter.\n\nMilgram's findings challenged the prevailing view that only disturbed individuals would inflict harm on an innocent person. Instead, his research suggested that ordinary people could engage in cruel behavior when placed in situations where they felt obligated to obey an authority figure. Milgram proposed that people enter an 'agentic state' when they see themselves as agents of another person's will, allowing them to attribute responsibility for their actions to the authority figure rather than to themselves.\n\nThe Milgram experiment has been replicated many times with similar results, though it has also been criticized on ethical grounds for the psychological distress it caused participants. Modern ethical guidelines would not permit such an experiment to be conducted today without significant modifications to protect participants from harm. Nevertheless, Milgram's work has had a profound impact on our understanding of obedience and authority, and it continues to be relevant in explaining how ordinary people can be led to engage in harmful behaviors in various contexts, from military atrocities to corporate wrongdoing.",
    topic: "psychology",
    questions: [
      {
        id: "psych-passage1-q1",
        type: "passage",
        passageId: "passage-social-psychology",
        question: "What was the primary finding of Milgram's obedience experiment?",
        options: [
          "People are naturally sadistic and enjoy inflicting pain on others",
          "Most participants refused to administer the highest level of shock",
          "A majority of participants fully obeyed the experimenter's orders despite apparent harm to the learner",
          "Participants only obeyed when they could not see the learner",
        ],
        correctAnswer:
          "A majority of participants fully obeyed the experimenter's orders despite apparent harm to the learner",
        explanation:
          "This is a detail question about Milgram's findings. According to the second paragraph, 'Milgram found that about 65% of participants were willing to administer what they believed to be potentially lethal electric shocks (450 volts) when ordered to do so by the experimenter.' This directly supports option C.",
        topic: "psychology",
      },
      {
        id: "psych-passage1-q2",
        type: "passage",
        passageId: "passage-social-psychology",
        question: "Which of the following factors did NOT increase obedience in variations of Milgram's experiment?",
        options: [
          "Moving the experiment to a prestigious institution (Yale University)",
          "Having the experimenter physically present in the room",
          "Allowing participants to choose the shock level themselves",
          "Telling participants that they would not be held personally responsible",
        ],
        correctAnswer: "Allowing participants to choose the shock level themselves",
        explanation:
          "This question requires inference based on the passage's description of Milgram's experiment. The passage doesn't explicitly list factors that increased obedience, but it does describe the experiment as having the experimenter instruct the participant to increase the shock level, with verbal prods if they hesitated. This suggests that removing the experimenter's direct orders and allowing participants to choose shock levels themselves would decrease obedience, not increase it. The other options all align with factors that would likely increase obedience: prestigious setting (authority), physical presence (direct authority), and diffusion of responsibility.",
        topic: "psychology",
      },
      {
        id: "psych-passage1-q3",
        type: "passage",
        passageId: "passage-social-psychology",
        question: "Which ethical principle was most clearly violated in Milgram's original experiment?",
        options: ["Informed consent", "Right to privacy", "Protection from harm", "All of the above"],
        correctAnswer: "Informed consent",
        explanation:
          "This question tests your understanding of research ethics in relation to Milgram's experiment. The passage states that 'participants were told they were participating in a study on learning and memory,' when in fact the study was about obedience to authority. This deception violates the principle of informed consent, which requires that participants be fully informed about the true nature of the research. The passage also mentions 'psychological distress' to participants, which relates to protection from harm, but the most fundamental ethical issue was the deception about the study's purpose.",
        topic: "psychology",
      },
      {
        id: "psych-passage1-q4",
        type: "passage",
        passageId: "passage-social-psychology",
        question: "Which psychological concept best explains the participants' behavior in Milgram's experiment?",
        options: ["Cognitive dissonance", "The bystander effect", "Deindividuation", "The agentic state"],
        correctAnswer: "The agentic state",
        explanation:
          "This question tests your understanding of the psychological concepts presented in the passage. According to the third paragraph, 'Milgram proposed that people enter an &quot;agentic state&quot; when they see themselves as agents of another person's will, allowing them to attribute responsibility for their actions to the authority figure rather than to themselves.' This directly supports option D. The other options refer to different psychological concepts not specifically mentioned in the passage as explanations for the participants' behavior.",
        topic: "psychology",
      },
      {
        id: "psych-passage1-q5",
        type: "passage",
        passageId: "passage-social-psychology",
        question: "According to the passage, what was Milgram's primary motivation for conducting his experiment?",
        options: [
          "To study learning and memory processes",
          "To understand how ordinary people could be influenced to commit atrocities",
          "To demonstrate that most people are inherently cruel",
          "To develop more ethical guidelines for psychological research",
        ],
        correctAnswer: "To understand how ordinary people could be influenced to commit atrocities",
        explanation:
          "This is a detail question about Milgram's motivation. According to the first paragraph, 'Milgram was interested in understanding how ordinary people could be influenced to commit atrocities, such as those carried out by Nazi soldiers during World War II.' This directly supports option B.",
        topic: "psychology",
      },
    ],
  },
  {
    id: "passage-Which-of-the-following",
    text: "In 1972, Georges Ungar reported the discovery of a peptide that appeared to transfer learning. Ungar’s claim was based on experiments in which rats placed in a chamber with specially designed dark and light regions were trained to avoid the dark regions of the chamber. Following their training, the rats were killed and brain extracts were prepared. These brain extracts were injected into naive rats which were then observed to acquire the fear of darkness without training. Two hypotheses were proposed to explain these remarkable results: Hypothesis 1 – Ungar concluded that the extracts contained some chemical that transmitted the learned fear of darkness to the naive rats. A fifteen amino-acid polypeptide was isolated from the brain extracts and sequenced. Ungar claimed that this peptide, called scotophobin, was a chemical transmitter of learning. The peptide had the primary structure shown below: C–Ser–Asp–Asn–Arg–Gln–Gln–Gly–Lys–Ser–Ala–Arg–Gln–Gly–Gly–Tyr–N (scotophobin) Hypothesis 2 – Other researchers, who tested scotophobin but could not reproduce Ungar’s results, argued that scotophobin did not transfer the learned fear of darkness. Instead, they suggested that scotophobin, which is structurally similar to ACTH and vasopressin, acted to increase stress in the rats. Since stress increases sympathetic nervous activity, rats injected with scotophobin would become hyperactive and tend to spend less time in the dark regions of the experimental chamber. They argued that such stress responses in the rats could be misinterpreted as a fear of darkness. Ungar’s claim was further weakened by chemical analysis in which both the scotophobin extracts which Ungar had injected into the naive rats and a sample of synthesized scotophobin peptide were subjected to SDS polyacrylamide gel electrophoresis, as shown in Figure 1.",
    image: "images/q63/1.png",
    topic: "psychology",
    questions: [
      {
        id: "passage-Which-of-the-following-q1",
        type: "passage",
        passageId: "passage-Which-of-the-following",
        question: "Hydrolytic enzymes cleave polypeptides at specific amino acid residues. Which of the following hydrolytic enzymes could be used to cleave scotophobin into three fragments?",
        image: "images/q63/q1.png",
        options: [
          "Trypsin only",
          "Trypsin or clositripain only",
          "Clositripain or chymotrypsin only",
          "Clositripain or pepsin only"
        ],
        correctAnswer: "Clositripain or pepsin only",
        explanation: "In order to cleave scotophobin into three fragments, the protein must be cleaved at two sites. Clositripain will cleave scotophobin at both Arg residues, while pepsin will cleave scotophobin at the Asp residue and at the Tyr residue. Note that the enzymes cleave at the carboxy end of the residue. Thus, according to the direction in which the sequence of the protein is written in the text (carboxy to amino end), the enzymes will cleave before, i.e., to the left of, the specified amino acid residue. Choice A and B are incorrect because trypsin will cleave the peptide at two Arg location and one Lys location, creating 4 fragments. Choice C is incorrect because chymotrypsin will cleave the peptide at a single point (Tyr), creating 2 fragments.",
        topic: "psychology"
      },
      {
        id: "passage-Which-of-the-following-q2",
        type: "passage",
        passageId: "passage-Which-of-the-following",
        question: "In a follow-up experiment, researchers administered scotophobin to rats in order to examine its physiological effects. Which of the following observations of physiological effects in the rat would provide the best support for Hypothesis 2?",
        options: [
          "Increase in urine volume",
          "The rat pupils dilate causing the rat to prefer darkness and avoid light",
          "Increase in heart rate",
          "Dilation of arterioles regulating blood flow to the digestive tract"
        ],
        correctAnswer: "Increase in heart rate",
        explanation: "Hypothesis 2 states that scotophobin, which is similar to ACTH and ADH, increases sympathetic activity. Thus, any observation of ACTH or ADH-like effects, or of increased sympathetic activity (fight-or-flight) would support Hypothesis 2. Only Choice C, increased heart rate, is a result of increased sympathetic activity. Choice A is incorrect because ADH-like activity would tend to decrease urine volume by increasing water reabsorption in the collecting duct of the nephron. Choice B is incorrect because, although sympathetic activity will lead to pupil dilation, if this causes the rats to prefer darkness then it does not support Hypothesis 2 which tries to explain why an increase in sympathetic activity would cause the rats to avoid darkness. Choice D is incorrect because sympathetic activity will tend to decrease blood flow to the digestive tract. Dilating arterioles would increase blood flow. Also, vasopressin acts to constrict blood vessels and increase blood pressure.",
        topic: "psychology"
      },
      {
        id: "passage-Which-of-the-following-q3",
        type: "passage",
        passageId: "passage-Which-of-the-following",
        question: "Researchers isolated a polypeptide from the brains of goldfish trained to avoid darkness. This goldfish scotophobin was 15 amino acids long and differed from rat scotophobin by one amino acid. The gene for goldfish scotophobin must differ from that of rat scotophobin by:",
        options: [
          "one amino acid.",
          "three codons.",
          "at least one nucleotide.",
          "at least three nucleotides.",
          "codon, which codes for a single amino acid in the final protein, consists of three nucleotides. At least one nucleotide must be changed to code for a different amino acid. Note that changing three nucleotides can also lead to a change in a single amino acid, but only if these nucleotides are in the same codon."
        ],
        correctAnswer: "at least one nucleotide.",
        explanation: "Choice A is incorrect because the gene consists of DNA, not amino acids. Choice B is incorrect because a change in three codons will lead to a change in three amino acids, not one. Choice D is incorrect because a change in a single nucleotide can cause a codon to code for a different amino acid.",
        topic: "psychology"
      },
      {
        id: "passage-Which-of-the-following-q4",
        type: "passage",
        passageId: "passage-Which-of-the-following",
        question: "Researchers were interested in purifying a second protein (protein X) from Ungars extract. The gene segment encoding protein X was believed to consist of thirty nucleotides. According to Figure 1, which band could represent protein X?",
        options: [
          "Band A",
          "Band B",
          "Band C",
          "Band D"
        ],
        correctAnswer: "Band D",
        explanation: "If the amino acid sequence encoding for Protein X is thirty nucleotides long, then Protein X consists of 10 amino acids. Protein X is thus smaller than scotophobin. The technique of electrophoresis uses an electrical field to separate proteins based on size. Larger proteins subjected to the same electric field will move more slowly than smaller proteins. Band C on Figure 1 which is common to the extract and to the purified protein represents scotophobin. Bands A and B which are closer to the top of the gel would represent proteins larger than scotophobin. Band D, which is below band C, represents a protein that has migrated further and is thus smaller than scotophobin. Of the choices, only band D could potentially represent Protein X. Choices A and B are incorrect because bands A and B, which have migrated less than band C, represent proteins that are larger than scotophobin. Choice C is incorrect because band C is common to both the extract and the purified protein, and must therefore represent scotophobin itself.",
        topic: "psychology"
      }
    ]
  },
  {
    id: "passage-Before-birth-the-rodent",
    text: "Before birth, the rodent brain is sexually undifferentiated. It is only in the first few days following birth, during a period referred to as the critical period, that the rodent brain differentiates along male or female lines. The hormone testosterone plays a critical role in this development. Specifically, sexual differentiation is determined by the presence of estradiol, an estrogen derivative of testosterone, in certain areas of the brain. Testosterone is converted to estradiol in critical brain cells that contain the enzyme aromatase. To study the effects of testosterone on the neonatal rodent brain, the following experiments were conducted: The above research, combined with additional studies, concluded that testosterone has two organizational effects on the male rodent brain: Defeminization - Moderate levels of testosterone-derived estradiol during the critical period are sufficient for defeminization of the brain. Defeminization of the rodent brain results in loss of estrogen positive feedback on LH and FSH secretion and the ensuing loss of cyclicity, as well as loss of female sex behavior. Masculinization - High levels of estradiol due to high levels of testosterone during the critical period results in masculinization of the brain. Masculinization leads to the induction of male sex behavior including antagonism towards other males and the mounting of females.",
    topic: "psychology",
    image: "images/q72/1.png",
    questions: [
      {
        id: "passage-Before-birth-the-rodent-q1",
        type: "passage",
        passageId: "passage-Before-birth-the-rodent",
        question: "A mutant male neonatal rodent with a defective aromatase enzyme is injected with large doses of testosterone during the critical period. Which of the following would occur?",
        options: [
          "Induction of male sex behavior",
          "Development of female sex behavior",
          "Loss of both cyclicity and female sex behavior",
          "Loss of both cyclicity and female sex behavior and induction of male sex behavior"
        ],
        correctAnswer: "Development of female sex behavior",
        explanation: "The passage states that aromatase converts testosterone to estradiol. Estradiol that has been derived from testosterone leads to defeminization (loss of cyclicity and female sex behavior) and masculinization (induction of male sex behavior) of the rodent brain. If aromatase is defective, no estradiol will be produced even when large doses of testosterone are present. Thus, the brain will develop along female lines. Results of this situation are similar to those of experiment 1 in which the rodent is castrated and therefore has no source of testosterone. Choices A, C, and D are all incorrect because these effects are caused by estradiol in the brain. Without aromatase, there will be no estradiol in the male rodent brain.",
        topic: "psychology"
      },
      {
        id: "passage-Before-birth-the-rodent-q2",
        type: "passage",
        passageId: "passage-Before-birth-the-rodent",
        question: "The conversion of testosterone to estradiol is what type of reaction?",
        image: "images/q71/q2.png",
        options: [
          "Reduction",
          "Aromatization",
          "Electrophilic aromatic substitution",
          "Methylation"
        ],
        correctAnswer: "Aromatization",
        explanation: "The passage states that the conversion of testosterone to estradiol is catalyzed by aromatase. In this reaction, an aromatic ring is formed. Thus, it is an aromatization reaction. Choice A is incorrect because a reduction involves addition of hydrogens to a molecule. In this case, hydrogens are removed. A pair of hydrogens is removed from the ring and the resulting cyclic dienone tautomerizes to its enol form. Choice C is incorrect because electrophilic aromatic substitution is substitution on an aromatic ring. This reaction did not begin with an aromatic ring. Choice D is incorrect because (Friedel-Crafts) alkylation requires an aromatic ring (it is an electrophilic substitution reaction).",
        topic: "psychology"
      },
      {
        id: "passage-Before-birth-the-rodent-q3",
        type: "passage",
        passageId: "passage-Before-birth-the-rodent",
        question: "A researcher proposes that very low doses of estradiol are required for induction of female sex behavior and cyclicity in the rodent brain. Which of the following observations would best support this hypothesis?",
        options: [
          "Female neonates injected with the anti-estrogen tamoxifen are acyclic and show neither male nor female sex behavior.",
          "Female neonates lacking the aromatase enzyme develop normally.",
          "Female neonates injected with large doses of estradiol are acyclic and show male sex behavior.",
          "Male neonates injected with low dosages of estradiol develop normally."
        ],
        correctAnswer: "Female neonates injected with the anti-estrogen tamoxifen are acyclic and show neither male nor female sex behavior.",
        explanation: "The passage indicates that estradiol is an estrogen. Choice A states that tamoxifen is an antiestrogen. Therefore, injecting tamoxifen blocks all estradiol activity. So, as predicted by the given experiments, masculinization would not occur in female neonates injected with tamoxifen and male sex behavior would not be induced. The lack of female sex behavior and cyclicity, and lack of male sex behavior, indicates that induction of female sex behavior and cyclicity also requires estradiol. Choice B is incorrect because aromatase is only responsible for converting testosterone to estradiol. So, lacking aromatase would have no effect on estradiol present in females that is not testosterone-derived. And, most of the estradiol in females is not derived from testosterone. This experiment, then, provides no information about the role of estradiol in inducing female sex behavior. Choice C is incorrect because large doses of estradiol lead to defeminization and masculinization as expected. This does not support the hypothesis. Choice D is incorrect because males convert testosterone to estradiol in the brain, leading to normal male development. This does not support the hypothesis. Note that while the incorrect choices did not oppose the hypothesis, they did not support the hypothesis either.",
        topic: "psychology"
      },
      {
        id: "passage-Before-birth-the-rodent-q4",
        type: "passage",
        passageId: "passage-Before-birth-the-rodent",
        question: "In Experiment 2, researchers most likely waited 2-3 months before implanting ovaries:",
        options: [
          "to allow the rat to recover from previous surgery.",
          "to allow testosterone levels to rise to necessary concentrations.",
          "to wait for the critical period to pass.",
          "to promote the defeminization of the rat brain."
        ],
        correctAnswer: "to wait for the critical period to pass.",
        explanation: "The experiments were designed to demonstrate the effects of testosterone on sexual differentiation. The ovaries were transplanted to allow the rodent to demonstrate whether or not it had the ability to cycle normally. Thus, it is important that transplantation of the ovaries did not influence the development of the rodent. To make sure that the transplantation of ovaries had no effect on the sexual differentiation of the rodent brains, the ovaries had to have been transplanted once the sexual differentiation of the rat brain had already occurred. According to the passage, this differentiation occurs during the critical period which begins a few days after birth. The researchers castrated the neonate and waited for the rodent to mature past the critical period before implanting the ovaries. Choice A is incorrect because it would not take 3 months for the rat to recover from surgery. Also, the rat is castrated at birth indicating that surgery is not an obstacle. Implanting the ovaries would require another surgery. Choice B is incorrect because testosterone levels would not rise in the castrated rat (no testes). Choice D is incorrect because defeminization would be promoted by estradiol (or testosterone converted by aromatase).",
        topic: "psychology"
      },
      {
        id: "passage-Before-birth-the-rodent-q5",
        type: "passage",
        passageId: "passage-Before-birth-the-rodent",
        question: "An adult male rat that is acyclic is observed to mount females. However, the rat also allows itself to be mounted by male rats. According to the passage, the most likely explanation for these observations is that:",
        options: [
          "the rat is hermaphroditic, with both male and female sex organs.",
          "the rat has been demasculinized.",
          "the rat has been masculinized but not fully defeminized.",
          "the rat has been defeminized but not fully masculinized."
        ],
        correctAnswer: "the rat has been masculinized but not fully defeminized.",
        explanation: "The rat has been masculinized and so exhibits male sex behavior. However, the rat has not been fully defeminized in that it exhibits some female sex behavior. Choice A is incorrect because the passage does not discuss hermaphrodites. It focuses on the sexual differentiation of the brain, not the sex organs. Choice B is incorrect because the passage does not discuss demasculinization. Choice D is incorrect. The passage defines masculinization as the development of male sex behavior, which the rat exhibits by mounting females. Thus, the rat has been masculinized. The passages definition of defeminization includes the loss of female sex behavior. Since the rat still demonstrates some aspects of female sex behavior, (i.e., allowing itself to be mounted by males), it has not been fully defeminized.",
        topic: "psychology"
      },
      {
        id: "passage-Before-birth-the-rodent-q6",
        type: "passage",
        passageId: "passage-Before-birth-the-rodent",
        question: "Steroid hormones bind to receptors in the nucleus and directly regulate:",
        options: [
          "the transcription of mRNA.",
          "the translation of protein.",
          "the production of cAMP.",
          "the replication of DNA."
        ],
        correctAnswer: "the transcription of mRNA.",
        explanation: "Steroid hormones diffuse into the nucleus and bind to receptors. The steroid/receptor complex binds to DNA and regulates mRNA transcription. In contrast, peptide hormones bind to receptors on the surface of the cell and exert their effects through secondary messenger systems. Choice B is incorrect because protein translation by ribosomes is not regulated by steroid hormones. Choice C is incorrect because cAMP production is generally associated with protein hormones binding to cell membrane receptors. It is part of a single transduction mechanism, acting as a second messenger. Choice D is incorrect because DNA replication is not regulated by steroid hormones.",
        topic: "psychology"
      }
    ]
  },
  {
    id: "passage-The-process-by-which",
    text: "The process by which individuals decide and choose to seek assistance for health or mental health problems is called help-seeking. Table 1 displays the percentage of American Indian/Alaska Native and non-Hispanic White adults who received mental health or counseling treatment in 2008. Help-seeking is a complex process and individuals will choose to obtain treatment for a variety of reasons. One of the strongest Source: Adapted from U.S. Department of Health & Human Services,\"Mental Health and American Indians/Alaska Natives\"",
    image: "images/q159/1.png",
    topic: "sociology",
    questions: [
      {
        id: "passage-The-process-by-which-q1",
        type: "passage",
        passageId: "passage-The-process-by-which",
        question: "What would the main focus of supporters of a medicalized approach to mental health be?",
        options: [
          "They would disregard mental health as a myth, and mainly inquire about and treat clients physical symptoms through the use of prescription drugs.",
          "They would mainly focus on establishing a strong, healthy relationship with clients, and attempt to build up their psychological strengths.",
          "They would insist that mental illness should be viewed in a holistic manner and employ complementary alternative medicines as a first avenue of intervention.",
          "Just like with any other physical disease, they would inquire about existing symptoms, formulate a diagnosis, and attempt to treat or cure the diagnosed disease."
         ],
        correctAnswer: "Just like with any other physical disease, they would inquire about existing symptoms, formulate a diagnosis, and attempt to treat or cure the diagnosed disease.",
        explanation: "Symptoms are listed, a diagnosis is put forward, and adequate treatments for such diagnosis ensued. These treatments usually, but not necessarily involve the use of prescription drugs or surgery. It has been widely criticized for issues such as being extremely positivist; disregarding the strengths or healthy aspects of individuals; and dehumanizing, de-contextualizing and reducing the person to a disease. Every psychosocial aspect may be pathologized, that is, regarded as a medical problem that urgently needs to be corrected, removed, cured, changed, or treated.",
        topic: "sociology"
      },
      {
        id: "passage-The-process-by-which-q2",
        type: "passage",
        passageId: "passage-The-process-by-which",
        question: "A practitioner using the theory of planned behavior to inform mental health educational programs would most likely:",
        options: [
          "identify cognitive schemas and their influence on the execution of behaviors.",
          "determine the level of dissonance or tension created by attitudes and beliefs.",
          "explore levels of self-efficacy in individuals planning.",
          "take into account individuals intentions, attitudes toward behavior, and subjective norms."
          ],
        correctAnswer: "take into account individuals intentions, attitudes toward behavior, and subjective norms.",
        explanation: "A: This is incorrect. Cognitive schemas are ways of organizing, categorizing, and interpreting information. Cognitive theorists often identify which cognitive schemas held by individuals help them to organize their knowledge in memory. This is unrelated to the theory of planned behavior.",
        topic: "sociology"
      },
      {
        id: "passage-The-process-by-which-q3",
        type: "passage",
        passageId: "passage-The-process-by-which",
        question: "How might Sandra Bems theory about masculinity and femininity explain the gender differences in access to mental health and counseling services among Native American Indians, depicted in Table 1?",
        options: [
          "Gender role conflict is more often experienced by men. Therefore, they are more likely to internalize symptoms and not seek treatment.",
          "As a result of the stereotypical characteristics associated with femininity, women are more likely to seek formal assistance. Also, due to stereotypical traits associated with masculinity, the opposite trend is observed in men.",
          "Native American Indian females are more collectivism-oriented. This is based on feminine traits, and is less frequent observed in males.",
          "Differences in attributes between men and women are rooted in neurobiology, and this then influences help-seeking behaviors."
          ],
        correctAnswer: "As a result of the stereotypical characteristics associated with femininity, women are more likely to seek formal assistance. Also, due to stereotypical traits associated with masculinity, the opposite trend is observed in men.",
        explanation: "B is correct. Sandra Bem, a feminist psychologist, was known for developing the gender schema theory. She maintains that certain traits or attributes are linked to males and females. These are perpetuated and reinforced by societal and cultural norms that stem from stereotypes we hold about what is characteristic of men and women. That is, individuals hold gender schemata of masculinity and femininity, which would translate into different help-seeking behaviors. They can be assessed through the Bem Sex Role Inventory.",
        topic: "sociology"
      },
      {
        id: "passage-The-process-by-which-q4",
        type: "passage",
        passageId: "passage-The-process-by-which",
        question: "Research makes a strong case that racial minorities mistrust in the healthcare system stems from historical incidents, including:",
        options: [
          "Shays' Rebellion.",
          "the Tuskegee Syphilis Study.",
          "the publication of the Diagnostic and Statistical Manual of Mental Disorders, 5th Edition (DSM-5).",
          "the glass ceiling effect."
          ],
        correctAnswer: "the Tuskegee Syphilis Study.",
        explanation: "B is the correct answer. Starting in 1932, the Public Health Service conducted a study on syphilis with African American men in Tuskegee, Alabama. This study is now known as the Tuskegee Study. The objective of the research was to observe how the disease progressed over time among African American men. However, none of research subjects was informed they had syphilis. Over the course of the study, penicillin became the accepted course of treatment in 1945, but researchers also did not inform the research subjects of the available treatment. Thus, the ethical principles that presently regulate research, and include the requirement of gathering informed consent, or allow for non-disclosure of intents in very specific circumstances, censor the procedures adopted at the time. This study, along with alike now deemed unethical studies, are argued to have generated mistrust in the system among minorities.",
        topic: "sociology"
      },
      {
        id: "passage-The-process-by-which-q5",
        type: "passage",
        passageId: "passage-The-process-by-which",
        question: "What variables will a researcher interested in investigating the relationship between the Big Five\" personality traits and help- seeking behaviors include in the study?",
        options: [
          "Traditional, egalitarian, patriarchal, matriarchal, and androgynous",
          "Overgeneralizations, polarized thinking, personalization, catastrophizing, and blaming",
          "Neuroticism, extraversion, openness, agreeableness, and conscientiousness",
          "Persona, shadow, anima, animus, and self"
          ],
        correctAnswer: "Neuroticism, extraversion, openness, agreeableness, and conscientiousness",
        explanation: "The fifth term refers to having both masculine and feminine traits. These are not part of the \"Big Five.\" These are not part of the \"Big Five.\"",
        topic: "sociology"
      }
    ]
  }
]

// Biological and Biochemical Foundations of Living Systems
export const section3Questions: Question[] = [
  // biology 38 mandatory
  {
    id: "bio-13",
    topic: "biology",
    type: "discrete",
    question: "Prothrombin is a ____ globulin and is produced by the _____.",
    options: [
        "Alpha, Kidney",
        "Alpha, Liver",
        "Beta, Kidney",
        "Beta, Liver"
    ],
    correctAnswer: "Beta, Liver",
    explanation: "Prothrombin is a beta globulin protein produced by the liver and involved in blood clotting.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Hematologic system",
        "Liver function"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-14",
    topic: "biology",
    type: "discrete",
    question: "The right coronary artery divides to form the posterior interventricular artery and the ___ artery.",
    options: [
        "Marginal",
        "LVC",
        "RVC",
        "LAD"
    ],
    correctAnswer: "Marginal",
    explanation: "The right coronary artery gives off the marginal artery and the posterior interventricular artery.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiovascular system",
        "Circulatory anatomy"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-15",
    topic: "biology",
    type: "discrete",
    question: "Blood flowing into the cardiac veins enters the _______ next.",
    options: [
        "Coronary Sinus",
        "Left Ventricle",
        "Right Ventricle",
        "Left Atrium"
    ],
    correctAnswer: "Coronary Sinus",
    explanation: "The coronary sinus collects blood from the cardiac veins and drains into the right atrium.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiac circulation"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-16",
    topic: "biology",
    type: "discrete",
    question: "If you are using a stethoscope and trying to detect the tricuspid valve, which of the following would be the best location?",
    options: [
        "Within 2 inches of the xyphoid process",
        "On the right side of the sternum",
        "On the left side of the sternum near the midpoint",
        "On the left side of the sternum near the midpoint of the sixth rib"
    ],
    correctAnswer: "Within 2 inches of the xyphoid process",
    explanation: "The tricuspid valve is best heard at the lower left sternal border near the xyphoid process.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiac auscultation"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-17",
    topic: "biology",
    type: "discrete",
    question: "Which of the following occurs during ventricular systole?",
    options: [
        "Increased aortic pressure",
        "Increased ventricular volume",
        "Dup heart sound",
        "P wave"
    ],
    correctAnswer: "Increased aortic pressure",
    explanation: "During ventricular systole, the ventricles contract and push blood into the aorta, increasing aortic pressure.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiac cycle"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-18",
    topic: "biology",
    type: "discrete",
    question: "Which of the following occurs during ventricular diastole?",
    options: [
        "Increased aortic pressure",
        "Increased ventricular volume",
        "Lub heart sound",
        "T wave"
    ],
    correctAnswer: "Increased ventricular volume",
    explanation: "During diastole, the ventricles relax and fill with blood, increasing their volume.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiac cycle"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-19",
    topic: "biology",
    type: "discrete",
    question: "The innermost layer of a blood vessel is lined with _______ ______ cells.",
    options: [
        "Simple squamous",
        "Stratified squamous",
        "Simple cuboidal epithelium",
        "Stratified cuboidal epithelium"
    ],
    correctAnswer: "Simple squamous",
    explanation: "The endothelium lining blood vessels consists of simple squamous epithelial cells.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Vascular system",
        "Histology"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-20",
    topic: "biology",
    type: "discrete",
    question: "Angiotensin can directly cause the release of ____ from the adrenal cortex.",
    options: [
        "Renin",
        "Aldosterone",
        "Calcitonin",
        "Thyroxine"
    ],
    correctAnswer: "Aldosterone",
    explanation: "Angiotensin II stimulates the adrenal cortex to release aldosterone, which increases sodium retention.",
    "foundationalConcept": "3",
    "contentCategory": "3C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology",
        "Renin-angiotensin-aldosterone system"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-21",
    topic: "biology",
    type: "discrete",
    question: "Cardiac output is the product of ____ and ____.",
    options: [
        "HR and Diastolic pressure",
        "HR and Stroke Volume",
        "HR and EF",
        "Diastolic and Systolic pressure"
    ],
    correctAnswer: "HR and Stroke Volume",
    explanation: "Cardiac output is calculated by multiplying heart rate (HR) by stroke volume (SV).",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-22",
    topic: "biology",
    type: "discrete",
    question: "Pulmonary edema is most likely associated with a failing _____ _____.",
    options: [
        "Right atrium",
        "Left atrium",
        "Right ventricle",
        "Left ventricle"
    ],
    correctAnswer: "Left ventricle",
    explanation: "Failure of the left ventricle causes blood to back up in the lungs, resulting in pulmonary edema.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiovascular pathology"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-103",
    topic: "biology",
    type: "discrete",
    question: "Which of the following is not a specific element of duodenal ulcers?",
    options: [
        "Primarily affects males",
        "Occasional malignancy",
        "Can lead to weight gain",
        "Affects people over 65"
    ],
    correctAnswer: "Affects people over 65",
    explanation: "Duodenal ulcers are not generally specific to individuals over 65, though other options relate more closely to known features.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Gastrointestinal Physiology"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-104",
    topic: "biology",
    type: "discrete",
    question: "Which of the following is not a specific element of Hepatitis C?",
    options: [
        "Vaccine available",
        "May be transmitted with sexual contact",
        "Inflammation of the liver",
        "Lifetime carrier"
    ],
    correctAnswer: "Vaccine available",
    explanation: "Hepatitis C currently lacks a vaccine, though it can be transmitted sexually, causes liver inflammation, and carriers can remain infected for life.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Virology",
        "Liver Function"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-106",
    topic: "biology",
    type: "discrete",
    question: "Which of the following microorganisms has been linked to Parotitis?",
    options: [
        "Staphylococcus aureus",
        "Schistosoma",
        "Wucheria bancrofti",
        "Trypanosoma cruzi"
    ],
    correctAnswer: "Staphylococcus aureus",
    explanation: "Staphylococcus aureus is a known bacterial cause of parotitis, an infection of the parotid salivary glands.",
    "foundationalConcept": "3",
    "contentCategory": "3C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Microbiology",
        "Infections"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-107",
    topic: "biology",
    type: "discrete",
    question: "What type of cell releases somatostatin?",
    options: [
        "b cells",
        "a cells",
        "plasma cells",
        "D cells"
    ],
    correctAnswer: "D cells",
    explanation: "Somatostatin is secreted by D cells in the pancreas and other parts of the gastrointestinal tract to inhibit various hormone secretions.",
    "foundationalConcept": "3",
    "contentCategory": "3D",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology",
        "Hormone Regulation"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-108",
    topic: "biology",
    type: "discrete",
    question: "What type of cell releases glucagon?",
    options: [
        "b cells",
        "a cells",
        "plasma cells",
        "D cells"
    ],
    correctAnswer: "a cells",
    explanation: "Glucagon is released by alpha cells in the pancreas to increase blood glucose levels.",
    "foundationalConcept": "3",
    "contentCategory": "3D",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology",
        "Hormone Regulation"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-109",
    topic: "biology",
    type: "discrete",
    question: "What type of cell releases insulin?",
    options: [
        "b cells",
        "a cells",
        "plasma cells",
        "D cells"
    ],
    correctAnswer: "b cells",
    explanation: "Insulin is secreted by beta cells in the pancreas, which helps regulate blood glucose levels.",
    "foundationalConcept": "3",
    "contentCategory": "3D",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology",
        "Hormone Regulation"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-110",
    topic: "biology",
    type: "discrete",
    question: "Which of the following arteries supplies blood primarily to the Midgut?",
    options: [
        "IMA",
        "Celiac",
        "SMA",
        "Axillary"
    ],
    correctAnswer: "SMA",
    explanation: "The superior mesenteric artery (SMA) supplies blood to most of the midgut, which includes parts of the small and large intestines.",
    "foundationalConcept": "3",
    "contentCategory": "3A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiovascular Anatomy"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-111",
    topic: "biology",
    type: "discrete",
    question: "Another name for the Myenteric plexus is the ________.",
    options: [
        "Submucosal plexus",
        "Branchial plexus",
        "Auerbach's plexus",
        "Lumbar plexus"
    ],
    correctAnswer: "Auerbach's plexus",
    explanation: "The myenteric plexus, also known as Auerbach\u2019s plexus, is part of the enteric nervous system that controls gastrointestinal motility.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "psychology",
        "Gastrointestinal Physiology"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-112",
    topic: "biology",
    type: "discrete",
    question: "Which of the following enzyme breaks down starches to maltose.",
    options: [
        "Amylase",
        "Lipase",
        "Trypsinogen",
        "Pepsin"
    ],
    correctAnswer: "Amylase",
    explanation: "Amylase is an enzyme that breaks down starches into maltose, which can then be further digested into glucose.",
    "foundationalConcept": "3",
    "contentCategory": "3C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Digestive Enzymes"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-113",
    topic: "biology",
    type: "discrete",
    question: "When the chromosomes line up in mitosis this is known as which phase?",
    options: [
        "Telophase",
        "Anaphase",
        "Metaphase",
        "Prophase"
    ],
    correctAnswer: "Metaphase",
    explanation: "During metaphase, chromosomes align at the metaphase plate, preparing for separation.",
    "foundationalConcept": "1",
    "contentCategory": "1A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cell Division",
        "Mitosis"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-114",
    topic: "biology",
    type: "discrete",
    question: "Which cellular organelle contains enzymes that are considered digestive?",
    options: [
        "Golgi Apparatus",
        "Lysosomes",
        "Nucleus",
        "Ribosomes"
    ],
    correctAnswer: "Lysosomes",
    explanation: "Lysosomes contain hydrolytic enzymes used to break down waste materials and cellular debris.",
    "foundationalConcept": "2",
    "contentCategory": "2A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cellular Organelles",
        "Enzyme Function"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-115",
    topic: "biology",
    type: "discrete",
    question: "Organs repair themselves through a process of?",
    options: [
        "Meiosis",
        "Mitosis",
        "Cellular differentiation",
        "Transformation"
    ],
    correctAnswer: "Mitosis",
    explanation: "Mitosis is the cellular division process used for growth and repair of tissues.",
    "foundationalConcept": "1",
    "contentCategory": "1B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cell Division",
        "Tissue Repair"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-116",
    topic: "biology",
    type: "discrete",
    question: "Which of the following is considered a model for enzyme action?",
    options: [
        "Lock and Key model",
        "Enzyme interaction model",
        "Transformation model",
        "Transcription model"
    ],
    correctAnswer: "Lock and Key model",
    explanation: "The Lock and Key model describes how a specific enzyme (lock) binds to a specific substrate (key) to catalyze a reaction.",
    "foundationalConcept": "1",
    "contentCategory": "1C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Enzyme Function",
        "Biochemical Reactions"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-117",
    topic: "biology",
    type: "discrete",
    question: "Which of the following statements about enzymes is not true?",
    options: [
        "Enzymes are catalysts.",
        "Almost all enzymes are proteins.",
        "Enzymes operate most efficiently at optimum pH.",
        "Enzymes are destroyed during chemical reactions."
    ],
    correctAnswer: "Enzymes are destroyed during chemical reactions.",
    explanation: "Enzymes are not consumed or destroyed during reactions; they facilitate reactions and remain available for reuse.",
    "foundationalConcept": "1",
    "contentCategory": "1C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Enzyme Function",
        "Biochemical Reactions"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-118",
    topic: "biology",
    type: "discrete",
    question: "Which of the following statements about prostaglandins is not true?",
    options: [
        "Prostaglandins promote inflammation.",
        "Prostaglandins can only constrict blood vessels.",
        "Prostaglandins are made in the renal medulla.",
        "Prostaglandins can lead to pain and fever."
    ],
    correctAnswer: "Prostaglandins can only constrict blood vessels.",
    explanation: "Prostaglandins can cause either constriction or dilation of blood vessels, depending on the type and context.",
    "foundationalConcept": "1",
    "contentCategory": "1D",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Lipid Signaling Molecules",
        "Inflammation"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-119",
    topic: "biology",
    type: "discrete",
    question: "Cholesterol that is known as (LDL) stands for:",
    options: [
        "Low-density lipoproteins",
        "Low-density lysosomes",
        "Level-density lipoproteins",
        "Level-density lysosomes"
    ],
    correctAnswer: "Low-density lipoproteins",
    explanation: "LDL stands for Low-Density Lipoproteins, which transport cholesterol in the bloodstream.",
    "foundationalConcept": "1",
    "contentCategory": "1D",
    "disciplines": [
        "BIOCHEM"
    ],
    "subtopics": [
        "Cholesterol Transport",
        "Lipoproteins"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-120",
    topic: "biology",
    type: "discrete",
    question: "Hardening of the arteries is known as:",
    options: [
        "Atheriosclerosis",
        "Venous narrowing",
        "Micro-circulation",
        "Hypertension"
    ],
    correctAnswer: "Atheriosclerosis",
    explanation: "Atherosclerosis is the buildup of plaque in arterial walls, leading to hardening and loss of elasticity.",
    "foundationalConcept": "1",
    "contentCategory": "1E",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cardiovascular Pathology"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-121",
    topic: "biology",
    type: "discrete",
    question: "Breathing properly requires the presence of what compound that affects surface tension of alveoli in the lungs?",
    options: [
        "Potassium",
        "Plasma",
        "Surfactant",
        "Sodium Chloride"
    ],
    correctAnswer: "Surfactant",
    explanation: "Surfactant reduces surface tension in the alveoli, preventing them from collapsing and aiding in efficient gas exchange.",
    "foundationalConcept": "3",
    "contentCategory": "3A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Respiratory Physiology"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-122",
    topic: "biology",
    type: "discrete",
    question: "Which of the following is not considered a function of the kidneys?",
    options: [
        "Secretion",
        "Reabsorption",
        "Transport",
        "Filtration"
    ],
    correctAnswer: "Transport",
    explanation: "Kidneys primarily perform filtration, reabsorption, and secretion. Transport is not a direct renal function.",
    "foundationalConcept": "3",
    "contentCategory": "3C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-123",
    topic: "biology",
    type: "discrete",
    question: "The functional unit of the kidney is known as?",
    options: [
        "Medulla",
        "Glomerulus",
        "Pyramid",
        "Nephron"
    ],
    correctAnswer: "Nephron",
    explanation: "The nephron is the structural and functional unit of the kidney, responsible for filtration and formation of urine.",
    "foundationalConcept": "3",
    "contentCategory": "3C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-124",
    topic: "biology",
    type: "discrete",
    question: "What anatomical structure connects the stomach and the mouth?",
    options: [
        "Trachea",
        "Spinal column",
        "Hepatic duct",
        "Esophagus"
    ],
    correctAnswer: "Esophagus",
    explanation: "The esophagus is the muscular tube that connects the mouth to the stomach, allowing passage of food.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Gastrointestinal Anatomy"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-125",
    topic: "biology",
    type: "discrete",
    question: "The movement of food through the intestines is known as:",
    options: [
        "Peristalsis",
        "Ileum translation",
        "Microvilli propulsion",
        "Flexure propulsion"
    ],
    correctAnswer: "Peristalsis",
    explanation: "Peristalsis is the wave-like muscular contractions that move food along the digestive tract.",
    "foundationalConcept": "3",
    "contentCategory": "3A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "biology"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-126",
    topic: "biology",
    type: "discrete",
    question: "The enzyme maltase does the following:",
    options: [
        "Breaks down lactose to glucose",
        "Turns glucose into maltose",
        "Breaks down maltose to glucose",
        "Turns glucose into lactose"
    ],
    correctAnswer: "Breaks down maltose to glucose",
    explanation: "Maltase is an enzyme that breaks maltose into two glucose molecules, facilitating carbohydrate digestion.",
    "foundationalConcept": "2",
    "contentCategory": "2A",
    "disciplines": [
        "BIOCHEM"
    ],
    "subtopics": [
        "Carbohydrate Metabolism",
        "Digestive Enzymes"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-127",
    topic: "biology",
    type: "discrete",
    question: "High levels of bilirubin in the blood stream can result in:",
    options: [
        "Uric acid overexposure",
        "Jaundice",
        "Bile salt production",
        "Hepatic mutation"
    ],
    correctAnswer: "Jaundice",
    explanation: "Elevated bilirubin levels, often due to liver dysfunction or hemolysis, lead to jaundice\u2014a yellowing of the skin and eyes.",
    "foundationalConcept": "3",
    "contentCategory": "3C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Liver Function",
        "Bilirubin Metabolism"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-129",
    topic: "biochemistry",
    type: "discrete",
    question: "Which of the following is not considered a primary color of light?",
    options: [
        "Green",
        "Blue",
        "Red",
        "Yellow"
    ],
    correctAnswer: "Yellow",
    explanation: "The primary colors of light are red, green, and blue. Yellow is a secondary color formed by combining green and red light.",
    "foundationalConcept": "5",
    "contentCategory": "5A",
    "disciplines": [
        "PHYS"
    ],
    "subtopics": [
        "Light and Color"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-130",
    topic: "biology",
    type: "discrete",
    question: "The two bones found in the area between the knee and ankle in humans are known as:",
    options: [
        "Femur and Tibia",
        "Fibula and Tibia",
        "Ulna and Tibia",
        "Radius and Tibia"
    ],
    correctAnswer: "Fibula and Tibia",
    explanation: "The tibia (shinbone) and fibula are the two long bones located in the lower leg, between the knee and ankle.",
    "foundationalConcept": "3",
    "contentCategory": "3B",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Anatomy",
        "Skeletal System"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-131",
    topic: "biochemistry",
    type: "discrete",
    question: "The symbol B on the periodic table stands for:",
    options: [
        "Beryllium",
        "Boron",
        "Barium",
        "Berkelium"
    ],
    correctAnswer: "Boron",
    explanation: "Boron (B) is a metalloid element found in group 13 of the periodic table.",
    "foundationalConcept": "4",
    "contentCategory": "4A",
    "disciplines": [
        "CHEM"
    ],
    "subtopics": [
        "Periodic Table",
        "Element Symbols"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-132",
    topic: "biochemistry",
    type: "discrete",
    question: "The symbol Mn on the periodic table stands for:",
    options: [
        "Magnesium",
        "Molybdenum",
        "Manganese",
        "Margon"
    ],
    correctAnswer: "Manganese",
    explanation: "Manganese (Mn) is a transition metal located in group 7 of the periodic table.",
    "foundationalConcept": "4",
    "contentCategory": "4A",
    "disciplines": [
        "CHEM"
    ],
    "subtopics": [
        "Periodic Table",
        "Element Symbols"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
// biochemistry 15 mandatory
{
  id: "bio-01",
  type: "discrete",
  question: "Which of the following is the mRNA start codon in most cases?",
  options: [
      "UAA",
      "AGU",
      "AUG",
      "UGA"
  ],
  correctAnswer: "AUG",
  explanation: "AUG is the universal start codon in most organisms and codes for methionine.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "Genetic Code"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-02",
  type: "discrete",
  question: "Which of the types of RNA is the smallest?",
  options: [
      "mRNA",
      "tRNA",
      "rRNA"
  ],
  correctAnswer: "tRNA",
  explanation: "tRNA is the smallest RNA type and functions in bringing amino acids during translation.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "RNA Structure and Function"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-03",
  type: "discrete",
  question: "Which of the following is not considered a pyrimidine?",
  options: [
      "C",
      "T",
      "U",
      "G"
  ],
  correctAnswer: "G",
  explanation: "Guanine is a purine, while cytosine, thymine, and uracil are pyrimidines.",
  topic: "Biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1A",
  "disciplines": [
      "Biology"
  ],
  "subtopics": [
      "DNA/RNA Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-04",
  type: "discrete",
  question: "Which of the following is a correctly paired set of DNA nucleotides?",
  options: [
      "A-G",
      "C-G",
      "A-U",
      "G-T"
  ],
  correctAnswer: "C-G",
  explanation: "Cytosine and guanine form three hydrogen bonds and are correctly paired in DNA.",
  topic: "Biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1A",
  "disciplines": [
      "Biology"
  ],
  "subtopics": [
      "DNA/RNA Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-05",
  type: "discrete",
  question: "Which of the following characterizes a Western blot?",
  options: [
      "Antibody/protein hybridization",
      "DNA/RNA combination",
      "RNA transcription",
      "Polymerase chain reaction"
  ],
  correctAnswer: "Antibody/protein hybridization",
  explanation: "Western blots use antibodies to detect specific proteins.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1D",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "Protein Analysis Techniques"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-06",
  type: "discrete",
  question: "Which of the following is not considered a pyrimidine?",
  options: [
      "C",
      "T",
      "U",
      "G"
  ],
  correctAnswer: "G",
  explanation: "Guanine is a purine, not a pyrimidine.",
  topic: "Biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1A",
  "disciplines": [
      "Biology"
  ],
  "subtopics": [
      "DNA/RNA Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-07",
  type: "discrete",
  question: "Down syndrome is directly linked to a genetic abnormality of which chromosome?",
  options: [
      "XXII",
      "XXI",
      "XIIX",
      "XV"
  ],
  correctAnswer: "XXI",
  explanation: "Down syndrome is caused by trisomy 21, an extra copy of chromosome 21.",
  topic: "Biochemistry",
  "foundationalConcept": "2",
  "contentCategory": "2C",
  "disciplines": [
      "Biology"
  ],
  "subtopics": [
      "Genetic Disorders"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-08",
  type: "discrete",
  question: "Which of the following is a characteristic of the Hardy-Weinberg law?",
  options: [
      "Mating between species occurs at a set rate.",
      "Migration is a considerable factor.",
      "Mutation occurs at the locus",
      "Genotype selection does not occur at the locus"
  ],
  correctAnswer: "Genotype selection does not occur at the locus",
  explanation: "Hardy-Weinberg assumes no selection occurs\u2014allele frequencies remain constant.",
  topic: "Biochemistry",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "Biology"
  ],
  "subtopics": [
      "Genetic Variation",
      "Population Genetics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "bio-09",
  type: "discrete",
  question: "Which of the following is not an activated carrier?",
  options: [
      "ATP",
      "SAM",
      "TPP",
      "GMP"
  ],
  correctAnswer: "GMP",
  explanation: "GMP is a nucleotide, but not a common activated carrier in metabolism.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1C",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "Metabolism",
      "High-Energy Molecules"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-10",
  type: "discrete",
  question: "The end product of the TCA cycle produces ____ NADH.",
  options: [
      "3",
      "4",
      "5",
      "6"
  ],
  correctAnswer: "3",
  explanation: "One turn of the TCA cycle generates 3 NADH molecules.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1C",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "TCA Cycle"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-11",
  type: "discrete",
  question: "How many ATP are required to transform pyruvate into glucose?",
  options: [
      "5",
      "6",
      "7",
      "8"
  ],
  correctAnswer: "6",
  explanation: "Gluconeogenesis consumes 6 ATP equivalents to synthesize one glucose from pyruvate.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1C",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "Gluconeogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-12",
  type: "discrete",
  question: "Which of the following is not a derivative of the amino acid tryptophan?",
  options: [
      "Melatonin",
      "Serotonin",
      "Creatine",
      "Niacin"
  ],
  correctAnswer: "Creatine",
  explanation: "Creatine is derived from glycine, arginine, and methionine, not tryptophan.",
  topic: "biochemistry",
  "foundationalConcept": "1",
  "contentCategory": "1A",
  "disciplines": [
      "Biochemistry"
  ],
  "subtopics": [
      "Amino Acid Derivatives"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-105",
  topic: "biochemistry",
  type: "discrete",
  question: "Which of the following Vitamins is not stored in the Liver?",
  options: [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D"
  ],
  correctAnswer: "Vitamin C",
  explanation: "Vitamin C is water-soluble and not stored in the liver, unlike fat-soluble vitamins A, D, and B complex vitamins that are stored to some extent.",
  "foundationalConcept": "2",
  "contentCategory": "2B",
  "disciplines": [
      "BIOCHEM"
  ],
  "subtopics": [
      "Vitamins",
      "Liver Function"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-128",
  topic: "biochemistry",
  type: "discrete",
  question: "_____ reactions produce heat.",
  options: [
      "Endothermic",
      "Exothermic",
      "Hydrogen",
      "Buffered"
  ],
  correctAnswer: "Exothermic",
  explanation: "Exothermic reactions release energy as heat, causing the surrounding environment to warm.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "BIOCHEM"
  ],
  "subtopics": [
      "Thermodynamics",
      "Reaction Energetics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-136",
  topic: "biochemistry",
  type: "discrete",
  question: "Which of the following is considered a component of lipids?",
  options: [
      "Plasma cells",
      "Fatty acids",
      "Nucleic acids",
      "Zinc"
  ],
  correctAnswer: "Fatty acids",
  explanation: "Fatty acids are the building blocks of many lipids, forming structures such as triglycerides and phospholipids.",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIOCHEM"
  ],
  "subtopics": [
      "Lipids",
      "Fatty Acids"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// organic chemistry 3 mandatory
{
  id: "chem-42",
  type: "discrete",
  question: "Which nuclide is a radioisotope used in the study of organic reaction mechanisms?",
  options: [
      "Carbon-12",
      "Carbon-14",
      "Uranium-235",
      "Uranium-238"
  ],
  correctAnswer: "Carbon-14",
  explanation: "Carbon-14 is a radioactive isotope used to trace chemical pathways and mechanisms in organic reactions.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Nuclear Chemistry"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-44",
  type: "discrete",
  question: "Aldehydes can be synthesized by the oxidation of",
  options: [
      "Primary alcohols",
      "Secondary alcohols",
      "Organic acids",
      "Inorganic acids"
  ],
  correctAnswer: "Primary alcohols",
  explanation: "Primary alcohols can be oxidized to aldehydes.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Organic Chemistry"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-45",
  type: "discrete",
  question: "Which pair of names refers to the same compound?",
  options: [
      "Ethyne and Acetylene",
      "Ethyne and Ethene",
      "Ethane and Acetylene",
      "Ethane and Ethene"
  ],
  correctAnswer: "Ethyne and Acetylene",
  explanation: "Ethyne is the IUPAC name and acetylene is the common name for the same compound: C2H2.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Nomenclature"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// General Chemistry 3 mandatory
{
  id: "chem-68",
  topic: "generalChemistry",
  type: "discrete",
  question: "Which element is found in potassium chlorate and zinc nitrate?",
  options: [
      "Hydrogen",
      "Oxygen",
      "Potassium",
      "Zinc"
  ],
  correctAnswer: "Oxygen",
  explanation: "Both potassium chlorate (KClO3) and zinc nitrate (Zn(NO3)2) contain oxygen as part of their chemical structure.",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Chemical Compounds",
      "Periodic Table"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-69",
  topic: "generalChemistry",
  type: "discrete",
  question: "Atoms of which element have the weakest attraction for electrons?",
  options: [
      "Na",
      "P",
      "Si",
      "S"
  ],
  correctAnswer: "Na",
  explanation: "Sodium (Na) has a relatively low electronegativity compared to the other elements listed, indicating a weaker attraction for electrons.",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Periodic Trends",
      "Electronegativity"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-70",
  topic: "generalChemistry",
  type: "discrete",
  question: "Which element is classified as a metalloid?",
  options: [
      "Sulfur",
      "Silicon",
      "Barium",
      "Bromine"
  ],
  correctAnswer: "Silicon",
  explanation: "Silicon (Si) is a metalloid because it has properties that are intermediate between metals and nonmetals.",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Periodic Table",
      "Metalloids"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// extra bio 105
{
  id: "bio-137",
  topic: "biology",
  type: "discrete",
  question: "Blood enters the lungs from which chamber of the heart?",
  options: [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
  ],
  correctAnswer: "Right ventricle",
  explanation: "The right ventricle pumps deoxygenated blood into the pulmonary arteries, which carry it to the lungs for oxygenation.",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "biology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-138",
  topic: "biology",
  type: "discrete",
  question: "Excessive consumption of alcohol is most likely to damage which organ of the body over a long period of time?",
  options: [
      "Kidney",
      "Liver",
      "Pancreas",
      "Gallbladder"
  ],
  correctAnswer: "Liver",
  explanation: "The liver metabolizes alcohol, and chronic excessive intake can lead to liver damage, including fatty liver, hepatitis, and cirrhosis.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Liver Function",
      "Alcohol Metabolism"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-139",
  topic: "biology",
  type: "discrete",
  question: "A molecule of hemoglobin can hold how many molecules of oxygen in the blood for transport?",
  options: [
      "2",
      "4",
      "6",
      "8"
  ],
  correctAnswer: "4",
  explanation: "Each hemoglobin molecule has four heme groups, and each heme can bind one oxygen molecule, allowing one hemoglobin molecule to transport up to four oxygen molecules.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Respiratory Physiology",
      "Hemoglobin Function"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-140",
  topic: "biology",
  type: "discrete",
  question: "Which of the following best describes the biomechanics of breathing?",
  options: [
      "Pump handle motion",
      "Lever action",
      "Inspiration",
      "Expiration"
  ],
  correctAnswer: "Pump handle motion",
  explanation: "The pump handle motion describes the biomechanical movement of the ribs as they elevate and expand during breathing, increasing thoracic cavity volume.",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Respiratory Mechanics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-141",
  topic: "biology",
  type: "discrete",
  question: "Animals that eat meat almost exclusively are known as:",
  options: [
      "Herbivores",
      "Carnivores",
      "Arthropods",
      "Prolific organisms"
  ],
  correctAnswer: "Carnivores",
  explanation: "Carnivores are animals that primarily consume meat as their main dietary source.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Animal Physiology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-142",
  topic: "biology",
  type: "discrete",
  question: "The physical expressions of a gene are known as an organism's:",
  options: [
      "Transcription",
      "Genotype",
      "Phenotype",
      "Translation"
  ],
  correctAnswer: "Phenotype",
  explanation: "The phenotype refers to the observable characteristics of an organism, resulting from the expression of its genotype.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Genetics",
      "Gene Expression"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-143",
  topic: "biology",
  type: "discrete",
  question: "Neurons connect together at a ______.",
  options: [
      "Synergy",
      "Terminal site",
      "Docking station",
      "Synapse"
  ],
  correctAnswer: "Synapse",
  explanation: "A synapse is the junction where one neuron communicates with another neuron or effector cell through neurotransmitters.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neurophysiology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-144",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is another word for the kneecap in the human body?",
  options: [
      "Pisiform",
      "Meniscus",
      "Popliteal bursa",
      "Patella"
  ],
  correctAnswer: "Patella",
  explanation: "The patella, commonly referred to as the kneecap, is a triangular bone located at the front of the knee joint.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Skeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-145",
  topic: "biology",
  type: "discrete",
  question: "Which of the following describes the shoulder joint",
  options: [
      "Ball and socket joint",
      "Saddle joint",
      "Hinge joint",
      "Pivot joint"
  ],
  correctAnswer: "Ball and socket joint",
  explanation: "The shoulder joint is a ball-and-socket joint that allows a wide range of motion in multiple directions.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Skeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-146",
  topic: "biology",
  type: "discrete",
  question: "The organ of Corti is found in what area of the body?",
  options: [
      "Mouth",
      "Ear",
      "Nose",
      "Lungs"
  ],
  correctAnswer: "Ear",
  explanation: "The organ of Corti is located within the cochlea of the inner ear and is responsible for converting sound vibrations into neural signals.",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Hearing",
      "Sensory Systems"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-147",
  topic: "biology",
  type: "discrete",
  question: "The condition of rickets is associated with a deficiency in which vitamin?",
  options: [
      "A",
      "C",
      "D",
      "Z"
  ],
  correctAnswer: "D",
  explanation: "Rickets is caused by a vitamin D deficiency, which leads to improper calcium absorption and weak, softened bones.",
  "foundationalConcept": "2",
  "contentCategory": "2B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Vitamins",
      "Bone Health"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-149",
  topic: "biology",
  type: "discrete",
  question: "The X cranial nerve is the ____ nerve.",
  options: [
      "Abducens",
      "Hypoglossal",
      "Facial",
      "Vagus"
  ],
  correctAnswer: "Vagus",
  explanation: "The vagus nerve (cranial nerve X) is responsible for various autonomic and sensory functions, including control of the heart and digestive tract.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neuroanatomy",
      "Cranial Nerves"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-150",
  topic: "biology",
  type: "discrete",
  question: "Which chamber of the heart pumps blood to the systemic circulation?",
  options: [
      "Left Atrium",
      "Right Atrium",
      "Left Ventricle",
      "Right Ventricle"
  ],
  correctAnswer: "Left Ventricle",
  explanation: "The left ventricle pumps oxygenated blood into the aorta and systemic circulation, delivering it to the rest of the body.",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "biology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-151",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not a muscle identified in the rotator cuff?",
  options: [
      "Teres Major",
      "Teres Minor",
      "Infraspinatus",
      "Supraspinatus"
  ],
  correctAnswer: "Teres Major",
  explanation: "The rotator cuff consists of the Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis muscles. Teres Major is not part of the rotator cuff.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-152",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not a component of the unhappy triad?",
  options: [
      "MCL",
      "PCL",
      "ACL",
      "Medial Meniscus"
  ],
  correctAnswer: "PCL",
  explanation: "The unhappy triad typically involves injuries to the ACL, MCL, and Medial Meniscus. The PCL is not commonly part of this triad.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-153",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not included in the femoral triangle?",
  options: [
      "Femoral Artery",
      "Femoral Nerve",
      "Femoral Vein",
      "Femoral Ligament"
  ],
  correctAnswer: "Femoral Ligament",
  explanation: "The femoral triangle includes the femoral nerve, artery, and vein. There is no structure called the femoral ligament.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Musculoskeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-154",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not a component of the carotid sheath?",
  options: [
      "Cranial nerve X",
      "Common carotid artery",
      "Internal jugular vein",
      "Cranial nerve IX"
  ],
  correctAnswer: "Cranial nerve IX",
  explanation: "The carotid sheath contains the common carotid artery, internal jugular vein, and cranial nerve X. Cranial nerve IX is not included.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Cardiovascular Anatomy",
      "Neuroanatomy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-155",
  topic: "biology",
  type: "discrete",
  question: "Which of the following spinal dermatome level corresponds with the landmark of the inguinal ligament?",
  options: [
      "T10",
      "L1",
      "L3",
      "L5"
  ],
  correctAnswer: "L1",
  explanation: "The L1 dermatome corresponds to the inguinal ligament region.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Dermatomes"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-156",
  topic: "biology",
  type: "discrete",
  question: "Which of the following nerves innervates the deltoid?",
  options: [
      "Radial",
      "Cranial nerve XI",
      "Subscapular",
      "Axillary"
  ],
  correctAnswer: "Axillary",
  explanation: "The axillary nerve innervates the deltoid muscle, allowing shoulder abduction.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-157",
  topic: "biology",
  type: "discrete",
  question: "Wrist extensors are primarily controlled by what nerve?",
  options: [
      "Radial",
      "Ulnar",
      "Median",
      "Tibial"
  ],
  correctAnswer: "Radial",
  explanation: "The radial nerve innervates most of the wrist extensors, allowing wrist extension.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System",
      "Peripheral Nerves"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-158",
  topic: "biology",
  type: "discrete",
  question: "Adductor pollicis in the hand is controlled by which nerve?",
  options: [
      "Radial",
      "Ulnar",
      "Median",
      "Tibial"
  ],
  correctAnswer: "Ulnar",
  explanation: "The ulnar nerve controls the adductor pollicis, which adducts the thumb.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System",
      "Peripheral Nerves"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-159",
  topic: "biology",
  type: "discrete",
  question: "Which of the following arteries is the most frequent site of coronary artery stenosis?",
  options: [
      "LCA",
      "RCA",
      "LAD",
      "PD"
  ],
  correctAnswer: "LAD",
  explanation: "The left anterior descending (LAD) artery is the most common site of coronary artery stenosis, often leading to heart attacks.",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Cardiovascular Anatomy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-160",
  topic: "biology",
  type: "discrete",
  question: "Which of the following nerves is not directly linked to the L2-L3 spinal level?",
  options: [
      "Tibial",
      "Obturator",
      "Femoral"
  ],
  correctAnswer: "Tibial",
  explanation: "The tibial nerve originates from the sacral plexus, not from the L2-L3 levels of the lumbar plexus.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System",
      "Peripheral Nerves"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-161",
  topic: "biology",
  type: "discrete",
  question: "Which of the following passageways contain the maxillary nerve and blood vessels?",
  options: [
      "Stylomastoid foramen",
      "Inferior orbital fissure",
      "Foramen ovale",
      "Carotid canal"
  ],
  correctAnswer: "Inferior orbital fissure",
  explanation: "The maxillary nerve and associated blood vessels pass through the inferior orbital fissure.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Neuroanatomy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-162",
  topic: "biology",
  type: "discrete",
  question: "Which of the following passageways contain the facial nerve and blood vessels?",
  options: [
      "Stylomastoid foramen",
      "Inferior orbital fissure",
      "Foramen ovale",
      "Carotid canal"
  ],
  correctAnswer: "Stylomastoid foramen",
  explanation: "The facial nerve and associated blood vessels pass through the stylomastoid foramen.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Neuroanatomy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-163",
  topic: "biology",
  type: "discrete",
  question: "Which of the following passageways contain the internal carotid artery?",
  options: [
      "Foramen rotundum",
      "Condylar canal",
      "Foramen ovale",
      "Carotid canal"
  ],
  correctAnswer: "Carotid canal",
  explanation: "The internal carotid artery passes through the carotid canal.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Cardiovascular Anatomy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-164",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is the most common site of disc herniation?",
  options: [
      "C6-7",
      "T12-L1",
      "L4-5",
      "L5-S1"
  ],
  correctAnswer: "L5-S1",
  explanation: "Disc herniation is most commonly observed at the L5-S1 level.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System",
      "Neuroanatomy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-165",
  topic: "biology",
  type: "discrete",
  question: "Which of the following ligaments is not found in the knee?",
  options: [
      "Patellar ligament",
      "Oblique popliteal ligament",
      "Arcuate popliteal ligament",
      "Deltoid ligament"
  ],
  correctAnswer: "Deltoid ligament",
  explanation: "The deltoid ligament is found in the ankle, not the knee.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-166",
  topic: "biology",
  type: "discrete",
  question: "Which of the following nerves innervates the teres minor muscle?",
  options: [
      "Subscapular nerve",
      "Suprascapular nerve",
      "Axillary nerve",
      "Pectoral nerve"
  ],
  correctAnswer: "Axillary nerve",
  explanation: "The axillary nerve innervates the teres minor muscle.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-167",
  topic: "biology",
  type: "discrete",
  question: "Which of the following nerves innervates the pronator teres muscle?",
  options: [
      "Radial",
      "Median",
      "Musculocutaneous",
      "Ulnar"
  ],
  correctAnswer: "Median",
  explanation: "The median nerve innervates the pronator teres muscle.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Musculoskeletal System",
      "Peripheral Nerves"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-168",
  topic: "biology",
  type: "discrete",
  question: "Which of the following supplies the muscles of the perineum?",
  options: [
      "Pudendal nerve",
      "Sciatic nerve",
      "Femoral nerve",
      "Tibial nerve"
  ],
  correctAnswer: "Pudendal nerve",
  explanation: "The pudendal nerve supplies the muscles of the perineum.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Peripheral Nerves"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-169",
  topic: "biology",
  type: "discrete",
  question: "Which of the following eye muscles rotates the eye downward and away from midline?",
  options: [
      "Inferior oblique",
      "Superior oblique",
      "Inferior rectus",
      "Superior rectus"
  ],
  correctAnswer: "Superior oblique",
  explanation: "The superior oblique muscle rotates the eye downward and away from the midline.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Eye Muscles"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-170",
  topic: "biology",
  type: "discrete",
  question: "Which of the following eye muscles rotates the eye upward and toward midline?",
  options: [
      "Inferior oblique",
      "Superior oblique",
      "Inferior rectus",
      "Superior rectus"
  ],
  correctAnswer: "Superior rectus",
  explanation: "The superior rectus muscle rotates the eye upward and toward the midline.",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Anatomy",
      "Eye Muscles"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-172",
  topic: "biology",
  type: "discrete",
  question: "Which of the following matches the definition: The loss of circulatory fluids into interstitial spaces?",
  options: [
      "Hypovolemia",
      "Necrosis",
      "Eschar",
      "Maceration"
  ],
  correctAnswer: "Hypovolemia",
  explanation: "Hypovolemia refers to the loss of circulatory fluid, which can occur when fluid shifts into interstitial spaces.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Circulatory System"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-173",
  topic: "biology",
  type: "discrete",
  question: "An emollient has a/an _____ effect.",
  options: [
      "Pruritic",
      "Antipruritic",
      "Rupture",
      "Impetigo"
  ],
  correctAnswer: "Pruritic",
  explanation: "Emollients are substances that soften and soothe the skin, having a pruritic effect.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Dermatology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-174",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is the outermost layer of the epidermis?",
  options: [
      "Stratum spinosum",
      "Stratum corneum",
      "Stratum granulosum",
      "Stratum basale"
  ],
  correctAnswer: "Stratum corneum",
  explanation: "The stratum corneum is the outermost layer of the epidermis and consists of dead keratinized cells.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Skin Anatomy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-175",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is the deepest layer of the epidermis?",
  options: [
      "Stratum spinosum",
      "Stratum corneum",
      "Stratum granulosum",
      "Stratum basale"
  ],
  correctAnswer: "Stratum basale",
  explanation: "The stratum basale is the deepest layer of the epidermis, where new cells are generated.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Skin Anatomy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-176",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is beneath the stratum corneum?",
  options: [
      "Stratum spinosum",
      "Stratum corneum",
      "Stratum granulosum",
      "Stratum basale"
  ],
  correctAnswer: "Stratum granulosum",
  explanation: "The stratum granulosum lies directly beneath the stratum corneum and above the stratum spinosum.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Skin Anatomy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-178",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is another name for blackheads associated with acne?",
  options: [
      "Pustules",
      "Sebaceous",
      "Eccrine",
      "Comedones"
  ],
  correctAnswer: "Comedones",
  explanation: "Blackheads and whiteheads associated with acne are referred to as comedones.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Dermatology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-179",
  topic: "biology",
  type: "discrete",
  question: "Which of the following identifies skin from a cadaver used in a burn graft?",
  options: [
      "Homograft",
      "Autograft",
      "Allograft",
      "Xenograft"
  ],
  correctAnswer: "Homograft",
  explanation: "A homograft is a graft taken from the same species, such as skin from a cadaver, for a burn victim.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Burn Care",
      "Grafting"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-180",
  topic: "biology",
  type: "discrete",
  question: "Sebaceous glands secrete _______.",
  options: [
      "Sebum",
      "Impetigo",
      "Serous",
      "Sirius"
  ],
  correctAnswer: "Sebum",
  explanation: "Sebaceous glands secrete sebum, which helps to lubricate the skin and hair.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Skin Anatomy",
      "Sebaceous Glands"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-181",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not directly associated with the lymphatic pathway?",
  options: [
      "Lymphatic trunk",
      "Collecting duct",
      "Subclavian vein",
      "Carotid arteries"
  ],
  correctAnswer: "Carotid arteries",
  explanation: "The carotid arteries are part of the circulatory system, not the lymphatic pathway.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Lymphatic System"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-182",
  topic: "biology",
  type: "discrete",
  question: "The thymus is responsible for secreting _____ from epithelial cells.",
  options: [
      "Thymosin",
      "Growth hormone",
      "Macrophages",
      "Plasma cells"
  ],
  correctAnswer: "Thymosin",
  explanation: "The thymus secretes thymosin, which is involved in T-cell maturation.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Lymphatic System",
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-183",
  topic: "biology",
  type: "discrete",
  question: "Which of the following types of immunoglobulins is the most responsible for promoting allergic reactions?",
  options: [
      "IgA",
      "IgM",
      "IgD",
      "IgE"
  ],
  correctAnswer: "IgE",
  explanation: "IgE is heavily involved in allergic responses by binding allergens and triggering histamine release from mast cells.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-184",
  topic: "biology",
  type: "discrete",
  question: "Which of the following types of immunoglobulins is located on the surface of most B lymphocytes?",
  options: [
      "IgA",
      "IgM",
      "IgD",
      "IgE"
  ],
  correctAnswer: "IgD",
  explanation: "IgD is found on the surface of immature B cells and plays a role in initiating B cell activation.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-185",
  topic: "biology",
  type: "discrete",
  question: "Which of the following types of immunoglobulins does not cross the barrier between mother and infant in the womb?",
  options: [
      "IgA",
      "IgM",
      "IgD",
      "IgE"
  ],
  correctAnswer: "IgA",
  explanation: "IgA does not cross the placenta; it is passed to infants via breast milk.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-186",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not an autoimmune disease?",
  options: [
      "Graves disease",
      "Myasthenia gravis",
      "Insulin-dependent diabetes mellitus",
      "Alzheimer's disease"
  ],
  correctAnswer: "Alzheimer's disease",
  explanation: "Alzheimer's disease is a neurodegenerative disorder, not an autoimmune disease.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-187",
  topic: "biology",
  type: "discrete",
  question: "T-cell activation requires a/an _______ cell.",
  options: [
      "Activation",
      "Accessory",
      "Plasma",
      "Helper"
  ],
  correctAnswer: "Accessory",
  explanation: "T-cell activation often requires antigen-presenting cells, also referred to as accessory cells.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-188",
  topic: "biology",
  type: "discrete",
  question: "The thymus is located with the _______.",
  options: [
      "Mediastinum",
      "Peristinum",
      "Epistinum",
      "Endostinum"
  ],
  correctAnswer: "Mediastinum",
  explanation: "The thymus is located within the mediastinum, above the heart.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Lymphatic System",
      "Anatomy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-189",
  topic: "biology",
  type: "discrete",
  question: "Which of the following statements is false regarding the spleen?",
  options: [
      "Divided up into lobules",
      "Similar to a large lymph node",
      "Contains macrophages",
      "Limited blood within the lobules"
  ],
  correctAnswer: "Limited blood within the lobules",
  explanation: "The spleen is a highly vascular organ, so its lobules contain a significant amount of blood.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Lymphatic System"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-190",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not considered a central location of lymph nodes?",
  options: [
      "Cervical",
      "Axillary",
      "Inguinal",
      "Tibial"
  ],
  correctAnswer: "Tibial",
  explanation: "Tibial lymph nodes are not commonly referred to; the central locations are cervical, axillary, and inguinal.",
  "foundationalConcept": "3",
  "contentCategory": "3D",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Lymphatic System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-191",
  topic: "biology",
  type: "discrete",
  question: "Lymphocytes that reach the thymus become _____.",
  options: [
      "T-cells",
      "B-cells",
      "Plasma cells",
      "Beta cells"
  ],
  correctAnswer: "T-cells",
  explanation: "Lymphocytes that migrate to the thymus mature into T-cells.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-192",
  topic: "biology",
  type: "discrete",
  question: "Lymphocytes that do not reach the thymus become _____.",
  options: [
      "T-cells",
      "B-cells",
      "Plasma cells",
      "Beta cells"
  ],
  correctAnswer: "B-cells",
  explanation: "Lymphocytes that do not migrate to the thymus remain in the bone marrow and differentiate into B-cells.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-193",
  topic: "biology",
  type: "discrete",
  question: "Which of the following types of immunoglobulins binds complement?",
  options: [
      "IgA",
      "IgD",
      "IgE",
      "IgG"
  ],
  correctAnswer: "IgG",
  explanation: "IgG is the most abundant immunoglobulin and can activate the complement system.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-194",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is a key component of cytotoxic T cells?",
  options: [
      "CD2",
      "CD4",
      "CD8",
      "CD10"
  ],
  correctAnswer: "CD8",
  explanation: "CD8 is the marker for cytotoxic T cells, which are involved in killing virus-infected cells.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-195",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not a primary target group of T cells?",
  options: [
      "Viruses",
      "Toxins",
      "Fungi",
      "TB"
  ],
  correctAnswer: "Toxins",
  explanation: "T cells target pathogens like viruses, fungi, and TB-infected cells, but not toxins.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Immunology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-201",
  topic: "biology",
  type: "discrete",
  question: "Which of the following microorganisms are not matched correctly with the appropriate isolation media?",
  options: [
      "Fungi -Sabourand's agar",
      "Neisseria gonorrhoeae -Pink colonies media",
      "Haemophilus influenzae -Chocolate agar",
      "Mycobacterium tuberculosis -Lowenstein-Jensen agar"
  ],
  correctAnswer: "Neisseria gonorrhoeae -Pink colonies media",
  explanation: "Neisseria gonorrhoeae is correctly isolated using Thayer-Martin agar, not 'pink colonies media.'",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Microbial Culture"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-202",
  topic: "biology",
  type: "discrete",
  question: "Which of the following diseases and bacteria are matched up incorrectly?",
  options: [
      "Cellulitis -Pasteurella multocida",
      "Tularemia -Francisella tularensis",
      "Gastritis -Heliobacter pylori",
      "Lyme disease -Yersinia pestis"
  ],
  correctAnswer: "Lyme disease -Yersinia pestis",
  explanation: "Lyme disease is caused by Borrelia burgdorferi, not Yersinia pestis.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Microbial Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-203",
  topic: "biology",
  type: "discrete",
  question: "Which of the following diseases and bacteria are matched up incorrectly?",
  options: [
      "Treponema pallidum -Syphilis",
      "Tinea nigra -Cladosporium werneckii",
      "Borrelia burgdorferi -Lyme disease",
      "Yersinia enterocolitica -Diptheria"
  ],
  correctAnswer: "Yersinia enterocolitica -Diptheria",
  explanation: "Diphtheria is caused by Corynebacterium diphtheriae, not Yersinia enterocolitica.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Microbial Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-205",
  topic: "biology",
  type: "discrete",
  question: "Which of the following signs and symptoms is not linked to Haemophilus influenzae?",
  options: [
      "Otitis media",
      "Pneumonia",
      "Malaria",
      "Epiglottis"
  ],
  correctAnswer: "Malaria",
  explanation: "Haemophilus influenzae is associated with infections such as otitis media, pneumonia, and epiglottitis, but not malaria.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Bacterial Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-206",
  topic: "biology",
  type: "discrete",
  question: "The Tsetse fly is a transmission factor for which of the following organisms?",
  options: [
      "Trichomonas vaginalis",
      "Trypanosoma gambiense",
      "Entamoeba histolytica",
      "Toxoplasma"
  ],
  correctAnswer: "Trypanosoma gambiense",
  explanation: "The Tsetse fly is the vector for Trypanosoma gambiense, which causes African trypanosomiasis (sleeping sickness).",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Microbial Transmission"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-207",
  topic: "biology",
  type: "discrete",
  question: "The Ixodes tick is a transmission factor for which of the following organisms?",
  options: [
      "Trichomonas vaginalis",
      "Leishmania donovani",
      "Babesia",
      "Giardia lamblia"
  ],
  correctAnswer: "Babesia",
  explanation: "The Ixodes tick transmits Babesia, a protozoan parasite that can cause babesiosis.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Microbial Transmission"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-208",
  topic: "biology",
  type: "discrete",
  question: "Chagas' disease is commonly treated with Nifurtimox and is linked to the ____ microorganism.",
  options: [
      "Naegleria",
      "Schistosoma",
      "Wucheria bancrofti",
      "Trypanosoma cruzi"
  ],
  correctAnswer: "Trypanosoma cruzi",
  explanation: "Chagas' disease is caused by the protozoan Trypanosoma cruzi, which is transmitted by triatomine bugs.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Microbial Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-209",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not fungal related?",
  options: [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Tinea nigra",
      "Chlamydiae"
  ],
  correctAnswer: "Chlamydiae",
  explanation: "Chlamydiae are a group of bacteria, not fungi.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Fungal Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-210",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not a DNA virus?",
  options: [
      "Adenovirus",
      "Calicivirus",
      "Papovirus",
      "Poxvirus"
  ],
  correctAnswer: "Calicivirus",
  explanation: "Caliciviruses are single-stranded RNA viruses, not DNA viruses.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Viral Structure"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-211",
  topic: "biology",
  type: "discrete",
  question: "Which of the following is not a RNA virus?",
  options: [
      "Reovirus",
      "Orthomyxovirus",
      "Deltavirus",
      "Herpesvirus"
  ],
  correctAnswer: "Herpesvirus",
  explanation: "Herpesviruses are double-stranded DNA viruses, not RNA viruses.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Viral Structure"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-212",
  topic: "biology",
  type: "discrete",
  question: "Which of the following viruses is not a double strand linear DNA virus?",
  options: [
      "Poxvirus",
      "Papovavirus",
      "Adenovirus",
      "Herpesvirus"
  ],
  correctAnswer: "Papovavirus",
  explanation: "Papovaviruses, such as papillomaviruses, have circular double-stranded DNA genomes.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Viral Structure"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-213",
  topic: "biology",
  type: "discrete",
  question: "Which of the following viruses is not a single strand linear RNA virus?",
  options: [
      "Togavirus",
      "Retrovirus",
      "Bunyavirus",
      "Picornavirus"
  ],
  correctAnswer: "Bunyavirus",
  explanation: "Bunyaviruses have segmented single-stranded RNA genomes, not a single linear strand.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Viral Structure"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-214",
  topic: "biology",
  type: "discrete",
  question: "The Tzanck test is not used on which of the following viruses?",
  options: [
      "VZV",
      "HSV-2",
      "HHV-8",
      "HSV-1"
  ],
  correctAnswer: "HHV-8",
  explanation: "The Tzanck test is commonly used to detect HSV-1, HSV-2, and VZV, but not HHV-8.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Viral Diagnosis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-215",
  topic: "biology",
  type: "discrete",
  question: "Which of the following microorganisms has not been linked to UTI's?",
  options: [
      "e. coli",
      "Pseudomonas",
      "Klebsiella",
      "Haemophilus"
  ],
  correctAnswer: "Haemophilus",
  explanation: "Haemophilus species are not commonly associated with urinary tract infections.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Bacterial Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-301",
  type: "discrete",
  question: "Schwann cells are located in the _____.",
  options: [
      "PNS",
      "CNS"
  ],
  correctAnswer: "PNS",
  explanation: "Schwann cells are glial cells in the peripheral nervous system (PNS) responsible for the formation of myelin.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "psychology",
      "Glial Cells"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "bio-302",
  type: "discrete",
  question: "Which of the following types of cells is the most common in the CNS?",
  options: [
      "Astrocytes",
      "Oligocytes",
      "Neurocytes",
      "Celiac cells"
  ],
  correctAnswer: "Astrocytes",
  explanation: "Astrocytes are the most abundant glial cells in the CNS and perform many support functions.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "psychology",
      "Glial Cells"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "bio-303",
  type: "discrete",
  question: "Which of the following is a regulatory protein in the cytoplasm that helps the processes at the synapse?",
  options: [
      "Calmodulin",
      "Protein kinase",
      "Ligand",
      "Gap protein"
  ],
  correctAnswer: "Calmodulin",
  explanation: "Calmodulin is a calcium-binding messenger protein that plays a role in synaptic function and neurotransmitter release.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO",
      "BIOC"
  ],
  "subtopics": [
      "Neurotransmission",
      "Signal Transduction"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "bio-304",
  type: "discrete",
  question: "The primary effect of cocaine on the nervous system is that cocaine blocks the re-uptake of ____.",
  options: [
      "Monoamines",
      "Transamines",
      "Catecholamine",
      "Monoamine oxidase"
  ],
  correctAnswer: "Monoamines",
  explanation: "Cocaine acts by blocking the reuptake of monoamine neurotransmitters such as dopamine, serotonin, and norepinephrine.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO",
      "PSY"
  ],
  "subtopics": [
      "Drugs and Behavior"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "bio-305",
  type: "discrete",
  question: "Which of the following amino acids can function as a neurotransmitter in the CNS?",
  options: [
      "Leucine",
      "Glutamic acid",
      "Lysine",
      "Valine"
  ],
  correctAnswer: "Glutamic acid",
  explanation: "Glutamic acid (glutamate) is the major excitatory neurotransmitter in the central nervous system.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO",
      "BIOC"
  ],
  "subtopics": [
      "Neurotransmission"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-306",
  type: "discrete",
  question: "Clostridium botulinum releases this enzyme that destroys peptide bonds.",
  options: [
      "Amylase",
      "Endopeptidases",
      "Exopeptidases",
      "Protein kinase"
  ],
  correctAnswer: "Endopeptidases",
  explanation: "Endopeptidases cleave peptide bonds within proteins and are responsible for the toxic effects of botulinum toxin.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO",
      "BIOC"
  ],
  "subtopics": [
      "Neurotoxins"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-326",
  type: "discrete",
  question: "Which of the following hormones causes increased atrial pressure and decreases sodium reabsorption in the kidneys?",
  options: [
      "Atrial natriuretic peptide",
      "PTH",
      "Aldosterone",
      "Vasopressin"
  ],
  correctAnswer: "Atrial natriuretic peptide",
  explanation: "Atrial natriuretic peptide (ANP) reduces sodium reabsorption and blood pressure by acting on the kidneys.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Hormonal Regulation of Fluid Balance"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-327",
  type: "discrete",
  question: "Angiotensin I is changed by which of the following into Angiotensin II?",
  options: [
      "ACE",
      "AVT",
      "Pepsin",
      "Adenosine"
  ],
  correctAnswer: "ACE",
  explanation: "ACE (Angiotensin-Converting Enzyme) converts Angiotensin I to Angiotensin II, a vasoconstrictor.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Renin-Angiotensin System"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-328",
  type: "discrete",
  question: "Which of the following during an electrocardiogram is associated with hypokalemia?",
  options: [
      "QRS complex",
      "U wave",
      "PR segment",
      "ST segment"
  ],
  correctAnswer: "U wave",
  explanation: "Hypokalemia is classically associated with prominent U waves on an ECG.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Cardiac Physiology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-329",
  type: "discrete",
  question: "An S3 heart sound is often associated with?",
  options: [
      "CHF",
      "COPD",
      "Atrial fib.",
      "Ventricular fib."
  ],
  correctAnswer: "CHF",
  explanation: "An S3 heart sound is commonly heard in congestive heart failure due to fluid overload.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Heart Sounds and Pathology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-330",
  type: "discrete",
  question: "Mean arterial pressure is the product of:",
  options: [
      "TPR x SV",
      "TPR x CO",
      "CO/SV",
      "SV/EDV"
  ],
  correctAnswer: "TPR x CO",
  explanation: "MAP = CO \u00d7 TPR (Cardiac Output \u00d7 Total Peripheral Resistance).",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Blood Pressure and Flow"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "psych-331",
  type: "discrete",
  question: "An ejection fraction can be calculated as:",
  options: [
      "SV/TPR",
      "CO/TPR",
      "SV/EDV",
      "CO/EDV"
  ],
  correctAnswer: "SV/EDV",
  explanation: "Ejection fraction is stroke volume divided by end-diastolic volume: EF = SV/EDV.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Cardiac Function"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-332",
  type: "discrete",
  question: "PAH is secreted in which of the following locations?",
  options: [
      "Distal tubule",
      "Loop of Henle",
      "Collecting tubule",
      "Proximal tubule"
  ],
  correctAnswer: "Proximal tubule",
  explanation: "Para-aminohippurate (PAH) is secreted by the proximal tubule of the nephron.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Kidney Function and Clearance"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-333",
  type: "discrete",
  question: "Which of the following is not an anterior pituitary gland secretion?",
  options: [
      "TSH",
      "GH",
      "Vasopressin",
      "Prolactin"
  ],
  correctAnswer: "Vasopressin",
  explanation: "Vasopressin (ADH) is secreted by the posterior pituitary, not the anterior.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Pituitary Hormones"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-334",
  type: "discrete",
  question: "Thyroid Hormone T3 does not have which of the following functions?",
  options: [
      "Stimulate bone development and growth",
      "Create beta-adrenergic responses",
      "Cause brain development",
      "Decrease calcium re-absorption"
  ],
  correctAnswer: "Decrease calcium re-absorption",
  explanation: "T3 stimulates growth and metabolism, but calcium regulation is primarily by PTH and calcitonin.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Thyroid Function"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-335",
  type: "discrete",
  question: "Which of the following does not require the pre-cursor progesterone?",
  options: [
      "Cortisol",
      "Testosterone",
      "ACTH",
      "Aldosterone"
  ],
  correctAnswer: "ACTH",
  explanation: "ACTH is a peptide hormone, not a steroid, so it does not derive from progesterone.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Steroid Hormone Synthesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-336",
  type: "discrete",
  question: "Which of the following is the source cell for the secretion Pepsinogen?",
  options: [
      "Chief cell",
      "Plasma cell",
      "G cell",
      "Parietal cell"
  ],
  correctAnswer: "Chief cell",
  explanation: "Chief cells secrete pepsinogen, which is activated to pepsin in the stomach.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Digestive Enzymes"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-337",
  type: "discrete",
  question: "Which of the following is the primary activator of zymogen secretion?",
  options: [
      "Somatostatin",
      "Secretin",
      "Acetylcholine",
      "Gastrin"
  ],
  correctAnswer: "Acetylcholine",
  explanation: "Acetylcholine activates zymogen secretion from pancreatic acinar cells.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neural Regulation of Digestion"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-338",
  type: "discrete",
  question: "Which of the following is not a function of Angiotensin II?",
  options: [
      "Causes release of aldosterone",
      "Causes vasodilation",
      "Causes increased posterior pituitary activation",
      "Elevates blood pressure"
  ],
  correctAnswer: "Causes vasodilation",
  explanation: "Angiotensin II causes vasoconstriction, not vasodilation.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Hormonal Regulation of BP"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-339",
  type: "discrete",
  question: "Which of the following is not a function of Progesterone?",
  options: [
      "Causes increased body temperature.",
      "Causes some smooth muscle relaxation.",
      "Causes increased spiral artery growth",
      "Causes activation of FSH"
  ],
  correctAnswer: "Causes activation of FSH",
  explanation: "Progesterone inhibits FSH through negative feedback mechanisms.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Female Reproductive Hormones"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-340",
  type: "discrete",
  question: "Which of the following is not a function of Estrogen?",
  options: [
      "Causes breast growth.",
      "Causes inhibition of FSH",
      "Increased follicle development",
      "Decreased overall transport proteins"
  ],
  correctAnswer: "Decreased overall transport proteins",
  explanation: "Estrogen increases hepatic synthesis of transport proteins like SHBG and TBG.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Estrogen Functions"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-414",
  type: "discrete",
  question: "Which of the following is the location where fertilization occurs?",
  options: [
      "Ovaries",
      "Vagina",
      "Uterus",
      "Fallopian Tubes"
  ],
  correctAnswer: "Fallopian Tubes",
  explanation: "Fertilization typically occurs in the ampulla of the fallopian tube, where the sperm meets the egg before implantation in the uterus.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Reproductive System",
      "Fertilization"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-415",
  type: "discrete",
  question: "Which of the following terms correspond with the phrase: a woman that is pregnant?",
  options: [
      "Gravida",
      "Parity",
      "Spermatogonia",
      "Zona pellucida"
  ],
  correctAnswer: "Gravida",
  explanation: "Gravida refers to a woman who is or has been pregnant. Parity refers to the number of pregnancies carried to a viable gestational age.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Reproduction",
      "Medical Terminology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-416",
  type: "discrete",
  question: "Which of the following develops into the ejaculatory duct and ductus deferens?",
  options: [
      "Paramesonephric duct",
      "Mesonephric duct",
      "Sympathetic duct",
      "Parasympathetic duct"
  ],
  correctAnswer: "Mesonephric duct",
  explanation: "The mesonephric (Wolffian) duct gives rise to male internal reproductive structures such as the ejaculatory duct and ductus deferens.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Reproductive Development"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-417",
  type: "discrete",
  question: "Where does spermatogenesis occur?",
  options: [
      "Seminiferous tubules",
      "Corpus spongiosoma",
      "Prostate gland",
      "Scrotum"
  ],
  correctAnswer: "Seminiferous tubules",
  explanation: "Spermatogenesis occurs in the seminiferous tubules of the testes, where sperm are produced through meiosis.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Male Reproductive System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-418",
  type: "discrete",
  question: "The tip of the sperm is called the ____.",
  options: [
      "Head",
      "Acrosome",
      "Tail",
      "Nucleus"
  ],
  correctAnswer: "Acrosome",
  explanation: "The acrosome contains enzymes that help the sperm penetrate the egg during fertilization.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Fertilization"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-419",
  type: "discrete",
  question: "Which of the following develops into: bone, connective tissue, blood, and the spleen?",
  options: [
      "Notochord",
      "Endoderm",
      "Mesoderm",
      "Ectoderm"
  ],
  correctAnswer: "Mesoderm",
  explanation: "The mesoderm gives rise to the musculoskeletal system, circulatory system, and connective tissues.",
  topic: "biology",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Embryology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-420",
  type: "discrete",
  question: "Which of the following is not a germ layer during the 3rd week of development?",
  options: [
      "Mesoderm",
      "Ectoderm",
      "Endoderm",
      "Exoderm"
  ],
  correctAnswer: "Exoderm",
  explanation: "The three primary germ layers are ectoderm, mesoderm, and endoderm. 'Exoderm' is not a recognized term.",
  topic: "biology",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Developmental Biology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-421",
  type: "discrete",
  question: "The umbilical vein carries _____ blood.",
  options: [
      "Deoxygenated",
      "Oxygenated"
  ],
  correctAnswer: "Oxygenated",
  explanation: "The umbilical vein carries oxygenated blood from the placenta to the fetus.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Fetal Circulation"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-422",
  type: "discrete",
  question: "Ovulation occurs during which of the following phases?",
  options: [
      "Menstrual",
      "Secretory",
      "Proliferative",
      "Follicle"
  ],
  correctAnswer: "Proliferative",
  explanation: "Ovulation marks the end of the proliferative phase, during which the uterine lining thickens and an oocyte is released.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Menstrual Cycle"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-423",
  type: "discrete",
  question: "Following fertilization the blastocyst secretes a hormone called?",
  options: [
      "Human Chorionic Gonadotropin",
      "Oxytocin",
      "FSH",
      "LH"
  ],
  correctAnswer: "Human Chorionic Gonadotropin",
  explanation: "hCG is secreted by the blastocyst to maintain the corpus luteum and progesterone production early in pregnancy.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Hormonal Regulation",
      "Pregnancy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-424",
  type: "discrete",
  question: "Progesterone is secreted from a female's _____ to help the implanted embryo and continue the pregnancy.",
  options: [
      "Corpus luteum",
      "Mesoderm",
      "Endoderm",
      "Thyroid"
  ],
  correctAnswer: "Corpus luteum",
  explanation: "The corpus luteum secretes progesterone after ovulation to maintain the endometrial lining.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Hormonal Regulation",
      "Reproductive System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-425",
  type: "discrete",
  question: "Which of the following is not appropriately matched with the term: Braxton Hicks contractions?",
  options: [
      "Painless",
      "Intermittent contractions",
      "Edema",
      "Irregular"
  ],
  correctAnswer: "Edema",
  explanation: "Braxton Hicks contractions are typically painless, irregular, and intermittent. Edema refers to swelling and is not a type of contraction.",
  topic: "biology",
  "foundationalConcept": "2",
  "contentCategory": "2A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Pregnancy Physiology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-426",
  type: "discrete",
  question: "Which of the following is the most common type of lung cancer?",
  options: [
      "Large cell",
      "Adenocarcinoma",
      "Oat cell",
      "Squamous cell"
  ],
  correctAnswer: "Squamous cell",
  explanation: "Squamous cell carcinoma is the most common type of lung cancer, especially in smokers, arising from bronchial epithelium.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Respiratory System",
      "Lung Cancer"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-427",
  type: "discrete",
  question: "What cell type secretes surfactant?",
  options: [
      "Plasma cell",
      "Type I alveolar cell",
      "Type II alveolar cell",
      "Type III alveolar cell"
  ],
  correctAnswer: "Type II alveolar cell",
  explanation: "Type II alveolar cells produce surfactant to reduce surface tension and prevent alveolar collapse.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Pulmonary Function",
      "Cell Biology"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// extra organic chem 2
{
  id: "chem-352",
  type: "discrete",
  question: "What is the concentration of a solution of 10 moles of copper (II) nitrate in 5.0 liters of solution?",
  options: [
      "0.50 M",
      "2.0 M",
      "5.0 M",
      "10 M"
  ],
  correctAnswer: "2.0 M",
  explanation: "Concentration = moles / volume = 10 mol / 5.0 L = 2.0 M.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Molarity"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-353",
  type: "discrete",
  question: "What is the pH of a solution with a hydronium ion concentration of .01 mole per liter?",
  options: [
      "1",
      "2",
      "10",
      "14"
  ],
  correctAnswer: "2",
  explanation: "pH = -log[H\u2083O\u207a] = -log(0.01) = 2.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "pH Calculations"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
}
  
];

// Chemical and Physical Foundations of Biological Systems
export const section1Questions: Question[] = [
  // biology 3 mandatory
  {
    id: "bio-148",
    topic: "biochemistry",
    type: "discrete",
    question: "A steroid is considered a ______.",
    options: [
        "Lipid",
        "Protein",
        "Enzyme",
        "Weak acid"
    ],
    correctAnswer: "Lipid",
    explanation: "Steroids, such as cholesterol and hormones, are classified as lipids because of their hydrophobic nature and structural composition.",
    "foundationalConcept": "2",
    "contentCategory": "2A",
    "disciplines": [
        "BIOCHEM"
    ],
    "subtopics": [
        "Lipids",
        "Steroids"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-278",
    type: "discrete",
    question: "Which of the following is not considered a fat soluble vitamin?",
    options: [
        "Vitamin A",
        "Vitamin B",
        "Vitamin K",
        "Vitamin E"
    ],
    correctAnswer: "Vitamin B",
    explanation: "Vitamin B is water-soluble, unlike vitamins A, D, E, and K, which are fat-soluble.",
    topic: "biochemistry",
    "foundationalConcept": "5",
    "contentCategory": "5D",
    "disciplines": [
        "BC",
        "CHEM"
    ],
    "subtopics": [
        "Vitamins and Nutrients"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-279",
    type: "discrete",
    question: "Which of the following vitamins will be the most common in: oils from cereal seeds, salad oils, margarine and shortenings?",
    options: [
        "Vitamin A",
        "Vitamin D",
        "Vitamin E",
        "Vitamin K"
    ],
    correctAnswer: "Vitamin E",
    explanation: "Vitamin E is abundant in vegetable oils and is known for its antioxidant properties.",
    topic: "biochemistry",
    "foundationalConcept": "5",
    "contentCategory": "5B",
    "disciplines": [
        "BC",
        "CHEM"
    ],
    "subtopics": [
        "Vitamins and Nutrients"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
// General Chemistry 17 mandatory
{
  id: "chem-71",
  topic: "generalChemistry",
  type: "discrete",
  question: "Which metal is most likely obtained by the electrolysis of its fused salt?",
  options: [
      "Au",
      "Ag",
      "Li",
      "Zn"
  ],
  correctAnswer: "Li",
  explanation: "Lithium (Li) is often obtained through the electrolysis of its fused salt, as it is highly reactive and difficult to isolate by other means.",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Electrolysis",
      "Reactivity"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-72",
  topic: "generalChemistry",
  type: "discrete",
  question: "Because of its high reactivity, which element is never found free in nature?",
  options: [
      "O",
      "F",
      "N",
      "Ne"
  ],
  correctAnswer: "F",
  explanation: "Fluorine (F) is so reactive that it always occurs in compounds rather than as a free element in nature.",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Reactivity",
      "Chemical Stability"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-73",
  topic: "generalChemistry",
  type: "discrete",
  question: "Iron corrodes more easily than aluminum and zinc because aluminum and zinc both",
  options: [
      "Are reduced",
      "Are oxidizing agents",
      "Form oxides that are self-protective",
      "Form oxides that are very reactive"
  ],
  correctAnswer: "Form oxides that are self-protective",
  explanation: "Aluminum and zinc form a stable, non-porous oxide layer that prevents further corrosion, unlike iron.",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Corrosion",
      "Oxidation"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "chem-74",
  topic: "generalChemistry",
  type: "discrete",
  question: "Which substance is produced by the Haber process?",
  options: [
      "Aluminum",
      "Ammonium",
      "Nitric acid",
      "Sulfuric acid"
  ],
  correctAnswer: "Ammonium",
  explanation: "The Haber process is used to synthesize ammonia (NH3), which can form ammonium compounds.",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Chemical Processes",
      "Industrial Chemistry"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-75",
  topic: "generalChemistry",
  type: "discrete",
  question: "Atoms of which element have the weakest attraction for electrons?",
  options: [
      "Na",
      "P",
      "Si",
      "S"
  ],
  correctAnswer: "Na",
  explanation: "Sodium (Na) has a lower electronegativity than the other elements listed, indicating a weaker attraction for electrons.",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Periodic Trends",
      "Electronegativity"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-76",
  topic: "generalChemistry",
  type: "discrete",
  question: "The observed regularities in the properties of elements are periodic functions of their",
  options: [
      "Atomic numbers",
      "Mass numbers",
      "Oxidation states",
      "Nonvalence electrons"
  ],
  correctAnswer: "Atomic numbers",
  explanation: "The periodic table is organized based on atomic numbers, which determine the elements' properties.",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Periodic Table",
      "Atomic Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-77",
  topic: "generalChemistry",
  type: "discrete",
  question: "Which physical characteristic of a solution may indicate the presence of a transition element?",
  options: [
      "Its density",
      "Its color",
      "Its effect on litmus",
      "Its effect on phenolphthalein"
  ],
  correctAnswer: "Its color",
  explanation: "Transition metals often form colored compounds or solutions due to d-d electron transitions.",
  "foundationalConcept": "5",
  "contentCategory": "5C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Transition Metals",
      "Solution Properties"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-78",
  topic: "generalChemistry",
  type: "discrete",
  question: "Which element has a crystalline lattice composed of positive ions through which electrons flow freely?",
  options: [
      "Bromine",
      "Calcium",
      "Carbon",
      "Sulfur"
  ],
  correctAnswer: "Calcium",
  explanation: "Calcium is a metal that forms a metallic lattice with free-moving valence electrons.",
  "foundationalConcept": "5",
  "contentCategory": "5C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Metallic Bonding",
      "Crystal Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-79",
  topic: "generalChemistry",
  type: "discrete",
  question: "Red litmus paper will turn blue when placed in an aqueous solution of",
  options: [
      "KCl",
      "KOH",
      "CH3COOH",
      "CH4"
  ],
  correctAnswer: "KOH",
  explanation: "KOH is a strong base, which will turn red litmus paper blue.",
  "foundationalConcept": "5",
  "contentCategory": "5C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Acids and Bases",
      "Indicators"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-80",
  topic: "generalChemistry",
  type: "discrete",
  question: "Equilibrium is attained in a chemical cell when cell voltage is equal to",
  options: [
      "+1.00 V",
      "+2.00 V",
      "0.00 V",
      "1.00 V"
  ],
  correctAnswer: "0.00 V",
  explanation: "Equilibrium in a chemical cell corresponds to a zero net voltage difference, indicating no net flow of electrons.",
  "foundationalConcept": "5",
  "contentCategory": "5C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Electrochemistry",
      "Equilibrium"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-87",
  topic: "generalChemistry",
  type: "discrete",
  question: "An electron is located between a pair of oppositely charged parallel plates. As the electron approaches the positively charged plate, the kinetic energy of the electron?",
  options: [
      "Increases",
      "Decreases",
      "Remains the same"
  ],
  correctAnswer: "Increases",
  explanation: "As the electron moves toward the positively charged plate, it accelerates due to the electric field, resulting in an increase in kinetic energy.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electric Fields",
      "Kinetic Energy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-41",
  type: "discrete",
  question: "Which organic compound is classified as a primary alcohol?",
  options: [
      "Ethylene glycol",
      "Ethanol",
      "Glycerol",
      "2-butanol"
  ],
  correctAnswer: "Ethanol",
  explanation: "Ethanol is a primary alcohol because the carbon attached to the -OH group is connected to only one other carbon atom.",
  topic: "generalChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Organic Chemistry"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-43",
  type: "discrete",
  question: "Which set contains one natural polymer and one synthetic polymer?",
  options: [
      "Cellulose and Starch",
      "Polyethylene and Nylon",
      "Protein and Starch",
      "Protein and Nylon"
  ],
  correctAnswer: "Protein and Nylon",
  explanation: "Proteins are natural polymers while nylon is a synthetic polymer.",
  topic: "generalChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Polymers"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-321",
  type: "discrete",
  question: "As a chemical bond forms between 2 hydrogen atoms in a system, energy is released and the stability of the system",
  options: [
      "Increases",
      "Decreases",
      "Remains the same"
  ],
  correctAnswer: "Increases",
  explanation: "Bond formation releases energy, lowering potential energy and increasing system stability.",
  topic: "generalChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Intermolecular and Intramolecular Forces"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "chem-322",
  type: "discrete",
  question: "In a chemical reaction, as the species is oxidized, its oxidation number",
  options: [
      "Decreases",
      "Increases",
      "Remains the same"
  ],
  correctAnswer: "Increases",
  explanation: "Oxidation involves the loss of electrons, which leads to an increase in oxidation number.",
  topic: "generalChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Redox Reactions"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-323",
  type: "discrete",
  question: "A hydrocarbon with no ring structure, no double or triple bonds is called an ______.",
  options: [
      "Alkene",
      "Alkyne",
      "Alkane",
      "Alkali"
  ],
  correctAnswer: "Alkane",
  explanation: "Alkanes are saturated hydrocarbons with only single bonds and no rings.",
  topic: "generalChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Structure and Properties of Organic Molecules"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-358",
  type: "discrete",
  question: "If the pH is greater than 7, litmus paper will turn ____.",
  options: [
      "Red",
      "Orange",
      "Neutral",
      "Blue"
  ],
  correctAnswer: "Blue",
  explanation: "Litmus paper turns blue in basic (pH > 7) solutions.",
  topic: "generalChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "pH"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// Physics 15 mandatory
{
  id: "phys-01",
  topic: "physics",
  type: "discrete",
  question: "Resistance in a circuit is generally measured in units of ____.",
  options: [
      "W",
      "\u03a9",
      "K",
      "Z"
  ],
  correctAnswer: "A",
  explanation: "Resistance is measured in ohms (symbol: \u03a9), which is represented by 'W' here, although '\u03a9' is the correct symbol.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Circuits"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-02",
  topic: "physics",
  type: "discrete",
  question: "Which of the following is the correct expression of Ohm's Law?",
  options: [
      "I = R/V",
      "R= P/V",
      "I= P/V",
      "I = V/R"
  ],
  correctAnswer: "D",
  explanation: "Ohm\u2019s Law relates current (I), voltage (V), and resistance (R) with the equation I = V/R.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Circuits"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-03",
  topic: "physics",
  type: "discrete",
  question: "An operating lamp draws a current of 0.4 ampere. The amount of charge passing through the lamp in 10 seconds is?",
  options: [
      ".045 C",
      "4.0 C",
      "5.0 C",
      "6.24 C"
  ],
  correctAnswer: "C",
  explanation: "Q = I \u00d7 t = 0.4 A \u00d7 10 s = 4 C.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electrostatics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-04",
  topic: "physics",
  type: "discrete",
  question: "To increase the brightness of a desk lamp, a student replaces a 50 W light bulb with a 100 W light bulb. Compared to the 50 W light bulb, the 100 W light bulb has?",
  options: [
      "Less resistance and draws more current",
      "Less resistance and draws less current",
      "More resistance and draws more current",
      "More resistance and draws less current"
  ],
  correctAnswer: "A",
  explanation: "Higher power bulbs usually have lower resistance, leading to more current draw when connected to the same voltage.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Power and Resistance"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-05",
  topic: "physics",
  type: "discrete",
  question: "An electric dryer consumes 6.0 \u00d7 10^6 joules of energy when operating at 220 volts for 30 minutes. During operation, the dryer draws a current of approximately?",
  options: [
      "10 A",
      "15 A",
      "20 A",
      "25 A"
  ],
  correctAnswer: "B",
  explanation: "Power = Energy/time. P = 6.0\u00d710\u2076 J / 1800 s = 3333 W. I = P/V = 3333 / 220 \u2248 15 A.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Work, Energy, Power"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2",
      "Skill 4"
  ]
},
{
  id: "phys-06",
  topic: "physics",
  type: "discrete",
  question: "When 8.0 electronvolt photons strike a photoemissive surface, the maximum kinetic energy of ejected photoelectrons is 6.0 electronvolts. The work function of the photoemissive surface is",
  options: [
      ".01 eV",
      "1.0 eV",
      "2.0 eV",
      "3.0 eV"
  ],
  correctAnswer: "C",
  explanation: "Work function = photon energy - KE = 8.0 eV - 6.0 eV = 2.0 eV.",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Photoelectric Effect"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-07",
  topic: "physics",
  type: "discrete",
  question: "A high resistance is connected in series with the internal coil of a galvanometer to make?",
  options: [
      "An ammeter",
      "A motor",
      "A generator",
      "A voltmeter"
  ],
  correctAnswer: "D",
  explanation: "A voltmeter is formed by placing a high resistance in series with a galvanometer.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electric Circuits"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-09",
  topic: "physics",
  type: "discrete",
  question: "Which device can be used to increase voltage from a source of direct current?",
  options: [
      "Generator",
      "Electroscope",
      "Induction coil",
      "Mass spectrometer"
  ],
  correctAnswer: "C",
  explanation: "An induction coil can step up DC voltage using a rapid make-and-break system.",
  "foundationalConcept": "4",
  "contentCategory": "4D",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Circuits"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-10",
  topic: "physics",
  type: "discrete",
  question: "The transformer on a power pole steps down the voltage from 10,800 volts to 120 volts. If the secondary coil contains 360 turns, how many turns are found on the primary coil?",
  options: [
      "603",
      "900",
      "15,000",
      "32,400"
  ],
  correctAnswer: "D",
  explanation: "Vp/Vs = Np/Ns \u2192 10,800/120 = Np/360 \u2192 Np = 32,400 turns.",
  "foundationalConcept": "4",
  "contentCategory": "4D",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electromagnetic Induction"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2",
      "Skill 4"
  ]
},
{
  id: "phys-11",
  topic: "physics",
  type: "discrete",
  question: "What is the potential difference across a 2.0 ohm resistor that draws 2.0 coulombs of charge per second?",
  options: [
      "1.0 V",
      "2.0 V",
      "3.0 V",
      "4.0 V"
  ],
  correctAnswer: "D",
  explanation: "Current = Q/t = 2 A, V = IR = 2 \u00d7 2 = 4 V.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electric Circuits"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-12",
  topic: "physics",
  type: "discrete",
  question: "If a 15-ohm resistor is connected in parallel with a 30-ohm resistor, the equivalent resistance is?",
  options: [
      "5\u03a9",
      "7\u03a9",
      "10\u03a9",
      "15\u03a9"
  ],
  correctAnswer: "C",
  explanation: "1/R = 1/15 + 1/30 \u2192 R = 10\u03a9.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electric Circuits"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-13",
  topic: "physics",
  type: "discrete",
  question: "A metal wire has length L and cross-sectional area A. The resistance of the wire is directly proportional to",
  options: [
      "L/A",
      "A/L",
      "L + A",
      "L \u00d7 A"
  ],
  correctAnswer: "A",
  explanation: "Resistance R = \u03c1L/A, so it is directly proportional to L/A.",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Materials and Resistance"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-14",
  topic: "physics",
  type: "discrete",
  question: "In a transformer, two coils are wound around a common iron core. To operate properly the transformer requires",
  options: [
      "More turns in the secondary coil than in the primary coil",
      "More turns in the primary coil than in the secondary coil",
      "A direct current source connecting to the secondary coil",
      "An alternating current source connecting to the primary coil"
  ],
  correctAnswer: "D",
  explanation: "Transformers require alternating current to function due to electromagnetic induction.",
  "foundationalConcept": "4",
  "contentCategory": "4D",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Electromagnetism"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-81",
  topic: "physics",
  type: "discrete",
  question: "Gibb's free energy equation is directly related to ______ and _______.",
  options: [
      "Work and Time",
      "Heat and Work",
      "Enthalpy and Entropy",
      "Power and Enthalpy"
  ],
  correctAnswer: "Enthalpy and Entropy",
  explanation: "Gibb's free energy (\u0394G) is a function of enthalpy (\u0394H), entropy (\u0394S), and temperature (T), specifically expressed as \u0394G = \u0394H - T\u0394S.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Thermodynamics",
      "Gibbs Free Energy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-82",
  topic: "physics",
  type: "discrete",
  question: "Which of the following is the correct expression of Bernoulli's principle?",
  options: [
      "As KE increases, another form of energy must decrease.",
      "As KE increases, other forms of energy also increase.",
      "KE remains relatively stable in a closed loop.",
      "KE has a limited effect upon wavelength."
  ],
  correctAnswer: "As KE increases, another form of energy must decrease.",
  explanation: "Bernoulli\u2019s principle states that within a streamline flow, an increase in the fluid\u2019s kinetic energy comes at the expense of its potential or pressure energy, keeping the total energy constant.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Fluid Dynamics",
      "Bernoulli's Principle"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// organic chemistry 9 
{
  id: "chem-46",
  type: "discrete",
  question: "A condensation polymerization reaction is best described as the",
  options: [
      "Joining of monomers by the removal of oxygen",
      "Joining of monomers by the removal of water",
      "Oxidation of a hydrocarbon by oxygen",
      "Oxidation of a hydrocarbon by water"
  ],
  correctAnswer: "Joining of monomers by the removal of water",
  explanation: "Condensation polymerization involves the removal of water during the joining of monomers.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Polymers"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-47",
  type: "discrete",
  question: "Which subatomic participle is found in all isotopes of hydrogen?",
  options: [
      "Proton",
      "Neutron",
      "Electron",
      "Positron"
  ],
  correctAnswer: "Proton",
  explanation: "All isotopes of hydrogen contain exactly one proton.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Atomic Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-48",
  type: "discrete",
  question: "The bond between hydrogen and oxygen in a water molecule is classified as",
  options: [
      "Ionic and Nonpolar",
      "Ionic and Polar",
      "Covalent and Nonpolar",
      "Covalent and Polar"
  ],
  correctAnswer: "Covalent and Polar",
  explanation: "The bond between hydrogen and oxygen in water is a polar covalent bond due to the difference in electronegativity.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Chemical Bonding"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-319",
  type: "discrete",
  question: "Which element is present in all organic compounds?",
  options: [
      "Hydrogen",
      "Nitrogen",
      "Carbon",
      "Oxygen"
  ],
  correctAnswer: "Carbon",
  explanation: "All organic compounds contain carbon atoms as their primary structural element.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Structure and Properties of Organic Molecules"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-320",
  type: "discrete",
  question: "A hydrocarbon molecule is considered to be saturated if the molecule contains",
  options: [
      "Single covalent bonds, only",
      "A double covalent bond, only",
      "A triple covalent bond",
      "Single and double covalent bonds"
  ],
  correctAnswer: "Single covalent bonds, only",
  explanation: "Saturated hydrocarbons (alkanes) contain only single covalent bonds between carbon atoms.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Structure and Properties of Organic Molecules"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-324",
  type: "discrete",
  question: "A hydrocarbon double bonds and no triple bond configuration is called an ______.",
  options: [
      "Alkene",
      "Alkyne",
      "Alkane",
      "Alkali"
  ],
  correctAnswer: "Alkene",
  explanation: "Alkenes are hydrocarbons that contain at least one double bond.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Structure and Properties of Organic Molecules"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-325",
  type: "discrete",
  question: "A hydrocarbon with triple bonds is called an _____",
  options: [
      "Alkene",
      "Alkyne",
      "Alkane",
      "Alkali"
  ],
  correctAnswer: "Alkyne",
  explanation: "Alkynes are hydrocarbons with at least one carbon\u2013carbon triple bond.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Structure and Properties of Organic Molecules"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-350",
  type: "discrete",
  question: "Which substance can be decomposed chemically?",
  options: [
      "CaO and Ca",
      "MgO and Mg",
      "CO and Co",
      "CaO and MgO"
  ],
  correctAnswer: "CaO and MgO",
  explanation: "Compounds like CaO and MgO can be broken down chemically, unlike elements such as Ca or Mg.",
  topic: "organicChemistry",
  "foundationalConcept": "4",
  "contentCategory": "4D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Compounds vs Elements",
      "Decomposition Reactions"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-351",
  type: "discrete",
  question: "The particles of a substance are arranged in a definite shape geometric pattern and are constantly vibrating. This substance can be in",
  options: [
      "The solid phase, only",
      "The liquid phase, only",
      "Either the liquid or the solid phase",
      "Neither the liquid or the solid phase"
  ],
  correctAnswer: "The solid phase, only",
  explanation: "Solids have a fixed shape and organized geometric structure with particles vibrating in place.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Solid State",
      "Particle Arrangement"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// bio chem 15
{
  id: "bio-171",
  topic: "biochemistry",
  type: "discrete",
  question: "Which of the following terms matches: water and electrolytes (clear)?",
  options: [
      "Exudate",
      "Transudate",
      "Serosanguineous",
      "Induration"
  ],
  correctAnswer: "Transudate",
  explanation: "Transudates are typically clear and consist mainly of water and electrolytes.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Skin Anatomy",
      "Fluid Dynamics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-177",
  topic: "biochemistry",
  type: "discrete",
  question: "Vitamin D is created from _________ by skin cells.",
  options: [
      "Dehydrocholesterol",
      "Cholesterol",
      "Hydrocholesterol",
      "Hydrodermis"
  ],
  correctAnswer: "Dehydrocholesterol",
  explanation: "Skin cells convert 7-dehydrocholesterol to vitamin D when exposed to ultraviolet light.",
  "foundationalConcept": "3",
  "contentCategory": "3C",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Biochemistry"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-280",
  type: "discrete",
  question: "Which of the following is caused by a B5 deficiency?",
  options: [
      "Ectopic pregnancy",
      "Nausea",
      "Dermatitis",
      "Fever"
  ],
  correctAnswer: "Dermatitis",
  explanation: "Vitamin B5 (pantothenic acid) deficiency can lead to dermatitis among other symptoms.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamins and Nutrients"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-281",
  type: "discrete",
  question: "Which of the following is caused by a B6 deficiency?",
  options: [
      "Excessive irritability",
      "Nonproductive cough",
      "Dry mouth",
      "Depression"
  ],
  correctAnswer: "Excessive irritability",
  explanation: "Vitamin B6 (pyridoxine) deficiency can cause irritability, depression, and confusion.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamins and Nutrients"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-282",
  type: "discrete",
  question: "Which of the following is caused by a B12 deficiency?",
  options: [
      "Glossitis",
      "Fever",
      "Hypertension",
      "Edema"
  ],
  correctAnswer: "Glossitis",
  explanation: "Glossitis, or inflammation of the tongue, can be caused by vitamin B12 deficiency.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamins and Nutrients"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-283",
  type: "discrete",
  question: "Which of the following is caused by a Vitamin C deficiency?",
  options: [
      "Fever",
      "Anemia",
      "Headaches",
      "Nausea"
  ],
  correctAnswer: "Anemia",
  explanation: "Vitamin C deficiency can lead to scurvy, which is often characterized by anemia due to impaired iron absorption.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamins",
      "Nutritional Deficiencies"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-284",
  type: "discrete",
  question: "Which of the following is caused by a Vitamin K deficiency?",
  options: [
      "Bruising",
      "Optic Nerve degeneration",
      "Anemia",
      "Hemorrhage (infants)"
  ],
  correctAnswer: "Hemorrhage (infants)",
  explanation: "Vitamin K is essential for blood clotting. A deficiency, especially in newborns, can lead to serious bleeding problems.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamins",
      "Blood Clotting"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-285",
  type: "discrete",
  question: "Another name for Vitamin B1 is ____.",
  options: [
      "Thiamine",
      "Riboflavin",
      "Pyridoxine",
      "Cobalamin"
  ],
  correctAnswer: "Thiamine",
  explanation: "Vitamin B1 is also known as Thiamine. It is involved in carbohydrate metabolism and neural function.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamin Classification"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-286",
  type: "discrete",
  question: "Which of the following foods is not high in potassium?",
  options: [
      "Oranges",
      "Bananas",
      "Tomatoes",
      "Turnips"
  ],
  correctAnswer: "Turnips",
  explanation: "Turnips are not a significant source of potassium compared to oranges, bananas, and tomatoes, which are well-known for their high potassium content.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Macronutrients and Micronutrients"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-287",
  type: "discrete",
  question: "Which of the following vitamins will be the most common in: oils from cereal seeds, salad oils, margarine and shortenings?",
  options: [
      "Vitamin A",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K"
  ],
  correctAnswer: "Vitamin E",
  explanation: "Vitamin E is abundant in vegetable oils and acts as an antioxidant that protects cell membranes.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamin Sources"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-288",
  type: "discrete",
  question: "Which of the following vitamins will be the most common in: leafy green vegetables, egg yolk and soy oil?",
  options: [
      "Vitamin A",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K"
  ],
  correctAnswer: "Vitamin K",
  explanation: "Vitamin K is abundant in leafy green vegetables and is crucial for blood clotting.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamin Sources"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-289",
  type: "discrete",
  question: "Which of the following vitamins will be the most common in: fish liver oils, milk, and egg yolk?",
  options: [
      "Vitamin A",
      "Vitamin D",
      "Vitamin E",
      "Vitamin K"
  ],
  correctAnswer: "Vitamin D",
  explanation: "Vitamin D is found in fish liver oil and dairy and is essential for calcium absorption and bone health.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamin Sources"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-290",
  type: "discrete",
  question: "Which of the following foods is not high in potassium?",
  options: [
      "Oranges",
      "Bananas",
      "Tomatoes",
      "Turnips"
  ],
  correctAnswer: "Turnips",
  explanation: "Turnips are lower in potassium compared to other options listed, which are rich in potassium.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Macronutrients and Micronutrients"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-291",
  type: "discrete",
  question: "Which of the following does not contain a high concentration of Niacin?",
  options: [
      "Yeast",
      "Meat",
      "Liver",
      "Corn"
  ],
  correctAnswer: "Corn",
  explanation: "Niacin (Vitamin B3) is present in high concentrations in meat, liver, and yeast. Corn is low in bioavailable niacin.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamin Sources"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-292",
  type: "discrete",
  question: "Which of the following does not contain a high concentration of Vitamin A?",
  options: [
      "Strawberries",
      "Oranges",
      "Green Vegetables",
      "Yellow Vegetables"
  ],
  correctAnswer: "Green Vegetables",
  explanation: "Vitamin A is most concentrated in yellow and orange vegetables. While green vegetables contain some, it\u2019s lower than in others listed.",
  topic: "biochemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "BC"
  ],
  "subtopics": [
      "Vitamin Sources"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// extra biology 8
{
  id: "psych-428",
  type: "discrete",
  question: "Which of the following pulmonary terms correlates with the definition: noted obstruction of the trachea or larynx.",
  options: [
      "Rhonchi",
      "Stridor",
      "Wheezes",
      "Vesicular"
  ],
  correctAnswer: "Stridor",
  explanation: "Stridor is a high-pitched wheezing sound caused by disrupted airflow, usually due to upper airway obstruction.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Respiratory Sounds"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-429",
  type: "discrete",
  question: "Which of the following is not generally caused by COPD?",
  options: [
      "Pneumonia",
      "Right sided heart failure",
      "Headaches",
      "Cor pulmonale"
  ],
  correctAnswer: "Headaches",
  explanation: "COPD commonly leads to cor pulmonale and right-sided heart failure, but headaches are not a primary complication.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Respiratory Pathophysiology",
      "COPD"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-430",
  type: "discrete",
  question: "Which of the following is not considered a COPD related disease?",
  options: [
      "Bronchiectasis",
      "Bronchial asthma",
      "Bronchitis",
      "Bronchial hypotension"
  ],
  correctAnswer: "Bronchial hypotension",
  explanation: "Bronchial hypotension is not a medical term related to COPD. The others are considered obstructive airway diseases.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "COPD",
      "Pulmonary Diseases"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-431",
  type: "discrete",
  question: "Which of the following pulmonary terms correlates with the definition: bronchospasm of the bronchial walls?",
  options: [
      "Wheezes",
      "Rhonchi",
      "Stridor",
      "Pleural Rub"
  ],
  correctAnswer: "Wheezes",
  explanation: "Wheezes are high-pitched sounds caused by narrowing of the bronchi due to bronchospasm.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Respiratory Sounds"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-432",
  type: "discrete",
  question: "Which of the following matches the definition: The volume of air that can be inhaled following exhalation of tidal volume?",
  options: [
      "Expiratory reserve volume",
      "Inspiratory capacity",
      "Inspiratory reserve volume",
      "Vital capacity"
  ],
  correctAnswer: "Inspiratory capacity",
  explanation: "Inspiratory capacity is the maximum amount of air a person can inhale after a normal exhalation.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Lung Volumes",
      "Respiratory Physiology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-433",
  type: "discrete",
  question: "Which of the following matches the definition: The maximum volume of air that can be exhaled after taking the deepest breath possible?",
  options: [
      "Expiratory reserve volume",
      "Inspiratory capacity",
      "Inspiratory reserve volume",
      "Vital capacity"
  ],
  correctAnswer: "Vital capacity",
  explanation: "Vital capacity is the total volume of air that can be exhaled after a maximal inhalation.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Pulmonary Function",
      "Lung Volumes"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-434",
  type: "discrete",
  question: "The respiratory center is located in the ____ and ______.",
  options: [
      "Midbrain and pons",
      "Pons and Medulla oblongata",
      "Midbrain and Medulla oblongata",
      "Pons and Hypothalamus"
  ],
  correctAnswer: "Pons and Medulla oblongata",
  explanation: "The respiratory centers in the pons and medulla regulate the rhythm and depth of breathing.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neurophysiology",
      "Respiratory Control"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-435",
  type: "discrete",
  question: "The renal medulla is composed of tissue called ______.",
  options: [
      "Renal pyramids",
      "Nephrons",
      "Renal sinus",
      "Renal pelvis"
  ],
  correctAnswer: "Renal pyramids",
  explanation: "The renal medulla consists of cone-shaped structures called renal pyramids which are involved in urine formation.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Renal System",
      "Kidney Anatomy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
}
 
];

// Psychological, Social, and Biological Foundations of Behavior
export const section4Questions: Question[] = [
  // psychology 38 (39)
  {
    id: "psych-02",
    topic: "psychology",
    type: "discrete",
    question: "The labyrinth caused confusion to the attacking troops. Labyrinth means...",
    options: [
        "Sound.",
        "Noise.",
        "Maze.",
        "Bulwarks."
    ],
    correctAnswer: "Maze.",
    explanation: "Labyrinth refers to a complex and confusing maze-like structure.",
    "foundationalConcept": "6",
    "contentCategory": "6A",
    "disciplines": [
        "Psychology"
    ],
    "subtopics": [
        "Language and vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1",
        "Skill 2"
    ]
},
{
    id: "psych-03",
    topic: "psychology",
    type: "discrete",
    question: "The wound was necrotic when examined. Necrotic means...",
    options: [
        "Healing.",
        "Dying tissue.",
        "Nauseating.",
        "Infinite."
    ],
    correctAnswer: "Dying tissue.",
    explanation: "Necrotic refers to tissue that is dying or has died.",
    "foundationalConcept": "6",
    "contentCategory": "6A",
    "disciplines": [
        "Psychology"
    ],
    "subtopics": [
        "Medical terminology in context"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-07",
    topic: "psychology",
    type: "discrete",
    question: "The old man was known for being sapient. Sapient means...",
    options: [
        "Useless.",
        "Possessing wisdom.",
        "Perceptual.",
        "Limited."
    ],
    correctAnswer: "Possessing wisdom.",
    explanation: "Sapient means showing great wisdom or discernment.",
    "foundationalConcept": "6",
    "contentCategory": "6A",
    "disciplines": [
        "Psychology"
    ],
    "subtopics": [
        "Cognition and wisdom"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-08",
    topic: "psychology",
    type: "discrete",
    question: "The inventor created several specious ideas to solve the problem. Specious means...",
    options: [
        "Inspired.",
        "Insufficient.",
        "Limited.",
        "Falsely plausible."
    ],
    correctAnswer: "Falsely plausible.",
    explanation: "Specious means something that seems true but is actually false or misleading.",
    "foundationalConcept": "6",
    "contentCategory": "6A",
    "disciplines": [
        "Psychology"
    ],
    "subtopics": [
        "Language and reasoning"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1",
        "Skill 2"
    ]
},
{
    id: "psych-58",
    topic: "psychology",
    type: "discrete",
    question: "Susan's abhorrence of darkness prevents her from leaving her house at night. Abhorrence means...",
    options: [
        "Rationale.",
        "Hatred.",
        "Tremor.",
        "Belief."
    ],
    correctAnswer: "Hatred.",
    explanation: "Abhorrence means a strong feeling of dislike or disgust.",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Word Meaning in Context"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-60",
    topic: "psychology",
    type: "discrete",
    question: "The somber crowd mourned the loss of their leader. Somber means...",
    options: [
        "Angry.",
        "Bitter.",
        "Melancholy.",
        "Excited."
    ],
    correctAnswer: "Melancholy.",
    explanation: "Somber means dark, gloomy, or melancholic.",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Word Meaning in Context"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-65",
    topic: "psychology",
    type: "discrete",
    question: "The young artist had an unbridled passion for watercolors. Unbridled means...",
    options: [
        "Unrestrained.",
        "Unequaled.",
        "Underachieved.",
        "Distressed."
    ],
    correctAnswer: "Unrestrained.",
    explanation: "Unbridled means uncontrolled or unrestrained.",
    "foundationalConcept": "6",
    "contentCategory": "6A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Word Meaning in Context"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-66",
    topic: "psychology",
    type: "discrete",
    question: "The zephyr kept the students cool while they sat outside studying. Zephyr means...",
    options: [
        "Cloud.",
        "Tree.",
        "Shade.",
        "Wind."
    ],
    correctAnswer: "Wind.",
    explanation: "A zephyr is a soft, gentle breeze.",
    "foundationalConcept": "6",
    "contentCategory": "6A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Word Meaning in Context"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-309",
    type: "discrete",
    question: "The progression of a nerve impulse with the nodes of Ranvier is called _______.",
    options: [
        "Saltatory conduction",
        "Transmission",
        "Unmyelinated conduction",
        "Relative conduction"
    ],
    correctAnswer: "Saltatory conduction",
    explanation: "Saltatory conduction refers to the jumping of the action potential between nodes of Ranvier, increasing conduction speed.",
    topic: "psychology",
    "foundationalConcept": "3",
    "contentCategory": "3A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Action Potential"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "bio-310",
    type: "discrete",
    question: "Supporting cells located within the CNS are collectively called _____.",
    options: [
        "Neuroglia",
        "Astrocytes",
        "Perikaryon",
        "Satellite cells"
    ],
    correctAnswer: "Neuroglia",
    explanation: "Neuroglia are the various supporting cells in the CNS including astrocytes, oligodendrocytes, and others.",
    topic: "psychology",
    "foundationalConcept": "3",
    "contentCategory": "3A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Glial Cells"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 3"
    ]
},
{
    id: "bio-311",
    type: "discrete",
    question: "Which of the following types of cells line the ventricles and spinal cord?",
    options: [
        "Astrocytes",
        "Schwann cells",
        "Ependymal cells",
        "Oligodendrocytes"
    ],
    correctAnswer: "Ependymal cells",
    explanation: "Ependymal cells form the lining of the ventricles in the brain and the central canal of the spinal cord.",
    topic: "psychology",
    "foundationalConcept": "3",
    "contentCategory": "3A",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Neuroanatomy"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 3"
    ]
},
{
    id: "psych-22",
    type: "discrete",
    question: "Which of the following cranial nerves is not directly related to the eye?",
    options: [
        "II",
        "III",
        "VI",
        "VII"
    ],
    correctAnswer: "VII",
    explanation: "Cranial nerve VII (Facial nerve) is primarily responsible for facial expressions and is not directly involved in eye movement.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial nerves"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-23",
    type: "discrete",
    question: "Which of the following cranial nerves can cause movement of trapezius muscle?",
    options: [
        "IV",
        "VII",
        "X",
        "XI"
    ],
    correctAnswer: "XI",
    explanation: "Cranial nerve XI (Accessory nerve) innervates the trapezius and sternocleidomastoid muscles.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial nerves"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-24",
    type: "discrete",
    question: "Which of the following cranial nerves causes sensation to anterior 2/3 of the tongue?",
    options: [
        "IV",
        "VII",
        "X",
        "XI"
    ],
    correctAnswer: "VII",
    explanation: "Cranial nerve VII (Facial nerve) provides sensory innervation to the anterior 2/3 of the tongue.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial nerves"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-25",
    type: "discrete",
    question: "Which of the following cranial nerves can be directly linked to respiratory and cardiac dysfunction?",
    options: [
        "IV",
        "VII",
        "X",
        "XI"
    ],
    correctAnswer: "X",
    explanation: "Cranial nerve X (Vagus nerve) controls parasympathetic output to the heart and lungs.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Autonomic nervous system"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-26",
    type: "discrete",
    question: "Which of the following cranial nerves can be directly linked to ptosis?",
    options: [
        "III",
        "IV",
        "V",
        "VI"
    ],
    correctAnswer: "III",
    explanation: "Cranial nerve III (Oculomotor nerve) innervates the levator palpebrae superioris, and its dysfunction can cause ptosis.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial nerves",
        "Motor function"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-06",
    type: "discrete",
    question: "Which of the following cranial nerves can be directly linked to diplopia?",
    options: [
        "III",
        "IV",
        "V",
        "VI"
    ],
    correctAnswer: "IV",
    explanation: "The trochlear nerve (CN IV) controls the superior oblique muscle, and damage can result in vertical diplopia.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial Nerves",
        "Vision"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-07",
    type: "discrete",
    question: "Which of the following is another name for cranial nerve IX?",
    options: [
        "Trochlear",
        "Vestibulocochlear",
        "Hypoglossal",
        "Glosspharyngeal"
    ],
    correctAnswer: "Glosspharyngeal",
    explanation: "Cranial Nerve IX is known as the Glossopharyngeal nerve.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial Nerves"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-09",
    type: "discrete",
    question: "Changes in personality and judgment are often associated with a _____lesion.",
    options: [
        "Frontal lobe",
        "Parietal lobe",
        "Broca's area",
        "Wernicke's area"
    ],
    correctAnswer: "Frontal lobe",
    explanation: "Frontal lobe lesions are known to affect behavior, judgment, and personality.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Brain Regions",
        "Behavioral Control"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-10",
    type: "discrete",
    question: "Changes in motor aphasia are often associated with a _______ lesion.",
    options: [
        "Frontal lobe",
        "Parietal lobe",
        "Broca's area",
        "Wernicke's area"
    ],
    correctAnswer: "Broca's area",
    explanation: "Broca\u2019s area is responsible for speech production; damage leads to expressive aphasia.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Brain Regions",
        "Language Processing"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-11",
    type: "discrete",
    question: "Changes in sensory aphasia are often associated with a _______ lesion.",
    options: [
        "Frontal lobe",
        "Parietal lobe",
        "Broca's area",
        "Wernicke's area"
    ],
    correctAnswer: "Wernicke's area",
    explanation: "Wernicke's area is involved in language comprehension; damage leads to receptive aphasia or sensory aphasia.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Language Processing",
        "Brain Regions"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-12",
    type: "discrete",
    question: "Which of the following diseases has not been directly linked with Bell's palsy?",
    options: [
        "AIDS",
        "Diabetes",
        "Lyme disease",
        "Alzheimer's disease"
    ],
    correctAnswer: "Alzheimer's disease",
    explanation: "Bell's palsy is linked to viral infections and certain conditions like diabetes and Lyme disease, but not Alzheimer's disease.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial Nerves",
        "Neurological Disorders"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-13",
    type: "discrete",
    question: "Which of the following cervical nerve roots best corresponds with activation of the triceps muscle?",
    options: [
        "C5",
        "C6",
        "C7",
        "T2"
    ],
    correctAnswer: "C7",
    explanation: "The C7 nerve root innervates the triceps muscle responsible for elbow extension.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Spinal Nerves",
        "Motor Function"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-14",
    type: "discrete",
    question: "The upper and middle trunks of the brachial plexus combine to form the ____ cord.",
    options: [
        "Lateral",
        "Posterior",
        "Medial",
        "Anterior"
    ],
    correctAnswer: "Lateral",
    explanation: "The lateral cord of the brachial plexus is formed by the anterior divisions of the upper and middle trunks.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Brachial Plexus"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-15",
    type: "discrete",
    question: "The upper, middle, and lower trunks of the brachial plexus combine to form the ____ cord.",
    options: [
        "Lateral",
        "Posterior",
        "Medial",
        "Anterior"
    ],
    correctAnswer: "Posterior",
    explanation: "The posterior cord is formed from the posterior divisions of all three trunks of the brachial plexus.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Brachial Plexus"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-16",
    type: "discrete",
    question: "The lower trunk of the brachial plexus forms the ____ cord.",
    options: [
        "Lateral",
        "Posterior",
        "Medial",
        "Anterior"
    ],
    correctAnswer: "Medial",
    explanation: "The anterior division of the lower trunk continues as the medial cord of the brachial plexus.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Brachial Plexus"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-17",
    type: "discrete",
    question: "Jerky and sudden random movements are often associated with a _____lesion.",
    options: [
        "Midbrain",
        "Basal ganglia",
        "Subthalamic",
        "Thalamus"
    ],
    correctAnswer: "Basal ganglia",
    explanation: "Damage to the basal ganglia can result in chorea-like movements and motor control issues.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Neurological Disorders",
        "Motor Function"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-18",
    type: "discrete",
    question: "Which of the following arteries supplies Broca's area?",
    options: [
        "ACA",
        "MCA",
        "PCA",
        "Lateral striate"
    ],
    correctAnswer: "MCA",
    explanation: "The middle cerebral artery (MCA) supplies Broca's area which controls motor speech.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Brain Circulation",
        "Speech Centers"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-19",
    type: "discrete",
    question: "Which of the following arteries if ruptured can cause an oculomotor palsy?",
    options: [
        "ACA",
        "MCA",
        "PCA",
        "Lateral striate"
    ],
    correctAnswer: "PCA",
    explanation: "Rupture of the posterior cerebral artery can impact the oculomotor nerve, causing eye movement deficits.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7C",
    "disciplines": [
        "BIO"
    ],
    "subtopics": [
        "Cranial Nerves",
        "Vascular Lesions"
    ],
    "difficulty": "Intermediate",
    "skillsTested": [
        "Skill 2"
    ]
},
{
    id: "psych-464",
    type: "discrete",
    question: "The detective was able to derive the facts of the case. Derive means...",
    options: [
        "Desist",
        "Deter",
        "Devise",
        "Deduce"
    ],
    correctAnswer: "Deduce",
    explanation: "To derive in this context means to deduce or figure out information based on evidence.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-465",
    type: "discrete",
    question: "The scientist was able to evoke powerful emotions from her audience. Evoke means...",
    options: [
        "Sell",
        "Calm",
        "Call forth",
        "Exaggerate"
    ],
    correctAnswer: "Call forth",
    explanation: "To evoke means to bring or recall a feeling, memory, or image to the mind; in this context, it means 'call forth'.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-466",
    type: "discrete",
    question: "The judge was fallible during deliberation. Fallible means...",
    options: [
        "Careful not to err",
        "Falsely accused",
        "Loyal to his supporters",
        "Capable of mistakes"
    ],
    correctAnswer: "Capable of mistakes",
    explanation: "Fallible means capable of making mistakes or being wrong.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-467",
    type: "discrete",
    question: "The chemist collected the germane data during the experiment. Germane means...",
    options: [
        "Relevant",
        "Obscure",
        "Limited",
        "Usual"
    ],
    correctAnswer: "Relevant",
    explanation: "Germane means relevant to a subject under consideration.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-468",
    type: "discrete",
    question: "The desperados held up in a grotto in New Mexico during the escape. Grotto means...",
    options: [
        "Large cave",
        "Small cavern",
        "Hotel",
        "Motel"
    ],
    correctAnswer: "Small cavern",
    explanation: "A grotto is a small picturesque cave, often with religious or mysterious significance.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-469",
    type: "discrete",
    question: "The official exhibited a heedless attitude when dealing with the dignitaries. Heedless means...",
    options: [
        "Thoughtless",
        "Pleasant",
        "Friendly",
        "Bitter"
    ],
    correctAnswer: "Thoughtless",
    explanation: "Heedless means showing a reckless lack of care or attention.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-470",
    type: "discrete",
    question: "The Sherman tank commander noted innumerable troops moving forward against his position. Innumerable means...",
    options: [
        "Limited",
        "Weary",
        "Countless",
        "Harmless"
    ],
    correctAnswer: "Countless",
    explanation: "Innumerable means too many to be counted; countless.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-471",
    type: "discrete",
    question: "The general tried to instill in his troops the hope of victory. Instill means...",
    options: [
        "Infuse",
        "Delay",
        "Inscribe",
        "Indict"
    ],
    correctAnswer: "Infuse",
    explanation: "To instill means to gradually but firmly establish an idea or attitude into a person's mind.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-472",
    type: "discrete",
    question: "The winning team of the World Series often has a jovial attitude. Jovial means...",
    options: [
        "Merry",
        "Sad",
        "Somber",
        "Laborious"
    ],
    correctAnswer: "Merry",
    explanation: "Jovial means cheerful and friendly; merry.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
{
    id: "psych-473",
    type: "discrete",
    question: "The plant entered the latent phase of development in the fall. Latent means...",
    options: [
        "First",
        "Growth",
        "Last",
        "Dormant"
    ],
    correctAnswer: "Dormant",
    explanation: "Latent means existing but not yet developed or active; dormant.",
    topic: "psychology",
    "foundationalConcept": "7",
    "contentCategory": "7A",
    "disciplines": [
        "PSYCH"
    ],
    "subtopics": [
        "Vocabulary"
    ],
    "difficulty": "Beginner",
    "skillsTested": [
        "Skill 1"
    ]
},
// sociology 18
{
  id: "psych-01",
  topic: "sociology",
  type: "discrete",
  question: "A lyre was played in ancient Rome. Lyre means...",
  options: [
      "Stringed instrument in the harp class.",
      "Percussion instrument.",
      "Wind instrument in the wind class.",
      "Rhythmic percussion device."
  ],
  correctAnswer: "Stringed instrument in the harp class.",
  explanation: "A lyre is a stringed instrument from ancient times, similar to a small harp.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "sociology"
  ],
  "subtopics": [
      "Language and vocabulary"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1",
      "Skill 2"
  ]
},
{
  id: "psych-04",
  topic: "sociology",
  type: "discrete",
  question: "The defendant exhibited a peevish appearance. Peevish means...",
  options: [
      "Immovable.",
      "Guilty.",
      "Not guilty.",
      "Irritable."
  ],
  correctAnswer: "Irritable.",
  explanation: "Peevish describes someone easily irritated or annoyed.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "sociology"
  ],
  "subtopics": [
      "Emotion and personality traits"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-05",
  topic: "sociology",
  type: "discrete",
  question: "The band director was an expert at playing the piccolo. Piccolo means...",
  options: [
      "Small flute.",
      "Large flute.",
      "Small drum.",
      "Small triangle."
  ],
  correctAnswer: "Small flute.",
  explanation: "A piccolo is a small flute that plays at a higher pitch than a standard flute.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "sociology"
  ],
  "subtopics": [
      "Language and vocabulary"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-06",
  topic: "sociology",
  type: "discrete",
  question: "The renter was remiss about the rent. Remiss means...",
  options: [
      "Timely.",
      "Negligent.",
      "Irritable.",
      "Impoverished."
  ],
  correctAnswer: "Negligent.",
  explanation: "Remiss means negligent or lacking attention to duty.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "sociology"
  ],
  "subtopics": [
      "Behavioral language"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-09",
  topic: "sociology",
  type: "discrete",
  question: "The tolerant attitude of the audience was appreciated. Tolerant means...",
  options: [
      "Tireless.",
      "Calm.",
      "Indulgent.",
      "Laborious."
  ],
  correctAnswer: "Indulgent.",
  explanation: "Tolerant often implies a willingness to accept behaviors or opinions different from one's own \u2014 indulgent fits best here.",
  "foundationalConcept": "6",
  "contentCategory": "6A",
  "disciplines": [
      "Psychology"
  ],
  "subtopics": [
      "Personality traits"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-10",
  topic: "sociology",
  type: "discrete",
  question: "The verbose language used by the English teacher was tiresome to the class. Verbose means...",
  options: [
      "Wordy.",
      "Expressive.",
      "Limited.",
      "Punitive."
  ],
  correctAnswer: "Wordy.",
  explanation: "Verbose refers to using more words than necessary.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "sociology"
  ],
  "subtopics": [
      "Language usage"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-59",
  topic: "sociology",
  type: "discrete",
  question: "The girl displayed distraught behavior when she found out her puppy was injured. Distraught means...",
  options: [
      "Reckless.",
      "Shifty.",
      "Distressed.",
      "Unreasonable."
  ],
  correctAnswer: "Distressed.",
  explanation: "Distraught means deeply upset and agitated.",
  "foundationalConcept": "7",
  "contentCategory": "7A",
  "disciplines": [
      "PSYCH"
  ],
  "subtopics": [
      "Word Meaning in Context"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-61",
  topic: "sociology",
  type: "discrete",
  question: "At age 65, the CEO of the company was retiring. He felt he had reached the acme of his profession. Acme means...",
  options: [
      "Highest point.",
      "End.",
      "Bottom.",
      "Entrance."
  ],
  correctAnswer: "Highest point.",
  explanation: "Acme means the peak or highest point of something.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "SOC"
  ],
  "subtopics": [
      "Word Meaning in Context"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-62",
  topic: "sociology",
  type: "discrete",
  question: "The genteel southern girl was known for her behavior. Genteel means...",
  options: [
      "Refined.",
      "Ambiguous.",
      "Smug.",
      "Loathsome."
  ],
  correctAnswer: "Refined.",
  explanation: "Genteel means polite, refined, or respectable.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "SOC"
  ],
  "subtopics": [
      "Word Meaning in Context"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-63",
  topic: "sociology",
  type: "discrete",
  question: "The mother attempted to mollify her son with toys. Mollify means...",
  options: [
      "Teach.",
      "Threaten.",
      "Soothe.",
      "Distract."
  ],
  correctAnswer: "Soothe.",
  explanation: "Mollify means to calm or soothe someone.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "SOC"
  ],
  "subtopics": [
      "Word Meaning in Context"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-64",
  topic: "sociology",
  type: "discrete",
  question: "Some people accused John of thinking too much. He would sometimes ponder on a subject for months at a time. Ponder means...",
  options: [
      "Resolve.",
      "Meditate.",
      "Discuss.",
      "Fret."
  ],
  correctAnswer: "Meditate.",
  explanation: "Ponder means to think about something carefully and thoroughly.",
  "foundationalConcept": "6",
  "contentCategory": "6A",
  "disciplines": [
      "PSYCH"
  ],
  "subtopics": [
      "Word Meaning in Context"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-67",
  topic: "sociology",
  type: "discrete",
  question: "The pianist played his rendition of a sonata. Sonata means...",
  options: [
      "Instrumental composition.",
      "Piano.",
      "Play.",
      "Vocal score."
  ],
  correctAnswer: "Instrumental composition.",
  explanation: "A sonata is a musical composition for one or more instruments, typically in several movements.",
  "foundationalConcept": "9",
  "contentCategory": "9A",
  "disciplines": [
      "PSYCH"
  ],
  "subtopics": [
      "Word Meaning in Context"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-204",
  topic: "sociology",
  type: "discrete",
  question: "Which of the following is not true concerning Staphylococcus aureus?",
  options: [
      "s. aureus is related to inflammation.",
      "s. aureus can cause pneumonia",
      "s. aureus can lead to acute bacterial endocarditis",
      "s. aureus does not make coagulase"
  ],
  correctAnswer: "s. aureus does not make coagulase",
  explanation: "Staphylococcus aureus produces coagulase, which is a key characteristic used in its identification.",
  "foundationalConcept": "1",
  "contentCategory": "1B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Bacterial Pathogenesis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-300",
  type: "discrete",
  question: "Oligodendrocytes are located in the _____.",
  options: [
      "PNS",
      "CNS"
  ],
  correctAnswer: "CNS",
  explanation: "Oligodendrocytes are a type of glial cell found in the central nervous system (CNS) that produce myelin.",
  topic: "sociology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "psychology",
      "Glial Cells"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "bio-307",
  type: "discrete",
  question: "Multiple sclerosis is a disease that attacks the _______ of neurons in the CNS.",
  options: [
      "Myelin sheaths",
      "Axon terminals",
      "Sodium channels",
      "Nicotinic receptors"
  ],
  correctAnswer: "Myelin sheaths",
  explanation: "Multiple sclerosis is characterized by the demyelination of neurons in the central nervous system.",
  topic: "sociology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neurological Disorders"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "bio-308",
  type: "discrete",
  question: "Which of the following is not considered a type of synapse?",
  options: [
      "Dendrodendritic",
      "Axosomatic",
      "Axoaxonic",
      "Denoaxonic"
  ],
  correctAnswer: "Denoaxonic",
  explanation: "Denoaxonic is not a recognized classification of synapse; the others are valid types of synaptic connections.",
  topic: "sociology",
  "foundationalConcept": "3",
  "contentCategory": "3A",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neural Structure"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "psych-08",
  type: "discrete",
  question: "Athetosis type movements are often identified with a _______ lesion.",
  options: [
      "Midbrain",
      "Basal ganglia",
      "Subthalamic",
      "Thalamus"
  ],
  correctAnswer: "Basal ganglia",
  explanation: "Athetosis is a type of movement disorder associated with damage to the basal ganglia.",
  topic: "sociology",
  "foundationalConcept": "7",
  "contentCategory": "7C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Neurobiology",
      "Movement Disorders"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "psych-20",
  type: "discrete",
  question: "Which of the following is not true concerning Brown-Sequard syndrome?",
  options: [
      "Contralateral spinothalamic deficits",
      "Ipsilateral spinothalamic deficits",
      "Ipsilateral dorsal column deficits",
      "Ipsilateral pyramidal tract deficits"
  ],
  correctAnswer: "Ipsilateral spinothalamic deficits",
  explanation: "Brown-Sequard syndrome presents with ipsilateral motor and dorsal column loss, and contralateral pain and temperature loss (spinothalamic).",
  topic: "sociology",
  "foundationalConcept": "7",
  "contentCategory": "7C",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Spinal Cord Disorders"
  ],
  "difficulty": "Advanced",
  "skillsTested": [
      "Skill 2"
  ]
},
// biology 3
{
  id: "bio-133",
  topic: "biology",
  type: "discrete",
  question: "The symbol Ca on the periodic table stands for:",
  options: [
      "Calcium",
      "Carbon",
      "Cobalt",
      "Chlorine"
  ],
  correctAnswer: "Calcium",
  explanation: "Calcium (Ca) is an alkaline earth metal located in group 2 of the periodic table.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Periodic Table",
      "Element Symbols"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-134",
  topic: "biology",
  type: "discrete",
  question: "The symbol Br on the periodic table stands for:",
  options: [
      "Beryllium",
      "Boron",
      "Barium",
      "Bromine"
  ],
  correctAnswer: "Bromine",
  explanation: "Bromine (Br) is a halogen located in group 17 of the periodic table.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Periodic Table",
      "Element Symbols"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "bio-135",
  topic: "biology",
  type: "discrete",
  question: "Vinegar is also known as:",
  options: [
      "Acetic acid",
      "Acetone acid",
      "Sulfuric acid",
      "Ascorbic acid"
  ],
  correctAnswer: "Acetic acid",
  explanation: "Acetic acid is the main component of vinegar that gives it its characteristic sour taste.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Acids and Bases"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// extra biology 8
{
  id: "psych-436",
  type: "discrete",
  question: "Juxtaglomerular cells combine with _______ cells to form the juxtagomerular apparatus in the kidney.",
  options: [
      "Macula densa",
      "Renal pelvis",
      "Nephron",
      "Renal sinus"
  ],
  correctAnswer: "Macula densa",
  explanation: "The juxtaglomerular apparatus is formed by the combination of juxtaglomerular cells and macula densa cells to regulate blood pressure and filtration rate.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "biology"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-437",
  type: "discrete",
  question: "Which of the following is not in the sequence of proper kidney blood flow? The starting point is the renal artery and the finishing point is the renal vein.",
  options: [
      "Arciform artery",
      "Afferent arteriole",
      "Interlobar vein",
      "Arciform vein"
  ],
  correctAnswer: "Interlobar vein",
  explanation: "The interlobar vein is part of the venous return but does not directly connect the flow from renal artery to renal vein in the provided sequence context.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Renal Circulation"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-438",
  type: "discrete",
  question: "Which is found in the highest concentration in the urine?",
  options: [
      "Uric acid",
      "Urea",
      "Glucose",
      "Creatinine"
  ],
  correctAnswer: "Urea",
  explanation: "Urea is the most abundant nitrogenous waste in urine, a byproduct of protein metabolism.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Urinary System"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-439",
  type: "discrete",
  question: "The primary function of the ascending loop of Henle in the kidney is?",
  options: [
      "The active re-absorption of sodium",
      "The active re-absorption of chloride ions",
      "The passive re-absorption of potassium",
      "The passive re-absorption of urea"
  ],
  correctAnswer: "The active re-absorption of chloride ions",
  explanation: "The ascending loop of Henle actively transports chloride and sodium ions out of the filtrate to maintain osmotic balance.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Nephron Function"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-440",
  type: "discrete",
  question: "The middle layer of the urinary bladder is identified as ___________.",
  options: [
      "Mucous coat",
      "Submucous coat",
      "Muscular Coat",
      "Sphincter Coat"
  ],
  correctAnswer: "Submucous coat",
  explanation: "The submucous coat lies between the mucous and muscular layers and supports the structure of the bladder.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Urinary System Anatomy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-441",
  type: "discrete",
  question: "The micturition reflex center is located in the _____.",
  options: [
      "Pons",
      "Midbrain",
      "Lumbar plexus",
      "Sacral plexus"
  ],
  correctAnswer: "Sacral plexus",
  explanation: "The sacral plexus contains neurons that control the detrusor muscle during the micturition reflex.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Urinary Reflexes"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-442",
  type: "discrete",
  question: "Which of the following match with the definition: a poor output of urine?",
  options: [
      "Oliguria",
      "Pyruia",
      "Enuresis",
      "Diuresis"
  ],
  correctAnswer: "Oliguria",
  explanation: "Oliguria refers to decreased urine output, typically less than 400 mL/day in adults.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Urinary Disorders"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "psych-443",
  type: "discrete",
  question: "Capillary loops located in the medulla are also known as _________.",
  options: [
      "Vasa recta",
      "Urea collectors",
      "Trigone",
      "Macula densa"
  ],
  correctAnswer: "Vasa recta",
  explanation: "The vasa recta are straight capillaries in the medulla that are involved in the countercurrent exchange mechanism.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Renal Circulation"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
// bonus bio 1
{
  id: "psych-444",
  type: "discrete",
  question: "The primary function of the descending loop of Henle in the kidney is?",
  options: [
      "Reabsorption of sodium ions",
      "Reabsoption of water by osmosis",
      "Secretion of hydrogen ions",
      "Secretion of potassium ions"
  ],
  correctAnswer: "Reabsoption of water by osmosis",
  explanation: "The descending loop of Henle is permeable to water but not solutes, allowing water to be reabsorbed passively by osmosis.",
  topic: "biology",
  "foundationalConcept": "3",
  "contentCategory": "3B",
  "disciplines": [
      "BIO"
  ],
  "subtopics": [
      "Nephron Function"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
// extra organic chem 4
{
  id: "chem-354",
  type: "discrete",
  question: "Which terms describe a substance that has a low melting point and poor electrical conductivity?",
  options: [
      "Covalent and metallic",
      "Covalent and molecular",
      "Ionic and molecular",
      "Ionic and metallic"
  ],
  correctAnswer: "Covalent and molecular",
  explanation: "Molecular covalent substances have low melting points and do not conduct electricity well.",
  topic: "organicChemistry",
  "foundationalConcept": "4",
  "contentCategory": "4D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Bonding Types"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-355",
  type: "discrete",
  question: "In a redox reaction the reducing agent will",
  options: [
      "Lose electrons and be reduced",
      "Lose electrons and be oxidized",
      "Gain electrons and be reduced",
      "Gain electrons and be oxidized"
  ],
  correctAnswer: "Lose electrons and be oxidized",
  explanation: "A reducing agent donates electrons (gets oxidized).",
  topic: "organicChemistry",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Oxidation and Reduction"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-356",
  type: "discrete",
  question: "A reaction will be spontaneous if it results in products that have",
  options: [
      "Lower potential energy and less randomness",
      "Lower potential energy and more randomness",
      "Greater potential energy and less randomness",
      "Greater potential energy and more randomness"
  ],
  correctAnswer: "Lower potential energy and more randomness",
  explanation: "Spontaneity is favored by lower enthalpy and higher entropy (\u0394G < 0).",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Spontaneity",
      "Gibbs Free Energy"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-357",
  type: "discrete",
  question: "Which of the following does not have a strong Ka value?",
  options: [
      "Boric Acid",
      "Nitric Acid",
      "Sulfuric Acid",
      "Chloric Acid"
  ],
  correctAnswer: "Boric Acid",
  explanation: "Boric acid is a weak acid with a low Ka value. The others are strong acids.",
  topic: "organicChemistry",
  "foundationalConcept": "5",
  "contentCategory": "5D",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Acid Strength",
      "Ka Values"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
// extra physics 70
{
  id: "phy-83",
  topic: "physics",
  type: "discrete",
  question: "Which of the following is correct expression for Gibbs' free energy formula?",
  options: [
      "DG = DH -TDS",
      "G = H -TS",
      "DG = DH -T/S",
      "G = H -T/S"
  ],
  correctAnswer: "DG = DH -TDS",
  explanation: "The change in Gibbs' free energy (\u0394G) is determined by the enthalpy change (\u0394H) minus the product of temperature (T) and entropy change (\u0394S), i.e., \u0394G = \u0394H - T\u0394S.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Thermodynamics",
      "Gibbs Free Energy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-84",
  topic: "physics",
  type: "discrete",
  question: "Which of the following is the correct expression for work?",
  options: [
      "W = DKE",
      "W = K -DE",
      "W = K x DE",
      "W = DK / DE"
  ],
  correctAnswer: "W = DKE",
  explanation: "Work is equal to the change in kinetic energy (\u0394KE), consistent with the work-energy theorem.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Work",
      "Energy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-85",
  topic: "physics",
  type: "discrete",
  question: "A spring has a spring constant of 120 newtons per meter. How much potential energy is stored in the spring as it is stretched .20 meter?",
  options: [
      "1.2 J",
      "2.4 J",
      "3.1 J",
      "7.4 J"
  ],
  correctAnswer: "2.4 J",
  explanation: "The potential energy stored in a spring is given by PE = 1/2 kx\u00b2. For k = 120 N/m and x = 0.20 m, PE = 1/2 * 120 * (0.20)\u00b2 = 2.4 J.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Potential Energy",
      "Springs"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-86",
  topic: "physics",
  type: "discrete",
  question: "When Adam drinks cold water, his body warms the water until thermal equilibrium is reached. If he drinks six glasses (2.5 kilograms) of water at 0 degrees Celsius in a day, approximately how much energy must his body expend to raise the temperature of this water to his body's temperature of 37 degrees Celsius?",
  options: [
      "210 kJ",
      "305 kJ",
      "390 kJ",
      "414 kJ"
  ],
  correctAnswer: "390 kJ",
  explanation: "The energy required to raise the water\u2019s temperature is calculated using q = mc\u0394T. For 2.5 kg of water, c = 4.18 kJ/kg\u00b0C, and \u0394T = 37\u00b0C, q = 2.5 * 4.18 * 37 = 390 kJ.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Heat Transfer",
      "Thermal Equilibrium"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-88",
  topic: "physics",
  type: "discrete",
  question: "If the speed of a moving object is doubled, which quantity also associated with the object must double?",
  options: [
      "Momentum",
      "KE",
      "Gravitational potential energy",
      "Acceleration"
  ],
  correctAnswer: "Momentum",
  explanation: "Momentum (p = mv) is directly proportional to velocity. Doubling the speed of the object will double its momentum.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Momentum",
      "Kinetic Energy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-89",
  topic: "physics",
  type: "discrete",
  question: "A 45 kilogram bicyclist climbs a hill at a constant speed of 2.5 meters per second by applying an average force of 85 Newtons. Approximately how much power does the bicyclist develop?",
  options: [
      "115 W",
      "210 W",
      "250 W",
      "320 W"
  ],
  correctAnswer: "210 W",
  explanation: "Power (P) is given by P = Fv. With F = 85 N and v = 2.5 m/s, P = 85 * 2.5 = 210 W.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Power",
      "Forces"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-90",
  topic: "physics",
  type: "discrete",
  question: "A person kicks in a 4.0 kilogram door with a 48 Newton force causing the door to accelerate at 12 meters per second2. What is the magnitude of the force exerted by the door on the person?",
  options: [
      "24 N",
      "35 N",
      "42 N",
      "48 N"
  ],
  correctAnswer: "48 N",
  explanation: "By Newton\u2019s Third Law of Motion, the force exerted by the door on the person is equal and opposite to the force exerted by the person on the door: 48 N.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Newton's Laws",
      "Forces"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-96",
  topic: "physics",
  type: "discrete",
  question: "Which of the following is the correct expression for the natural gas law?",
  options: [
      "PT = nVR",
      "VR = nPT",
      "PV = nRT",
      "RT = nPV"
  ],
  correctAnswer: "PV = nRT",
  explanation: "The ideal gas law is given by PV = nRT, where P is pressure, V is volume, n is the number of moles, R is the ideal gas constant, and T is temperature.",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Gas Laws"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-97",
  topic: "physics",
  type: "discrete",
  question: "What is the boiling point of water at standard pressure on the Kelvin Scale?",
  options: [
      "272 K",
      "273 K",
      "372 K",
      "373 K"
  ],
  correctAnswer: "373 K",
  explanation: "The boiling point of water at standard pressure is 100\u00b0C, which is equivalent to 373 K on the Kelvin scale.",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Thermodynamics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-98",
  topic: "physics",
  type: "discrete",
  question: "Which statement is consistent with the kinetic theory of ideal gases?",
  options: [
      "Molecules transfer energy through collisions.",
      "Molecules are always stationary.",
      "The force of attraction between molecules is constant.",
      "The size of the molecules is large compared to the distance that separates them."
  ],
  correctAnswer: "Molecules transfer energy through collisions.",
  explanation: "The kinetic theory of ideal gases assumes that gas molecules are in constant motion and transfer energy through elastic collisions.",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Kinetic Theory"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-99",
  topic: "physics",
  type: "discrete",
  question: "Gas molecules at the same temperature are always assumed to have the same",
  options: [
      "Uniform velocity",
      "Uniform acceleration",
      "Number of atoms",
      "Kinetic energy",
      "Random motion"
  ],
  correctAnswer: "Kinetic energy",
  explanation: "At a given temperature, the average kinetic energy of gas molecules is determined solely by temperature and is the same for all molecules.",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Kinetic Energy"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-100",
  topic: "physics",
  type: "discrete",
  question: "As the volume of a fixed mass of an ideal gas increases at constant temperature, the product of the pressure and the volume of the gas",
  options: [
      "Decreases",
      "Increases",
      "Remains the same"
  ],
  correctAnswer: "Remains the same",
  explanation: "According to Boyle\u2019s law (PV = constant), for a fixed amount of gas at constant temperature, the product of pressure and volume remains constant.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Gas Laws",
      "Boyle's Law"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-101",
  topic: "physics",
  type: "discrete",
  question: "Which property determines the direction of the exchange of internal energy between two objects?",
  options: [
      "Temperature",
      "Specific Heat",
      "Mass",
      "Density"
  ],
  correctAnswer: "Temperature",
  explanation: "Heat transfer occurs from the object at a higher temperature to the object at a lower temperature, until thermal equilibrium is reached.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Heat Transfer",
      "Thermodynamics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-102",
  topic: "physics",
  type: "discrete",
  question: "A glass rod becomes positively charged when it is rubbed with silk. This net positive charge accumulates because the glass rod",
  options: [
      "Gains electrons",
      "Gains protons",
      "Loses electrons",
      "Loses protons"
  ],
  correctAnswer: "Loses electrons",
  explanation: "When the glass rod is rubbed with silk, it loses some of its electrons to the silk, resulting in a net positive charge.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Electrostatics",
      "Charge Transfer"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-216",
  topic: "physics",
  type: "discrete",
  question: "A baseball pitcher throws at pitch at 42 m/s. If the batter is 18 meters from the pitcher, approximately how much time does it take the ball to reach the batter?",
  options: [
      "1.8 seconds",
      "2.0 seconds",
      "87 seconds",
      "43 seconds"
  ],
  correctAnswer: "43 seconds",
  explanation: "Dividing the distance (18 meters) by the speed (42 m/s) gives approximately 0.43 seconds.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-217",
  topic: "physics",
  type: "discrete",
  question: "A baseball player throws a baseball at a speed of 40 meters per second at an angle of 30 degrees. The horizontal component of the baseball's speed is?",
  options: [
      "20 m/s",
      "25 m/s",
      "30 m/s",
      "35 m/s"
  ],
  correctAnswer: "35 m/s",
  explanation: "Using the cosine of 30 degrees, the horizontal component is approximately 35 m/s.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-218",
  topic: "physics",
  type: "discrete",
  question: "A bicyclist accelerates from rest to a speed of 5.0 meters per second in 10 seconds. During the same 10 seconds, a car accelerates from a speed of 22 meters per second to a speed of 27 meters per second. Compared to the acceleration of the bicycle the acceleration of the car is?",
  options: [
      "The same",
      "Greater",
      "Less"
  ],
  correctAnswer: "The same",
  explanation: "Both the bicycle and the car have the same acceleration because they cover the same change in velocity over the same time interval.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-219",
  topic: "physics",
  type: "discrete",
  question: "A baseball player throws a baseball at a speed of 40 meters per second at an angle of 30 degrees. The horizontal component of the baseball's speed is?",
  options: [
      "20 m/s",
      "25 m/s",
      "30 m/s",
      "35 m/s"
  ],
  correctAnswer: "35 m/s",
  explanation: "Using the cosine of 30 degrees, the horizontal component is approximately 35 m/s.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-220",
  topic: "physics",
  type: "discrete",
  question: "What is the average velocity of a car that travels due West at 30 kilometers in .5 hr?",
  options: [
      "60 km/hr west",
      "60 km/hr",
      "15 km/hr west",
      "15 km/hr"
  ],
  correctAnswer: "60 km/hr west",
  explanation: "Average velocity is calculated by dividing distance by time (30 km / 0.5 hr = 60 km/hr west).",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-221",
  topic: "physics",
  type: "discrete",
  question: "A man weighs 900 Newtons standing on a scale in a stationary elevator. If some time later the reading on the scale is 1200 Newtons the elevator must be moving with?",
  options: [
      "Constant acceleration downward",
      "Constant speed downward",
      "Constant acceleration upward",
      "Constant speed upward"
  ],
  correctAnswer: "Constant acceleration upward",
  explanation: "The increased scale reading indicates that the elevator is accelerating upward.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-222",
  topic: "physics",
  type: "discrete",
  question: "Net force F causes mass m1 to accelerate at rate a1. A net force of 3F causes m2 to accelerate at a rate of 2a. What is the ratio of m1 to m2?",
  options: [
      "2 : 3",
      "3 : 4",
      "1 : 2",
      "2 : 1"
  ],
  correctAnswer: "2 : 3",
  explanation: "Using Newton's second law (F = ma), we find m1/m2 = 2/3.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-223",
  topic: "physics",
  type: "discrete",
  question: "What is the average velocity of a car that travels due West at 30 kilometers in .5 hr?",
  options: [
      "60 km/hr west",
      "60 km/hr",
      "15 km/hr west",
      "15 km/hr"
  ],
  correctAnswer: "60 km/hr west",
  explanation: "Average velocity is calculated by dividing distance by time (30 km / 0.5 hr = 60 km/hr west).",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-224",
  topic: "physics",
  type: "discrete",
  question: "Into how many possible components can a single force be resolved?",
  options: [
      "An unlimited number",
      "Two components",
      "Three components",
      "Four components at right angles to each other"
  ],
  correctAnswer: "An unlimited number",
  explanation: "A force can be resolved into an infinite number of components as long as they add up to the original force.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-225",
  topic: "physics",
  type: "discrete",
  question: "A wooden block is at rest on a horizontal steel surface. If a 10 N force applied parallel to the surface is required to put the block in motion, how much force is required to keep the block moving at a constant velocity?",
  options: [
      "Less than 10 Newtons",
      "Greater than 10 Newtons",
      "10 Newtons"
  ],
  correctAnswer: "Less than 10 Newtons",
  explanation: "Once in motion, the block requires less force to maintain constant velocity because the kinetic friction is lower than the static friction.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-226",
  topic: "physics",
  type: "discrete",
  question: "Two cars having different weights are traveling on a level surface at different constant velocities. Within the same time interval, greater force will always be required to stop the car that has greater ______.",
  options: [
      "Weight",
      "KE",
      "Velocity",
      "Momentum"
  ],
  correctAnswer: "Momentum",
  explanation: "Momentum (mass x velocity) determines the force needed to stop the car.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-227",
  topic: "physics",
  type: "discrete",
  question: "A .050 kilogram bullet is fired from a 4.0 kilogram rifle that is initially at rest. If the bullet leaves the rifle with momentum having a magnitude of 20 kilograms ? meters per second, the rifle will recoil with a momentum having a magnitude of ___.",
  options: [
      "1,600 kg ? m/s",
      "80 kg ? m/s",
      "20 kg ? m/s",
      ".25 kg ? m/s"
  ],
  correctAnswer: "20 kg ? m/s",
  explanation: "Conservation of momentum states that the total momentum before and after firing must be equal.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-228",
  topic: "physics",
  type: "discrete",
  question: "A wooden block is at rest on a horizontal steel surface. If a 10 N force applied parallel to the surface is required to put the block in motion, how much force is required to keep the block moving at a constant velocity?",
  options: [
      "Less than 10 Newtons",
      "Greater than 10 Newtons",
      "10 Newtons"
  ],
  correctAnswer: "Less than 10 Newtons",
  explanation: "Once in motion, the block requires less force to maintain constant velocity because the kinetic friction is lower than the static friction.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-229",
  topic: "physics",
  type: "discrete",
  question: "A girl weighing 500 Newtons takes 50 seconds to climb a flight of stairs 18 meters high. Her power output vertically is ____.",
  options: [
      "120 W",
      "150 W",
      "180 W",
      "220 W"
  ],
  correctAnswer: "180 W",
  explanation: "Power is calculated as work done divided by time. Work is force times distance (500 N x 18 m = 9000 J), so power is 9000 J / 50 s = 180 W.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-230",
  topic: "physics",
  type: "discrete",
  question: "The path of a projectile fired at a 30 degree angle to the horizontal is best described as",
  options: [
      "Parabolic",
      "Linear",
      "Circular",
      "Hyperbolic"
  ],
  correctAnswer: "Parabolic",
  explanation: "The trajectory of a projectile under the influence of gravity is a parabola.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phy-231",
  topic: "physics",
  type: "discrete",
  question: "A projectile is launched with an initial velocity of 20 meters per second at an angle of 30 degrees above the horizontal. What is the magnitude of the vertical component of the projectile's initial velocity?",
  options: [
      "200 m/s x cos 30",
      "200 m/s x sin 30",
      "(200 m/s) / (sin 30)",
      "(200 m/s) / (cos 30)"
  ],
  correctAnswer: "200 m/s x sin 30",
  explanation: "The vertical component of velocity is found using the sine of the angle times the initial velocity.",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Motion Analysis"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-64",
  type: "discrete",
  question: "Which particle cannot be accelerated by a cyclotron?",
  options: [
      "Proton",
      "Neutron",
      "Electron",
      "Alpha particle"
  ],
  correctAnswer: "Neutron",
  explanation: "Neutrons have no charge and therefore cannot be accelerated by a cyclotron, which relies on electric and magnetic fields.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Nuclear Physics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-65",
  type: "discrete",
  question: "A hydrogen atom could have an electron energy level transition from n=2 to n=3 by absorbing a photon having an energy of?",
  options: [
      "1.89 eV",
      "2.04 eV",
      "2.25 eV",
      "2.87 eV"
  ],
  correctAnswer: "1.89 eV",
  explanation: "The transition from n=2 to n=3 in hydrogen corresponds to an energy absorption of approximately 1.89 eV.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Atomic Structure"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-66",
  type: "discrete",
  question: "Two solid metal blocks are placed in an insulated container. If there is a net flow of heat between the blocks, they must have different?",
  options: [
      "Initial temperatures",
      "Specific Heat values",
      "Melting points",
      "Heats of fusion"
  ],
  correctAnswer: "Initial temperatures",
  explanation: "Heat flows from a region of higher temperature to lower temperature. Thus, different temperatures are required for heat flow.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Thermodynamics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-67",
  type: "discrete",
  question: "A (P type) semiconductor is formed by adding impurities, which provide extra ____.",
  options: [
      "Electrons",
      "Neutrons",
      "Photons",
      "Holes"
  ],
  correctAnswer: "Holes",
  explanation: "P-type semiconductors have an excess of holes created by doping the material with acceptor atoms.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Semiconductors"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-68",
  type: "discrete",
  question: "A student measures a current of .05 ampere through a P type semiconductor. If the battery connections are reversed, the current through the semiconductor will be?",
  options: [
      "Less than .05 ampere",
      "Greater than .05 ampere",
      "The same"
  ],
  correctAnswer: "Greater than .05 ampere",
  explanation: "Reversing the bias on a P-type semiconductor may result in increased carrier injection, raising current.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Semiconductors"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 3"
  ]
},
{
  id: "phys-69",
  type: "discrete",
  question: "Changes in motor aphasia are often associated with a _______ lesion.",
  options: [
      "Frontal lobe",
      "Parietal lobe",
      "Broca's area",
      "Wernicke's area"
  ],
  correctAnswer: "Broca's area",
  explanation: "Broca's area is associated with motor speech production; lesions here cause expressive aphasia.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PSY"
  ],
  "subtopics": [
      "Brain Structures and Functions"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-070",
  type: "discrete",
  question: "Which particle cannot be accelerated by a cyclotron?",
  options: [
      "Proton",
      "Neutron",
      "Electron",
      "Alpha particle"
  ],
  correctAnswer: "Neutron",
  explanation: "Neutrons have no electric charge, so they cannot be accelerated by the electric fields in a cyclotron.",
  topic: "physics",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Nuclear Physics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-071",
  type: "discrete",
  question: "A 96 gram sample of a radioactive nuclide is placed in a container. After 12 minutes only 6 grams of the sample has not yet decayed. What is the half life of the nuclide?",
  options: [
      "3 minutes",
      "4 minutes",
      "5 minutes",
      "6 minutes"
  ],
  correctAnswer: "3 minutes",
  explanation: "Successive halving from 96g to 6g takes 4 half-lives: 96 \u2192 48 \u2192 24 \u2192 12 \u2192 6. So 12 minutes / 4 = 3 minutes per half-life.",
  topic: "physics",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Radioactivity"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-072",
  type: "discrete",
  question: "The principal reason for using neutrons to bombard a nucleus is that neutrons?",
  options: [
      "Have a relatively low atomic mass",
      "Can be easily accelerated",
      "Have a very high kinetic energy",
      "Are not repelled by the nucleus"
  ],
  correctAnswer: "Are not repelled by the nucleus",
  explanation: "Neutrons are neutral, so they can penetrate the nucleus without being repelled by the positively charged protons.",
  topic: "physics",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Nuclear Physics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-073",
  type: "discrete",
  question: "During a collision between a proton and an electron there is conservation of _____.",
  options: [
      "Energy, only",
      "Momentum, only",
      "Energy and Momentum",
      "Neither Energy or Momentum"
  ],
  correctAnswer: "Energy and Momentum",
  explanation: "In any isolated system, both energy and momentum are conserved.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Collisions and Conservation Laws"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-074",
  type: "discrete",
  question: "A sphere has a net excess charge of -4.8 x 10 coulomb. The sphere must have an excess of ______.",
  options: [
      "1 Electron",
      "1 Proton",
      "3 Electrons",
      "3 Protons"
  ],
  correctAnswer: "3 Electrons",
  explanation: "Each electron carries -1.6 x 10^-19 C, so -4.8 x 10^-19 C corresponds to 3 electrons.",
  topic: "physics",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Electrostatics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-075",
  type: "discrete",
  question: "An excited hydrogen atom returns to its ground state. A possible energy change for the atom is?",
  options: [
      "Loss of 10.20 eV",
      "Gain of 10.20 eV",
      "Loss of 11.70 eV",
      "Gain of 11.70 eV"
  ],
  correctAnswer: "Loss of 10.20 eV",
  explanation: "When returning to ground state, the hydrogen atom emits energy. 10.2 eV is the energy released from n=2 to n=1.",
  topic: "physics",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Atomic Structure"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-076",
  type: "discrete",
  question: "As the temperature of a surface increases, how does the rate of thermionic emission change?",
  options: [
      "Electrons are emitted at a lower rate.",
      "Electrons are emitted at a higher rate.",
      "Protons are emitted at a lower rate.",
      "Protons are emitted at a higher rate"
  ],
  correctAnswer: "Electrons are emitted at a higher rate.",
  explanation: "Thermionic emission increases with temperature as more electrons gain enough energy to escape the surface.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Thermodynamics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-38",
  type: "discrete",
  question: "Which of the following is the correct formula for focal point calculation?",
  options: [
      "F= I + O",
      "1/F = I x 1/O",
      "F = 1 x 1/O",
      "1/F = 1/I + 1/O"
  ],
  correctAnswer: "1/F = 1/I + 1/O",
  explanation: "The lens formula for calculating the focal length (F) is 1/F = 1/I + 1/O, where I is the image distance and O is the object distance.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-39",
  type: "discrete",
  question: "Which of the following is the correct formula for lens power (P)?",
  options: [
      "P = 1/f + 1/O",
      "P = 1/f",
      "P = f x O",
      "P = O/f"
  ],
  correctAnswer: "P = 1/f",
  explanation: "Lens power is defined as the reciprocal of the focal length in meters: P = 1/f (measured in diopters).",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-40",
  type: "discrete",
  question: "In a substance with a refractive index of 2.0 for light at 5.9 x 10\u2077 meter wavelength, what is the critical angle for light incident on a boundary with air?",
  options: [
      "25 Degrees",
      "30 Degrees",
      "35 Degrees",
      "40 Degrees"
  ],
  correctAnswer: "30 Degrees",
  explanation: "The critical angle is given by sin\u207b\u00b9(n\u2082/n\u2081), where n\u2082 is the index of air (1) and n\u2081 is the substance (2.0), yielding 30 degrees.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-41",
  type: "discrete",
  question: "Which phenomenon can occur with light, but not with sound?",
  options: [
      "Doppler effect",
      "Interference",
      "Polarization",
      "Refraction"
  ],
  correctAnswer: "Polarization",
  explanation: "Polarization is a property of transverse waves like light; sound waves are longitudinal and cannot be polarized.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Wave Phenomena"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-42",
  type: "discrete",
  question: "The threshold frequency of a photoemissive surface is 7.0 x 10\u00b9\u2074 Hz. Which radiation will produce the most current?",
  options: [
      "Low intensity infrared radiation",
      "High intensity infrared radiation",
      "Low intensity UV radiation",
      "High intensity UV radiation"
  ],
  correctAnswer: "High intensity UV radiation",
  explanation: "Higher intensity UV radiation contains photons with higher energy, which will cause greater emission of photoelectrons, generating more current.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Atomic and Nuclear Phenomena"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-43",
  type: "discrete",
  question: "A spherical mirror that forms only virtual images has a radius of curvature of 0.5 meters. What is the focal length?",
  options: [
      "-.125 m",
      "-.25 m",
      "2.5 m",
      "2.75 m"
  ],
  correctAnswer: "-.25 m",
  explanation: "Focal length is half the radius of curvature. For a convex mirror, focal length is negative: f = -R/2 = -0.25 m.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-44",
  type: "discrete",
  question: "Where must a bulb be located in a car headlight with a concave mirror to produce a parallel beam?",
  options: [
      "Between the principal focus and the mirror",
      "Beyond the center of curvature of the mirror",
      "At the principal focus of the mirror",
      "At the center of the curvature of the mirror"
  ],
  correctAnswer: "At the principal focus of the mirror",
  explanation: "To create a parallel beam of light, the light source must be placed at the focal point of a concave mirror.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-45",
  type: "discrete",
  question: "An object 0.080 m high is placed 0.20 m from a convex lens. The image distance is 0.40 m. What is the height of the image?",
  options: [
      "0.08 m",
      "0.16 m",
      "0.24 m",
      "0.33 m"
  ],
  correctAnswer: "0.16 m",
  explanation: "The magnification is image distance/object distance = 0.4/0.2 = 2. So, image height = 0.08 * 2 = 0.16 m.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-46",
  type: "discrete",
  question: "A diverging (concave) lens can form images that are?",
  options: [
      "Virtual, only",
      "Inverted, only",
      "Either virtual or real",
      "Either inverted or erect"
  ],
  correctAnswer: "Virtual, only",
  explanation: "Diverging lenses always form virtual, upright, and smaller images regardless of object position.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-47",
  type: "discrete",
  question: "A ray of light strikes a plane mirror at an angle of incidence of 35 degrees. What is the angle between incident and reflected rays?",
  options: [
      "45 degrees",
      "60 degrees",
      "70 degrees",
      "80 degrees"
  ],
  correctAnswer: "70 degrees",
  explanation: "The angle between the incident and reflected ray is twice the angle of incidence: 2 x 35 = 70 degrees.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-48",
  type: "discrete",
  question: "Compared to visible light, UV light has wavelengths that are?",
  options: [
      "Shorter",
      "Longer",
      "The Same"
  ],
  correctAnswer: "Shorter",
  explanation: "Ultraviolet light has shorter wavelengths than visible light and hence higher frequency and energy.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4A",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Electromagnetic Spectrum"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-49",
  type: "discrete",
  question: "Experiments performed with light indicate that light exhibits?",
  options: [
      "Particle properties, only",
      "Wave properties, only",
      "Both particle and wave properties",
      "Neither particle or wave properties"
  ],
  correctAnswer: "Both particle and wave properties",
  explanation: "Light exhibits both wave-like behavior (interference, diffraction) and particle behavior (photoelectric effect).",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4D",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Nature of Light"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-50",
  type: "discrete",
  question: "A diverging (concave) lens can form images that are?",
  options: [
      "Virtual, only",
      "Inverted, only",
      "Either virtual or real",
      "Either inverted or erect"
  ],
  correctAnswer: "Virtual, only",
  explanation: "Diverging lenses consistently produce virtual, upright, and reduced images irrespective of the object distance.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "PHY"
  ],
  "subtopics": [
      "Geometrical Optics"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-341",
  type: "discrete",
  question: "A gas sample has a volume of 25.0 milliliters at a pressure of 1.0 atmosphere. If the volume increases to 50.0 milliliters and the temperature remains constant, the new pressure will be",
  options: [
      "1.0 atm",
      "2.0 atm",
      "0.250 atm",
      "0.500 atm"
  ],
  correctAnswer: "0.500 atm",
  explanation: "According to Boyle's Law (P\u2081V\u2081 = P\u2082V\u2082), if volume doubles, pressure halves.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM",
      "PHYS"
  ],
  "subtopics": [
      "Boyle's Law",
      "Pressure-Volume Relationships"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-342",
  type: "discrete",
  question: "A sample of oxygen gas in a closed system has a volume of 200 milliliters at 600 K. If the pressure is held constant and the temperature is lowered to 300 K, the volume of the gas will be",
  options: [
      "100 ml",
      "200 ml",
      "300 ml",
      "400 ml"
  ],
  correctAnswer: "100 ml",
  explanation: "Using Charles\u2019s Law (V\u2081/T\u2081 = V\u2082/T\u2082), halving the temperature halves the volume.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM",
      "PHYS"
  ],
  "subtopics": [
      "Charles's Law",
      "Volume-Temperature Relationships"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-343",
  type: "discrete",
  question: "At 1 atmosphere of pressure, 25.0 grams of a compound at its boiling point is converted to a gas by the addition of 8,180 calories. What is the heat of vaporization for this compound, in calories per gram?",
  options: [
      "25.0 cal/g",
      "327 cal/g",
      "540 cal/g",
      "8,140 cal/g"
  ],
  correctAnswer: "327 cal/g",
  explanation: "Heat of vaporization = Total energy / mass = 8180 / 25 = 327.2 cal/g.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Heat of Vaporization"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "chem-344",
  type: "discrete",
  question: "An assumption of the kinetic energy of gases is that the particles of a gas have",
  options: [
      "Little attraction for each other and a significant volume",
      "Little attraction for each other and an insignificant volume",
      "Strong attraction for each other and a significant volume",
      "Strong attraction for each other and an insignificant volume"
  ],
  correctAnswer: "Little attraction for each other and an insignificant volume",
  explanation: "Ideal gas theory assumes negligible intermolecular forces and particle volume.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM",
      "PHYS"
  ],
  "subtopics": [
      "Ideal Gas Assumptions"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-345",
  type: "discrete",
  question: "What is the volume occupied by 2.0 moles of Ar(g) at STP?",
  options: [
      "22.4 L",
      "44.8 L",
      "89.6 L",
      "179 L"
  ],
  correctAnswer: "44.8 L",
  explanation: "At STP, 1 mole of any ideal gas occupies 22.4 L, so 2 moles = 44.8 L.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Molar Volume"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-346",
  type: "discrete",
  question: "Which gas is least likely to obey the ideal gas laws at very high temperatures and very low temperatures?",
  options: [
      "Kr",
      "Ne",
      "He",
      "Xe"
  ],
  correctAnswer: "Xe",
  explanation: "Xe has stronger van der Waals forces due to higher molecular weight, deviating from ideal behavior.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Ideal vs. Real Gas Behavior"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-347",
  type: "discrete",
  question: "A gas at STP has a volume of 1.0 liters. If the pressure is doubled and the temperature remains constant, the new volume of the gas will be",
  options: [
      "0.25 L",
      "2.0 L",
      "0.50 L",
      "4.0 L"
  ],
  correctAnswer: "0.50 L",
  explanation: "By Boyle\u2019s Law, doubling the pressure halves the volume: V = 1/2 = 0.50 L.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4C",
  "disciplines": [
      "CHEM",
      "PHYS"
  ],
  "subtopics": [
      "Boyle's Law"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-348",
  type: "discrete",
  question: "At 1 atmosphere of pressure, 25.0 grams of a compound at its boiling point is converted to a gas by the addition of 8,180 calories. What is the heat of vaporization for this compound, in calories per gram?",
  options: [
      "25.0 cal/g",
      "327 cal/g",
      "540 cal/g",
      "8,140 cal/g"
  ],
  correctAnswer: "327 cal/g",
  explanation: "Same as question 343 \u2014 repetition for reinforcement: 8180 / 25 = 327 cal/g.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Latent Heat"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "chem-349",
  type: "discrete",
  question: "An increase of the temperature of a system at equilibrium favors the",
  options: [
      "Endothermic reaction and decreases its rate",
      "Endothermic reaction and increases its rate",
      "Exothermic reaction and decreases its rate",
      "Exothermic reaction and increases its rate"
  ],
  correctAnswer: "Endothermic reaction and increases its rate",
  explanation: "According to Le Chatelier\u2019s Principle, heat favors the endothermic direction and increases reaction rate.",
  topic: "physics",
  "foundationalConcept": "5",
  "contentCategory": "5E",
  "disciplines": [
      "CHEM"
  ],
  "subtopics": [
      "Le Chatelier's Principle",
      "Reaction Rates"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-01",
  type: "discrete",
  question: "Wave velocity is a product of _______ and ________.",
  options: [
      "Wavelength and Phase angle",
      "Frequency and Wavelength",
      "Phase Angle and Frequency",
      "Amplitude and Frequency"
  ],
  correctAnswer: "Frequency and Wavelength",
  explanation: "Wave velocity (v) is given by the formula v = f \u00d7 \u03bb, where f is frequency and \u03bb is wavelength.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Waves"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-02",
  type: "discrete",
  question: "The calculation for a period of a wave (T) is indicated as the formula?",
  options: [
      "T = 1/?",
      "T = ?",
      "T = ?v",
      "T = ?/v"
  ],
  correctAnswer: "T = 1/?",
  explanation: "Period (T) is the reciprocal of frequency (f), so T = 1/f.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Waves"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-03",
  type: "discrete",
  question: "The driver of a car sounds a horn while traveling toward a stationary person. Compared to the sound of the horn heard by the driver, the sound heard by the stationary person has?",
  options: [
      "Lower pitch and shorter wavelength",
      "Lower pitch and longer wavelength",
      "Higher pitch and shorter wavelength",
      "Higher pitch and longer wavelength"
  ],
  correctAnswer: "Higher pitch and shorter wavelength",
  explanation: "Due to the Doppler Effect, the sound heard by the stationary observer is of higher frequency (higher pitch) and shorter wavelength.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Sound",
      "Waves"
  ],
  "difficulty": "Intermediate",
  "skillsTested": [
      "Skill 2"
  ]
},
{
  id: "phys-04",
  type: "discrete",
  question: "As a sound wave travels through air there is a net transfer of ____.",
  options: [
      "Energy only",
      "Mass only",
      "Both Mass and Energy",
      "Neither Mass or Energy"
  ],
  correctAnswer: "Energy only",
  explanation: "Sound waves transfer energy through the vibration of particles in the medium; mass is not transferred.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Sound"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
},
{
  id: "phys-05",
  type: "discrete",
  question: "As a wave travels through a medium, the particles of the wave vibrate in the direction of the wave's travel. What type of wave is traveling through the medium?",
  options: [
      "Longitudinal",
      "Torsional",
      "Transverse",
      "Hyperbolic"
  ],
  correctAnswer: "Longitudinal",
  explanation: "In longitudinal waves, particle displacement is parallel to wave propagation, as in sound waves in air.",
  topic: "physics",
  "foundationalConcept": "4",
  "contentCategory": "4B",
  "disciplines": [
      "PHYS"
  ],
  "subtopics": [
      "Waves",
      "Sound"
  ],
  "difficulty": "Beginner",
  "skillsTested": [
      "Skill 1"
  ]
}
   
];

// Critical Analysis and Reasoning Skills
export const section2Questions: Question[] = [
  // Example of a question with an image
  {
    id: "cars-2",
    type: "discrete",
    passage:
      "The image shows a graph representing data from a sociological study on income inequality across different demographics.",
    question: "Based on the graph shown, which conclusion is best supported by the data?",
    options: [
      "Income inequality has decreased over the past decade",
      "Education level is the strongest predictor of income",
      "There is a significant income gap between different demographic groups",
      "Government policies have successfully reduced poverty rates",
    ],
    correctAnswer: "There is a significant income gap between different demographic groups",
    image: "images/income-inequality.png", // Path to the image in the public folder
    explanation:
      "The graph clearly shows disparities in income levels across different demographic groups, supporting the conclusion that there is a significant income gap. The data does not provide sufficient information to support the other conclusions about trends over time, causation, or policy effectiveness.",
    topic: "criticalThinking",
  },
]

// Add configuration for discrete vs passage percentages for each section
export const sectionQuestionTypeConfig = {
  1: {
    discrete: 0.7, // 0.5 50% discrete questions
    passage: 0.3, // 0.5 50% passage-based questions
  },
  2: {
    discrete: 0,
    passage: 1,
  },
  3: {
    discrete: 0.7,
    passage: 0.3,
  },
  4: {
    discrete: 0.7,
    passage: 0.3,
  },
}

// Topic weightage for each section
export const sectionTopicWeightage = {
  1: {
    // Chemical and Physical Foundations
    biology: 0.05, // 5%
    generalChemistry: 0.3, // 30%
    physics: 0.25, // 25%
    organicChemistry: 0.15, // 15%
    biochemistry: 0.20, // 25%
  },
  2: {
    // Critical Analysis and Reasoning Skills
    criticalThinking: 0.5, // 50%
    ethics: 0, // 0%
    scientificHistory: 0.5, // 55%
  },
  3: {
     // Biological and Biochemical Foundations
     biology: 0.65, // 65%
     biochemistry: 0.20, // 25%
     organicChemistry: 0.05, // 5%
     generalChemistry: 0.05, // 5%
  },
  4: {
    // Psychological, Social, and Biological Foundations
    psychology: 0.65, // 65%
    sociology: 0.3, // 30%
    biology: 0.05, // 5%
  },
}

// Define the foundational concepts and content categories
export const foundationalConcepts = {
  // Biological and Biochemical Foundations
  "1": "Biomolecules have unique properties that determine how they contribute to the structure and function of cells",
  "2": "Highly-organized assemblies of molecules, cells, and organs interact to carry out the functions of living organisms",
  "3": "Complex systems of tissues and organs sense the internal and external environments of multicellular organisms, and through integrated functioning, maintain a stable internal environment within an ever-changing external environment",

  // Chemical and Physical Foundations
  "4": "Complex living organisms transport materials, sense their environment, process signals, and respond to changes using processes understood in terms of physical principles",
  "5": "The principles that govern chemical interactions and reactions form the basis for a broader understanding of the molecular dynamics of living systems",

  // Psychological, Social, and Biological Foundations
  "6": "Biological, psychological, and sociocultural factors influence the ways that individuals perceive, think about, and react to the world",
  "7": "Biological, psychological, and sociocultural factors influence behavior and behavior change",
  "8": "Psychological, sociocultural, and biological factors influence the way we think about ourselves and others, as well as how we interact",
  "9": "Cultural and social differences influence well-being",
  "10": "Social stratification and access to resources influence well-being",
}

// Define content categories
export const contentCategories = {
  // Foundational Concept 1
  "1A": "Structure and function of proteins and their constituent amino acids",
  "1B": "Transmission of genetic information from the gene to the protein",
  "1C": "Transmission of heritable information from generation to generation and the processes that increase genetic diversity",
  "1D": "Principles of bioenergetics and fuel molecule metabolism",

  // Foundational Concept 2
  "2A": "Assemblies of molecules, cells, and groups of cells within multicellular organisms",
  "2B": "The structure, growth, physiology, and genetics of prokaryotes and viruses",
  "2C": "Processes of cell division, differentiation, and specialization",

  // Foundational Concept 3
  "3A": "Structure and functions of the nervous and endocrine systems and ways in which these systems coordinate the organ systems",
  "3B": "Structure and integrative functions of the main organ systems",

  // Foundational Concept 4
  "4A": "Translational motion, forces, work, energy, and equilibrium in living systems",
  "4B": "Importance of fluids for the circulation of blood, gas movement, and gas exchange",
  "4C": "Electrochemistry and electrical circuits and their elements",
  "4D": "How light and sound interact with matter",
  "4E": "Atoms, nuclear decay, electronic structure, and atomic chemical behavior",

  // Foundational Concept 5
  "5A": "Unique nature of water and its solutions",
  "5B": "Nature of molecules and intermolecular interactions",
  "5C": "Separation and purification methods",
  "5D": "Structure, function, and reactivity of biologically-relevant molecules",
  "5E": "Principles of chemical thermodynamics and kinetics",

  // Foundational Concept 6
  "6A": "Sensing the environment",
  "6B": "Making sense of the environment",
  "6C": "Responding to the world",

  // Foundational Concept 7
  "7A": "Individual influences on behavior",
  "7B": "Social processes that influence human behavior",
  "7C": "Attitude and behavior change",

  // Foundational Concept 8
  "8A": "Self-identity",
  "8B": "Social thinking",
  "8C": "Social interactions",

  // Foundational Concept 9
  "9A": "Understanding social structure",
  "9B": "Demographic characteristics and processes",

  // Foundational Concept 10
  "10A": "Social inequality",
  "10B": "Social mobility",
}

// Define discipline tags
export const disciplineTags = {
  BIO: "Biology",
  BC: "Biochemistry",
  GC: "General Chemistry",
  OC: "Organic Chemistry",
  PHY: "Physics",
  PSY: "Psychology",
  SOC: "Sociology",
}

// Define scientific inquiry and reasoning skills
export const scientificSkills = {
  "Skill 1": "Knowledge of Scientific Concepts and Principles",
  "Skill 2": "Scientific Reasoning and Problem-Solving",
  "Skill 3": "Reasoning About the Design and Execution of Research",
  "Skill 4": "Data-Based and Statistical Reasoning",
}

