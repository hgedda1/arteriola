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
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "Genetic Code"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "RNA Structure and Function"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BIOLOGY"
    ],
    subtopics: [
      "DNA/RNA Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BIOLOGY"
    ],
    subtopics: [
      "DNA/RNA Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "Protein Analysis Techniques"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "sociology",
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
    foundationalConcept: "2",
    contentCategory: "2C",
    disciplines: [
      "BIOLOGY"
    ],
    subtopics: [
      "Genetic Disorders"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIOLOGY"
    ],
    subtopics: [
      "Genetic Variation",
      "Population Genetics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "Metabolism",
      "High-Energy Molecules"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "TCA Cycle"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "Gluconeogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BIOCHEMISTRY"
    ],
    subtopics: [
      "Amino Acid Derivatives"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-13",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hematologic system",
      "Liver function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-14",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular system",
      "Circulatory anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-15",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiac circulation"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-16",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiac auscultation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-17",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiac cycle"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-18",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiac cycle"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-19",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vascular system",
      "Histology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-20",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrine system",
      "Renin-angiotensin-aldosterone system"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-21",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-22",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular pathology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-103",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Gastrointestinal Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-104",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Virology",
      "Liver Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-105",
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
    foundationalConcept: "2",
    contentCategory: "2B",
    disciplines: [
      "BIOCHEM"
    ],
    subtopics: [
      "Vitamins",
      "Liver Function"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-106",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbiology",
      "Infections"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-107",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrinology",
      "Hormone Regulation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-108",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrinology",
      "Hormone Regulation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-109",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrinology",
      "Hormone Regulation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-110",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-112",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Digestive Enzymes"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-113",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cell Division",
      "Mitosis"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-114",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cellular Organelles",
      "Enzyme Function"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-115",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cell Division",
      "Tissue Repair"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-116",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Enzyme Function",
      "Biochemical Reactions"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-117",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Enzyme Function",
      "Biochemical Reactions"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-118",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lipid Signaling Molecules",
      "Inflammation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-121",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Respiratory Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-122",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-123",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-124",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Gastrointestinal Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-136",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIOCHEM"
    ],
    subtopics: [
      "Lipids",
      "Fatty Acids"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-137",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-138",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Liver Function",
      "Alcohol Metabolism"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-139",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Respiratory Physiology",
      "Hemoglobin Function"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "bio-140",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Respiratory Mechanics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-143",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurophysiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-144",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Skeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "bio-145",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Skeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-146",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hearing",
      "Sensory Systems"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-147",
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
    foundationalConcept: "2",
    contentCategory: "2B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins",
      "Bone Health"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-148",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIOCHEM"
    ],
    subtopics: [
      "Lipids",
      "Steroids"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-149",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neuroanatomy",
      "Cranial Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-150",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-151",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-152",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-153",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Musculoskeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-154",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Anatomy",
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-155",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Dermatomes"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-156",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-157",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System",
      "Peripheral Nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-158",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System",
      "Peripheral Nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-159",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-160",
    type: "discrete",
    question: "Which of the following nerves is not directly linked to the L2-L3 spinal level?",
    options: [
      "Tibial",
      "Obturator",
      "Femoral"
    ],
    correctAnswer: "Tibial",
    explanation: "The tibial nerve originates from the sacral plexus, not from the L2-L3 levels of the lumbar plexus.",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System",
      "Peripheral Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-161",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-162",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-163",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-164",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System",
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-165",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-166",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-167",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System",
      "Peripheral Nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-168",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Peripheral Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-169",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Eye Muscles"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-170",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy",
      "Eye Muscles"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-173",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Dermatology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-174",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-175",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-176",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-177",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Biochemistry"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-178",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Dermatology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-179",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Burn Care",
      "Grafting"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-180",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy",
      "Sebaceous Glands"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-181",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-182",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System",
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-183",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-184",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-185",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-187",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-188",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System",
      "Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-189",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-190",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-191",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-192",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-193",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-194",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-195",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-202",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbial Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-204",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Bacterial Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-205",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Bacterial Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-206",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbial Transmission"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-207",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbial Transmission"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-209",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Fungal Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-210",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-211",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-212",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-213",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-214",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Diagnosis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "CHEM"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamins",
      "Nutritional Deficiencies"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamins",
      "Blood Clotting"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamin Classification"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Macronutrients and Micronutrients"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamin Sources"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamin Sources"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Atomic Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hormonal Regulation of Fluid Balance"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renin-Angiotensin System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "sociology",
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiac Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "physics",
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Heart Sounds and Pathology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Kidney Function and Clearance"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Pituitary Hormones"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Thyroid Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Steroid Hormone Synthesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Digestive Enzymes"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neural Regulation of Digestion"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hormonal Regulation of BP"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Female Reproductive Hormones"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Estrogen Functions"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Reproductive System",
      "Fertilization"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Reproductive Development"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Male Reproductive System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Fertilization"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "psych-421",
    type: "discrete",
    question: "The umbilical vein carries _____ blood.",
    options: [
      "Deoxygenated",
      "Oxygenated"
    ],
    correctAnswer: "Oxygenated",
    explanation: "The umbilical vein carries oxygenated blood from the placenta to the fetus.",
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Fetal Circulation"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Menstrual Cycle"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hormonal Regulation",
      "Pregnancy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Respiratory System",
      "Lung Cancer"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Pulmonary Function",
      "Cell Biology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Respiratory Pathophysiology",
      "COPD"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "COPD",
      "Pulmonary Diseases"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurophysiology",
      "Respiratory Control"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal System",
      "Kidney Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal Circulation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Urinary System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Nephron Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Urinary System Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Urinary Reflexes"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal Circulation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Nephron Function"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Genetics",
      "Molecular Biology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Genetics",
      "Molecular Biology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Genetics"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Genetics"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Amino Acids & Proteins"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "sociology",
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
    foundationalConcept: "2",
    contentCategory: "2C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Genetics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Genetics",
      "Evolution"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Bioenergetics",
      "Metabolism"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Metabolism"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Metabolism"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Amino Acids & Proteins"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-13",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-14",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-15",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-16",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-17",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-18",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-19",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-20",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-21",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-22",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-103",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "biology",
    id: "bio-104",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbiology",
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-105",
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
    foundationalConcept: "2",
    contentCategory: "2B",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Metabolism",
      "Liver function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-106",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-107",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrine system"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-108",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrine system"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-109",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Endocrine system"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-110",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-112",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Digestive Enzymes"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-113",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cell Biology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-114",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cell Biology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-115",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cell Biology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-116",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Enzymes"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
    id: "bio-117",
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
    foundationalConcept: "1",
    contentCategory: "1C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Enzymes"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-118",
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
    foundationalConcept: "1",
    contentCategory: "1D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lipids"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-121",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-122",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-123",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renal Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-124",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-136",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Lipids"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-137",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-138",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Liver Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-139",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hemoglobin Function"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "bio-140",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Respiratory Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-143",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurophysiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-144",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "bio-145",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-146",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Sensory Systems"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-147",
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
    foundationalConcept: "2",
    contentCategory: "2B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-148",
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BC"
    ],
    subtopics: [
      "Lipids"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-149",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurophysiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-150",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Physiology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-151",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-152",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-153",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-154",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-155",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-156",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-157",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-158",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-159",
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
    foundationalConcept: "3",
    contentCategory: "3A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-160",
    type: "discrete",
    question: "Which of the following nerves is not directly linked to the L2-L3 spinal level?",
    options: [
      "Tibial",
      "Obturator",
      "Femoral"
    ],
    correctAnswer: "Tibial",
    explanation: "The tibial nerve originates from the sacral plexus, not from the L2-L3 levels of the lumbar plexus.",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Peripheral Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-161",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-162",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-163",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiovascular Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-164",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neuroanatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-165",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Musculoskeletal System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-166",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Peripheral Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-167",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Peripheral Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-168",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Peripheral Nerves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-169",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-170",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-173",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Dermatology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-174",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-175",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-176",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-177",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Skin Anatomy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-178",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Dermatology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-179",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Burn Care"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-180",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Sebaceous Glands"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-181",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-182",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-183",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-184",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-185",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-187",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-188",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-189",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-190",
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
    foundationalConcept: "3",
    contentCategory: "3D",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Lymphatic System"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-191",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-192",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-193",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-194",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-195",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Immunology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-202",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbial Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-204",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Bacterial Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "bio-205",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Bacterial Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-206",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbial Transmission"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-207",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Microbial Transmission"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-209",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Fungal Pathogenesis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-210",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-211",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-212",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-213",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "bio-214",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Viral Diagnosis"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "CHEM"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamins and Nutrients"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamins",
      "Nutritional Deficiencies"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamins",
      "Blood Clotting"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamin Classification"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Macronutrients and Micronutrients"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Vitamin Sources"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "1",
    contentCategory: "1B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Vitamin Sources"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
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
    foundationalConcept: "1",
    contentCategory: "1A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Atomic Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Hormonal Regulation of Fluid Balance"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biochemistry",
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Renin-Angiotensin System"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "sociology",
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
    foundationalConcept: "3",
    contentCategory: "3C",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cardiac Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "physics",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Biochemistry"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "2",
    contentCategory: "2A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology",
      "Cell Biology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
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
    foundationalConcept: "3",
    contentCategory: "3B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Anatomy & Physiology"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  }
];

// Section 2: Chemical and Physical Foundations of Biological Systems
export const section2Questions: Question[] = [
  
  {
    topic: "psychology",
    id: "psych-48",
    type: "discrete",
    question: "Choose the option that best reflects the meaning of the key word. A lyre was played in ancient Rome. Lyre means...",
    options: [
      "Stringed instrument in the harp class.",
      "Percussion instrument.",
      "Wind instrument in the wind class.",
      "Rhythmic percussion device."
    ],
    correctAnswer: "Stringed instrument in the harp class.",
    explanation: "A lyre is a stringed instrument that was often used in ancient Greek and Roman music.",
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-56",
    type: "discrete",
    question: "The tolerant attitude of the audience was appreciated. Tolerant means...",
    options: [
      "Tireless.",
      "Calm.",
      "Indulgent.",
      "Laborious."
    ],
    correctAnswer: "Indulgent.",
    explanation: "Tolerant means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-59",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-60",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-61",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-62",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-63",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-64",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-65",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "psych-66",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-67",
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
    foundationalConcept: "6",
    contentCategory: "Vocabulary",
    disciplines: [
      "PSYCH"
    ],
    subtopics: [
      "Vocabulary and semantic processing"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-01",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1",
      "Skill 2"
    ]
  },
  {
    topic: "psychology",
    id: "psych-02",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1",
      "Skill 2"
    ]
  },
  {
    topic: "psychology",
    id: "psych-03",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Medical terminology in context"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-04",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Emotion and personality traits"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-05",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-06",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Behavioral language"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-07",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Cognition and wisdom"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-08",
    type: "discrete",
    question: "The inventor created several specious ideas to solve the problem. Specious means...",
    options: [
      "Inspired.",
      "Insufficient.",
      "Limited.",
      "falsely plausible."
    ],
    correctAnswer: "falsely plausible.",
    explanation: "Specious means something that seems true but is actually false or misleading.",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Language and reasoning"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1",
      "Skill 2"
    ]
  },
  {
    topic: "sociology",
    id: "psych-10",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSYCHOLOGY"
    ],
    subtopics: [
      "Language usage"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-20",
    type: "discrete",
    question: "Oligodendrocytes are located in the _____.",
    options: [
      "PNS",
      "CNS"
    ],
    correctAnswer: "CNS",
    explanation: "Oligodendrocytes are a type of glial cell found in the central nervous system (CNS) that produce myelin.",
    topic: "biology",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Nervous System",
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-21",
    type: "discrete",
    question: "Schwann cells are located in the _____.",
    options: [
      "PNS",
      "CNS"
    ],
    correctAnswer: "PNS",
    explanation: "Schwann cells are glial cells in the peripheral nervous system (PNS) responsible for the formation of myelin.",
    topic: "biology",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Nervous System",
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-22",
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
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Nervous System",
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-23",
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
    topic: "biochemistry",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Neurotransmission",
      "Signal Transduction"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    id: "psych-24",
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
    topic: "generalChemistry",
    foundationalConcept: "7",
    contentCategory: "7B",
    disciplines: [
      "BIO",
      "PSY"
    ],
    subtopics: [
      "Drugs and Behavior"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-25",
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
    topic: "biochemistry",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Neurotransmission"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-26",
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
    topic: "biochemistry",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO",
      "BIOC"
    ],
    subtopics: [
      "Neurotoxins"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-27",
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
    topic: "biology",
    foundationalConcept: "7",
    contentCategory: "7B",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurological Disorders"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-28",
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
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neural Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-29",
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
    topic: "biology",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Action Potential"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-30",
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
    topic: "biology",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-31",
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
    topic: "biology",
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neuroanatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Autonomic nervous system"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial nerves",
      "Motor function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial Nerves",
      "Vision"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "generalChemistry",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial Nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurobiology",
      "Movement Disorders"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Spinal Nerves",
      "Motor Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Brachial Plexus"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Brachial Plexus"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Brachial Plexus"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Neurological Disorders",
      "Motor Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Cranial Nerves",
      "Vascular Lesions"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "BIO"
    ],
    subtopics: [
      "Spinal Cord Disorders"
    ],
    difficulty: "Advanced",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-48",
    type: "discrete",
    question: "Choose the option that best reflects the meaning of the key word. A lyre was played in ancient Rome. Lyre means...",
    options: [
      "Stringed instrument in the harp class.",
      "Percussion instrument.",
      "Wind instrument in the wind class.",
      "Rhythmic percussion device."
    ],
    correctAnswer: "Stringed instrument in the harp class.",
    explanation: "A lyre is a stringed instrument that was often used in ancient Greek and Roman music.",
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-56",
    type: "discrete",
    question: "The tolerant attitude of the audience was appreciated. Tolerant means...",
    options: [
      "Tireless.",
      "Calm.",
      "Indulgent.",
      "Laborious."
    ],
    correctAnswer: "Indulgent.",
    explanation: "Tolerant means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with.",
    foundationalConcept: "8",
    contentCategory: "8A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-59",
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
    foundationalConcept: "6",
    contentCategory: "6C",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-60",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-61",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-62",
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
    foundationalConcept: "8",
    contentCategory: "8A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-63",
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
    foundationalConcept: "7",
    contentCategory: "7A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-64",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cognition"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-65",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "psych-66",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-67",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-01",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "psychology",
    id: "psych-02",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "psychology",
    id: "psych-03",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Medical terminology in context"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-04",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Emotion and personality traits"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-05",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and vocabulary"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-06",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Behavioral language"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-07",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cognition"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "psychology",
    id: "psych-08",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language and reasoning"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "sociology",
    id: "psych-10",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Language usage"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-20",
    type: "discrete",
    question: "Oligodendrocytes are located in the _____.",
    options: [
      "PNS",
      "CNS"
    ],
    correctAnswer: "CNS",
    explanation: "Oligodendrocytes are a type of glial cell found in the central nervous system (CNS) that produce myelin.",
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Nervous System",
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-21",
    type: "discrete",
    question: "Schwann cells are located in the _____.",
    options: [
      "PNS",
      "CNS"
    ],
    correctAnswer: "PNS",
    explanation: "Schwann cells are glial cells in the peripheral nervous system (PNS) responsible for the formation of myelin.",
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Nervous System",
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-22",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Nervous System",
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-23",
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
    topic: "biochemistry",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neurotransmission",
      "Signal Transduction"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    id: "psych-24",
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
    topic: "generalChemistry",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Drugs and Behavior"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-25",
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
    topic: "biochemistry",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neurotransmission"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-26",
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
    topic: "biochemistry",
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neurotoxins"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-27",
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neurological Disorders"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-28",
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
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neural Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-29",
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Action Potential"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-30",
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Glial Cells"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    id: "psych-31",
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
    topic: "biology",
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neuroanatomy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "10",
    contentCategory: "10A",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Autonomic nervous system"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial nerves",
      "Motor function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial Nerves",
      "Vision"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "generalChemistry",
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial Nerves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
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
    topic: "psychology",
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neurobiology",
      "Movement Disorders"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Spinal Nerves",
      "Motor Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Brachial Plexus"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Brachial Plexus"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "9",
    contentCategory: "9B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Brachial Plexus"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Neurological Disorders",
      "Motor Function"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Cranial Nerves",
      "Vascular Lesions"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
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
    topic: "psychology",
    foundationalConcept: "6",
    contentCategory: "6B",
    disciplines: [
      "PSY"
    ],
    subtopics: [
      "Spinal Cord Disorders"
    ],
    difficulty: "Advanced",
    skillsTested: [
      "Skill 1"
    ]
  }
 
];

