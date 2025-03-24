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
  image?: string // Add support for passage images
  questions: Question[]
}

// Sample passages for Section 4: Critical Analysis and Reasoning Skills
export const section4Passages: Passage[] = [
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

// Sample passages for Section 1: Biological and Biochemical Foundations
export const section1Passages: Passage[] = [
  {
    id: "passage-enzyme-kinetics",
    text: "Enzymes are biological catalysts that accelerate chemical reactions without being consumed in the process. They work by lowering the activation energy required for reactions to occur. Most enzymes are proteins, though some RNA molecules can also function as enzymes (ribozymes). Enzyme activity can be affected by various factors including temperature, pH, substrate concentration, and the presence of inhibitors or activators.\n\nEnzyme kinetics is the study of the chemical reactions catalyzed by enzymes, with a focus on their rates. The rate of an enzyme-catalyzed reaction increases with substrate concentration until all enzyme active sites are saturated with substrate. This relationship is typically modeled using the Michaelis-Menten equation: v = (Vmax × [S]) / (Km + [S]), where v is the reaction rate, Vmax is the maximum reaction rate, [S] is the substrate concentration, and Km (the Michaelis constant) is the substrate concentration at which the reaction rate is half of Vmax. The Km value is inversely related to the enzyme's affinity for the substrate—a lower Km indicates a higher affinity.\n\nEnzyme inhibitors can reduce the rate of an enzyme-catalyzed reaction. Competitive inhibitors bind to the enzyme's active site, preventing substrate binding. The degree of competitive inhibition depends on the relative concentrations of the inhibitor and substrate, as they compete for the same binding site. Increasing substrate concentration can overcome competitive inhibition. In contrast, noncompetitive inhibitors bind to a site other than the active site, changing the enzyme's shape so that it no longer binds substrate effectively. Noncompetitive inhibition cannot be overcome by increasing substrate concentration.\n\nAllosteric regulation is another important mechanism for controlling enzyme activity. Allosteric enzymes have regulatory binding sites separate from their active sites. When an allosteric modulator binds to the regulatory site, it changes the conformation of the enzyme, affecting its activity. Allosteric activators increase enzyme activity, while allosteric inhibitors decrease it. Many allosteric enzymes are regulated by feedback inhibition, where the end product of a metabolic pathway inhibits an enzyme early in the pathway, preventing the unnecessary production of more product.",
    topic: "biochemistry",
    image: "/images/enzyme-reaction-diagram.jpg", // Add an image to the passage
    questions: [
      {
        id: "bio-passage1-q1",
        type: "passage",
        passageId: "passage-enzyme-kinetics",
        question: "Which of the following best describes competitive enzyme inhibition?",
        options: [
          "An inhibitor binds to the active site, preventing substrate binding",
          "An inhibitor binds to a site other than the active site, changing the enzyme's shape",
          "The end product of a pathway inhibits an enzyme earlier in the pathway",
          "The enzyme is permanently denatured by high temperature",
        ],
        correctAnswer: "An inhibitor binds to the active site, preventing substrate binding",
        explanation:
          "This is a detail question about competitive inhibition. According to the third paragraph, 'Competitive inhibitors bind to the enzyme's active site, preventing substrate binding.' This directly matches option A.",
        topic: "biochemistry",
      },
      {
        id: "bio-passage1-q2",
        type: "passage",
        passageId: "passage-enzyme-kinetics",
        question: "How would increasing substrate concentration affect a reaction with competitive inhibition?",
        options: [
          "It would have no effect on the reaction rate",
          "It would decrease the reaction rate",
          "It would overcome the inhibition and increase the reaction rate",
          "It would permanently inactivate the enzyme",
        ],
        correctAnswer: "It would overcome the inhibition and increase the reaction rate",
        explanation:
          "This question tests your understanding of competitive inhibition. The passage states in the third paragraph that 'Increasing substrate concentration can overcome competitive inhibition.' This is because competitive inhibitors compete with the substrate for the active site, so having more substrate molecules increases the likelihood that a substrate, rather than an inhibitor, will bind to the enzyme.",
        topic: "biochemistry",
      },
      {
        id: "bio-passage1-q3",
        type: "passage",
        passageId: "passage-enzyme-kinetics",
        question: "What does a low Km value indicate about an enzyme?",
        options: [
          "The enzyme has a low affinity for its substrate",
          "The enzyme has a high affinity for its substrate",
          "The enzyme has a high maximum reaction rate",
          "The enzyme is easily denatured",
        ],
        correctAnswer: "The enzyme has a high affinity for its substrate",
        explanation:
          "This is a detail question about the Michaelis constant (Km). According to the second paragraph, 'The Km value is inversely related to the enzyme's affinity for the substrate—a lower Km indicates a higher affinity.' This directly supports option B.",
        topic: "biochemistry",
      },
      {
        id: "bio-passage1-q4",
        type: "passage",
        passageId: "passage-enzyme-kinetics",
        question: "Which of the following is an example of allosteric regulation?",
        options: [
          "An enzyme changing shape due to high temperature",
          "A substrate binding to an enzyme's active site",
          "An inhibitor competing with substrate for the active site",
          "The end product of a pathway binding to an enzyme and decreasing its activity",
        ],
        correctAnswer: "The end product of a pathway binding to an enzyme and decreasing its activity",
        explanation:
          "This question tests your understanding of allosteric regulation. The fourth paragraph describes allosteric regulation and specifically mentions feedback inhibition, where 'the end product of a metabolic pathway inhibits an enzyme early in the pathway.' This matches option D. The other options describe different phenomena: option A is denaturation, option B is normal enzyme function, and option C is competitive inhibition.",
        topic: "biochemistry",
      },
      {
        id: "bio-passage1-q5",
        type: "passage",
        passageId: "passage-enzyme-kinetics",
        question:
          "According to the Michaelis-Menten equation, what happens to the reaction rate as substrate concentration approaches infinity?",
        options: [
          "The reaction rate approaches zero",
          "The reaction rate approaches Vmax",
          "The reaction rate approaches Km",
          "The reaction rate becomes unpredictable",
        ],
        correctAnswer: "The reaction rate approaches Vmax",
        explanation:
          "This question tests your understanding of the Michaelis-Menten equation: v = (Vmax × [S]) / (Km + [S]). As [S] (substrate concentration) approaches infinity, the denominator (Km + [S]) becomes approximately equal to [S]. The equation then simplifies to v ≈ (Vmax × [S]) / [S] = Vmax. Therefore, the reaction rate approaches Vmax as substrate concentration approaches infinity.",
        topic: "biochemistry",
      },
    ],
  },
]

// Sample passages for Section 2: Chemical and Physical Foundations
export const section2Passages: Passage[] = [
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
]

// Sample passages for Section 3: Psychological, Social, and Biological Foundations
export const section3Passages: Passage[] = [
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
]

// Section 1: Biological and Biochemical Foundations of Living Systems
export const section1Questions: Question[] = [
  {
    id: "bio-1",
    type: "discrete",
    question: "Which of the following is a function of the plasma membrane?",
    options: [
      "Energy production through cellular respiration",
      "Selective permeability to control substance movement",
      "Protein synthesis and modification",
      "Storage of genetic information",
    ],
    correctAnswer: "Selective permeability to control substance movement",
    explanation:
      "The plasma membrane exhibits selective permeability, allowing it to control which substances enter and exit the cell. This is essential for maintaining homeostasis and proper cellular function.",
    topic: "biology",
  },
  {
    id: "bio-2",
    type: "discrete",
    question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
    options: ["DNA polymerase", "DNA helicase", "DNA ligase", "Primase"],
    correctAnswer: "DNA helicase",
    explanation:
      "DNA helicase breaks the hydrogen bonds between complementary base pairs in DNA, unwinding the double helix and creating a replication fork. This allows other enzymes to access the separated strands for replication.",
    topic: "biology",
  },
  {
    id: "bio-4",
    type: "discrete",
    question: "Which of the following is NOT a component of the Krebs cycle?",
    options: ["Acetyl-CoA", "Citrate", "Pyruvate", "α-Ketoglutarate"],
    correctAnswer: "Pyruvate",
    explanation:
      "Pyruvate is not a component of the Krebs cycle itself. Pyruvate is produced during glycolysis and is then converted to acetyl-CoA, which enters the Krebs cycle. The other options (acetyl-CoA, citrate, and α-ketoglutarate) are all intermediates in the Krebs cycle.",
    topic: "biochemistry",
  },
  {
    id: "bio-5",
    type: "discrete",
    question: "Which functional group is characteristic of alcohols?",
    options: ["Carbonyl (C=O)", "Hydroxyl (-OH)", "Carboxyl (-COOH)", "Amino (-NH2)"],
    correctAnswer: "Hydroxyl (-OH)",
    explanation:
      "Alcohols are characterized by the presence of a hydroxyl (-OH) group attached to a carbon atom. This functional group gives alcohols their distinctive properties, including the ability to form hydrogen bonds.",
    topic: "organicChemistry",
  },
  // Example of a question with an image
  {
    id: "bio-6",
    type: "discrete",
    question: "Identify the structure shown in the image:",
    options: ["Mitochondrion", "Golgi apparatus", "Endoplasmic reticulum", "Lysosome"],
    correctAnswer: "Mitochondrion",
    image: "/images/mitochondrion.jpg", // Path to the image in the public folder
    topic: "biology",
    explanation:
      "The image shows a mitochondrion, which is characterized by its double membrane structure with the inner membrane forming cristae. Mitochondria are the powerhouses of the cell, responsible for producing ATP through cellular respiration.",
  },
  {
    id: "bio-7",
    type: "discrete",
    question: "Which phase of mitosis is shown in the image?",
    options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    correctAnswer: "Metaphase",
    image: "/images/metaphase.jpg",
    topic: "biology",
    explanation:
      "The image shows metaphase of mitosis. During metaphase, chromosomes align at the metaphase plate (the equator of the cell). The spindle fibers attach to the centromeres of the chromosomes, preparing them for separation in the next phase (anaphase).",
    explanationImage: "/images/mitosis-phases.jpg", // Image showing all phases of mitosis for comparison
  },
  {
    id: "bio-8",
    type: "discrete",
    question: "Which structure shows two amino acids linked by 1 peptide bond?",
    options: ["Image A", "Image B", "Image C", "Image D"],
    optionImages: [
      "/images/peptide-bond-1.jpg",
      "/images/peptide-bond-2.jpg",
      "/images/peptide-bond-3.jpg",
      "/images/peptide-bond-4.jpg",
    ],
    correctAnswer: "Image D",
    explanation:
      "A peptide bond is formed between the carboxyl group of one amino acid and the amino group of another amino acid, with the release of a water molecule. Image D correctly shows two amino acids linked by a single peptide bond, with the characteristic C-N linkage and the overall structure maintaining the amino and carboxyl termini.",
    explanationImage: "/images/peptide-bond-explanation.jpg",
    topic: "biochemistry",
  },
]

// Section 2: Chemical and Physical Foundations of Biological Systems
export const section2Questions: Question[] = [
  {
    id: "chem-2",
    type: "discrete",
    question: "Which of the following best describes Coulomb's law?",
    options: [
      "The force between two charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them",
      "The total electric flux through any closed surface is proportional to the enclosed electric charge",
      "Electric current flowing through a conductor is directly proportional to the voltage and inversely proportional to the resistance",
      "The induced electromotive force in a circuit is equal to the rate of change of magnetic flux through the circuit",
    ],
    correctAnswer:
      "The force between two charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them",
    explanation:
      "Coulomb's law describes the electrostatic force between charged particles. It states that the force is directly proportional to the product of the charges and inversely proportional to the square of the distance between them, similar to Newton's law of gravitation.",
    topic: "physics",
  },
  // Example of a question with an image
  {
    id: "chem-3",
    type: "discrete",
    question: "What type of bond is shown in the image?",
    options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Van der Waals interaction"],
    correctAnswer: "Covalent bond",
    image: "/images/covalent-bond.png", // Path to the image in the public folder
    topic: "generalChemistry",
    explanation:
      "The image shows a covalent bond, which is formed by the sharing of electron pairs between atoms. This type of bond is common in organic molecules and is characterized by the overlap of electron orbitals.",
  },
]

// Section 3: Psychological, Social, and Biological Foundations of Behavior
export const section3Questions: Question[] = [
  {
    id: "psych-1",
    type: "discrete",
    question: "Which of the following is NOT one of Erikson's psychosocial stages of development?",
    options: [
      "Trust vs. Mistrust",
      "Industry vs. Inferiority",
      "Concrete Operations vs. Formal Operations",
      "Integrity vs. Despair",
    ],
    correctAnswer: "Concrete Operations vs. Formal Operations",
    explanation:
      "Concrete Operations vs. Formal Operations is not one of Erikson's psychosocial stages but rather belongs to Piaget's theory of cognitive development. Erikson's stages include Trust vs. Mistrust, Autonomy vs. Shame and Doubt, Initiative vs. Guilt, Industry vs. Inferiority, Identity vs. Role Confusion, Intimacy vs. Isolation, Generativity vs. Stagnation, and Integrity vs. Despair.",
    topic: "psychology",
  },
  // Example of a question with an image
  {
    id: "psych-2",
    type: "discrete",
    question: "Which brain structure is highlighted in the image?",
    options: ["Amygdala", "Hippocampus", "Prefrontal cortex", "Cerebellum"],
    correctAnswer: "Hippocampus",
    image: "/images/hippocampus.jpg", // Path to the image in the public folder
    explanation:
      "The image highlights the hippocampus, a structure in the limbic system that plays a crucial role in the formation of new memories and spatial navigation. Damage to the hippocampus can result in anterograde amnesia, the inability to form new memories.",
    topic: "psychology",
  },
]

// Section 4: Critical Analysis and Reasoning Skills
export const section4Questions: Question[] = [
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
    image: "/images/income-inequality.png", // Path to the image in the public folder
    explanation:
      "The graph clearly shows disparities in income levels across different demographic groups, supporting the conclusion that there is a significant income gap. The data does not provide sufficient information to support the other conclusions about trends over time, causation, or policy effectiveness.",
    topic: "criticalThinking",
  },
]