// Section 3: Psychological, Social, and Biological Foundations of Behavior
export const section3Questions: Question[] = [
  
  {
    topic: "physics",
    id: "phys-03",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electrostatics"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "phys-04",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Power and Resistance"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "phys-05",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Work, Energy, Power"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2",
      "Skill 4"
    ]
  },
  {
    topic: "generalChemistry",
    id: "phys-06",
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
    foundationalConcept: "4",
    contentCategory: "4E",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Photoelectric Effect"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "phys-07",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electric Circuits"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-08",
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
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electromagnetism"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-09",
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
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Circuits"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "phys-10",
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
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electromagnetic Induction"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2",
      "Skill 4"
    ]
  },
  {
    topic: "physics",
    id: "phys-11",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electric Circuits"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "phys-12",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electric Circuits"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-13",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Materials and Resistance"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-68",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Chemical Compounds",
      "Periodic Table"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-69",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Periodic Trends",
      "Electronegativity"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "sociology",
    id: "chem-70",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Periodic Table",
      "Metalloids"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-71",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Electrolysis",
      "Reactivity"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-72",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Reactivity",
      "Chemical Stability"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-73",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Corrosion",
      "Oxidation"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "chem-74",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Chemical Processes",
      "Industrial Chemistry"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "chem-77",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Transition Metals",
      "Solution Properties"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-78",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Metallic Bonding",
      "Crystal Structure"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "chem-79",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Acids and Bases",
      "Indicators"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "biology",
    id: "chem-80",
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Electrochemistry",
      "Equilibrium"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
    id: "phys-84",
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
    foundationalConcept: "5",
    contentCategory: "5A",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Work",
      "Energy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-85",
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
    foundationalConcept: "5",
    contentCategory: "5A",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Potential Energy",
      "Springs"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-87",
    type: "discrete",
    question: "An electron is located between a pair of oppositely charged parallel plates. As the electron approaches the positively charged plate, the kinetic energy of the electron?",
    options: [
      "Increases",
      "Decreases",
      "Remains the same"
    ],
    correctAnswer: "Increases",
    explanation: "As the electron moves toward the positively charged plate, it accelerates due to the electric field, resulting in an increase in kinetic energy.",
    foundationalConcept: "5",
    contentCategory: "5A",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Electric Fields",
      "Kinetic Energy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-88",
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
    foundationalConcept: "5",
    contentCategory: "5A",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Momentum",
      "Kinetic Energy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "phys-89",
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
    foundationalConcept: "5",
    contentCategory: "5A",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Power",
      "Forces"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "chem-96",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Gas Laws"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-97",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Thermodynamics"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "chem-98",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Kinetic Theory"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "chem-99",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Kinetic Energy"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "chem-101",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Heat Transfer",
      "Thermodynamics"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "chem-102",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Electrostatics",
      "Charge Transfer"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "organicChemistry",
    id: "bio-128",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "BIOCHEM"
    ],
    subtopics: [
      "Thermodynamics",
      "Reaction Energetics"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
    id: "bio-129",
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
    foundationalConcept: "5",
    contentCategory: "5A",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Light and Color"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "generalChemistry",
    id: "phy-216",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "One-dimensional motion"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Scientific Reasoning",
      "Quantitative Skills"
    ]
  },
  {
    topic: "physics",
    id: "phy-218",
    type: "discrete",
    question: "A bicyclist accelerates from rest to a speed of 5.0 meters per second in 10 seconds. During the same 10 seconds, a car accelerates from a speed of 22 meters per second to a speed of 27 meters per second. Compared to the acceleration of the bicycle the acceleration of the car is?",
    options: [
      "The same",
      "Greater",
      "Less"
    ],
    correctAnswer: "The same",
    explanation: "Both the bicycle and the car have the same acceleration because they cover the same change in velocity over the same time interval.",
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Acceleration and velocity"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning",
      "Data Interpretation"
    ]
  },
  {
    topic: "physics",
    id: "phy-220",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Average velocity"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Quantitative Skills"
    ]
  },
  {
    topic: "physics",
    id: "phy-221",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Forces and Newton\u2019s laws"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning"
    ]
  },
  {
    topic: "physics",
    id: "phy-224",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Vector components"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning"
    ]
  },
  {
    topic: "physics",
    id: "phy-225",
    type: "discrete",
    question: "A wooden block is at rest on a horizontal steel surface. If a 10 N force applied parallel to the surface is required to put the block in motion, how much force is required to keep the block moving at a constant velocity?",
    options: [
      "Less than 10 Newtons",
      "Greater than 10 Newtons",
      "10 Newtons"
    ],
    correctAnswer: "Less than 10 Newtons",
    explanation: "Once in motion, the block requires less force to maintain constant velocity because the kinetic friction is lower than the static friction.",
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Kinetic vs static friction"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning",
      "Experimental Design"
    ]
  },
  {
    topic: "physics",
    id: "phy-226",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Linear momentum"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning",
      "Quantitative Skills"
    ]
  },
  {
    topic: "physics",
    id: "phy-227",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Conservation of momentum"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning",
      "Quantitative Skills"
    ]
  },
  {
    topic: "physics",
    id: "phy-229",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Work, energy, and power"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Scientific Reasoning",
      "Quantitative Skills"
    ]
  },
  {
    topic: "physics",
    id: "phy-230",
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Projectile motion"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Scientific Reasoning"
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Nuclear Physics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4E",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Atomic Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Thermodynamics"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Semiconductors"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Semiconductors"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 3"
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
    topic: "biology",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Nuclear Physics"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Collisions and Conservation Laws"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Electrostatics"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Atomic Structure"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4E",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Thermodynamics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Geometrical Optics"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Geometrical Optics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Wave Phenomena"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4E",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Atomic and Nuclear Phenomena"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Geometrical Optics"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Geometrical Optics"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Geometrical Optics"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Electromagnetic Spectrum"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "PHY"
    ],
    subtopics: [
      "Nature of Light"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 2"
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
    topic: "biology",
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Organic Chemistry"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
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
    topic: "biology",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Nuclear Chemistry"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "biochemistry",
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Polymers"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Organic Chemistry"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
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
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Polymers"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Chemical Bonding"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Structure and Properties of Organic Molecules"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Structure and Properties of Organic Molecules"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "physics",
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Intermolecular and Intramolecular Forces"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "organicChemistry",
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Redox Reactions"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Structure and Properties of Organic Molecules"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Structure and Properties of Organic Molecules"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "5",
    contentCategory: "5E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Structure and Properties of Organic Molecules"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Heat of Vaporization"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM",
      "PHYS"
    ],
    subtopics: [
      "Ideal Gas Assumptions"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Molar Volume"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Ideal vs. Real Gas Behavior"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "physics",
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Compounds vs Elements",
      "Decomposition Reactions"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "biology",
    foundationalConcept: "4",
    contentCategory: "4A",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Solid State",
      "Particle Arrangement"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4E",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Molarity"
    ],
    difficulty: "Beginner",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "pH Calculations"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
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
    topic: "generalChemistry",
    foundationalConcept: "4",
    contentCategory: "4D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Bonding Types"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4C",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Oxidation and Reduction"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Spontaneity",
      "Gibbs Free Energy"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    topic: "generalChemistry",
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Acid Strength",
      "Ka Values"
    ],
    difficulty: "Intermediate",
    skillsTested: [
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
    foundationalConcept: "5",
    contentCategory: "5D",
    disciplines: [
      "CHEM"
    ],
    subtopics: [
      "Indicators",
      "pH Scale"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Waves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Waves"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  },
  {
    topic: "physics",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Sound",
      "Waves"
    ],
    difficulty: "Intermediate",
    skillsTested: [
      "Skill 2"
    ]
  },
  {
    topic: "physics",
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
    foundationalConcept: "4",
    contentCategory: "4B",
    disciplines: [
      "PHYS"
    ],
    subtopics: [
      "Sound"
    ],
    difficulty: "Beginner",
    skillsTested: [
      "Skill 1"
    ]
  }  
];

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
    discrete: 0.0, // CARS has more passage-based questions
    passage: 1,
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