// Add configuration for discrete vs passage percentages for each section
export const sectionQuestionTypeConfig = {
  1: {
    discrete: 0.5, // 50% discrete questions
    passage: 0.5, // 50% passage-based questions
  },
  2: {
    discrete: 0.5,
    passage: 0.5,
  },
  3: {
    discrete: 0.5,
    passage: 0.5,
  },
  4: {
    discrete: 0.3, // CARS has more passage-based questions
    passage: 0.7,
  },
}

// Topic weightage for each section
export const sectionTopicWeightage = {
  1: {
    // Biological and Biochemical Foundations
    biology: 0.55, // 55%
    biochemistry: 0.25, // 25%
    organicChemistry: 0.15, // 15%
    generalChemistry: 0.05, // 5%
  },
  2: {
    // Chemical and Physical Foundations
    generalChemistry: 0.3, // 30%
    physics: 0.25, // 25%
    organicChemistry: 0.15, // 15%
    biochemistry: 0.25, // 25%
  },
  3: {
    // Psychological, Social, and Biological Foundations
    psychology: 0.65, // 65%
    sociology: 0.3, // 30%
    biology: 0.05, // 5%
  },
  4: {
    // Critical Analysis and Reasoning Skills
    criticalThinking: 0.5, // 50%
    ethics: 0.25, // 25%
    scientificHistory: 0.25, // 25%
  },
}

// Define the foundational concepts and content categories
export const foundationalConcepts = {
  // Section 1: Biological and Biochemical Foundations
  "1": "Biomolecules have unique properties that determine how they contribute to the structure and function of cells",
  "2": "Highly-organized assemblies of molecules, cells, and organs interact to carry out the functions of living organisms",
  "3": "Complex systems of tissues and organs sense the internal and external environments of multicellular organisms, and through integrated functioning, maintain a stable internal environment within an ever-changing external environment",

  // Section 3: Chemical and Physical Foundations
  "4": "Complex living organisms transport materials, sense their environment, process signals, and respond to changes using processes understood in terms of physical principles",
  "5": "The principles that govern chemical interactions and reactions form the basis for a broader understanding of the molecular dynamics of living systems",

  // Section 2: Psychological, Social, and Biological Foundations
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

