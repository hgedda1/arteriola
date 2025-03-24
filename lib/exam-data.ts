// Define the Question interface
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
    id: "bio-8",
    type: "discrete",
    question: "Which of the following is the mRNA start codon in most cases?",
    options: ["UAA", "AGU", "AUG", "UGA"],
    correctAnswer: "AUG",
    topic: "biology",
    explanation: "AUG is the start codon in most cases, encoding the amino acid methionine and initiating translation."
  },
  {
    id: "bio-9",
    type: "discrete",
    question: "Which of the types of RNA is the smallest?",
    options: ["mRNA", "tRNA", "rRNA"],
    correctAnswer: "tRNA",
    topic: "biology",
    explanation: "tRNA (transfer RNA) is the smallest type of RNA, typically 73–93 nucleotides in length, involved in amino acid transport."
  },
  {
    id: "bio-10",
    type: "discrete",
    question: "Which of the following is a correctly paired set of DNA nucleotides?",
    options: ["A-G", "C-G", "A-U", "G-T"],
    correctAnswer: "C-G",
    topic: "biology",
    explanation: "In DNA, cytosine (C) pairs with guanine (G) via three hydrogen bonds, maintaining structural integrity."
  },
  {
    id: "bio-11",
    type: "discrete",
    question: "Down syndrome is directly linked to a genetic abnormality of which chromosome?",
    options: ["XXII", "XXI", "XIIX", "XV"],
    correctAnswer: "XXI",
    topic: "biology",
    explanation: "Down syndrome is caused by trisomy 21, where an individual has an extra copy of chromosome 21."
  },
  {
    id: "bio-12",
    type: "discrete",
    question: "Which of the following is a characteristic of the Hardy-Weinberg law?",
    options: [
      "Mating between species occurs at a set rate.",
      "Migration is a considerable factor.",
      "Mutation occurs at the locus.",
      "Genotype selection does not occur at the locus."
    ],
    correctAnswer: "Genotype selection does not occur at the locus.",
    topic: "biology",
    explanation: "The Hardy-Weinberg principle assumes no selection, mutation, migration, genetic drift, or non-random mating."
  },
  {
    id: "bio-13",
    type: "discrete",
    question: "Which of the following characterizes a Western blot?",
    options: [
      "Antibody/protein hybridization",
      "DNA/RNA combination",
      "RNA transcription",
      "Polymerase chain reaction"
    ],
    correctAnswer: "Antibody/protein hybridization",
    topic: "biochemistry",
    explanation: "Western blotting detects specific proteins using antibodies after gel electrophoresis."
  },
  {
    id: "bio-14",
    type: "discrete",
    question: "The end product of the TCA cycle produces ____ NADH.",
    options: ["3", "4", "5", "6"],
    correctAnswer: "3",
    topic: "biochemistry",
    explanation: "Each turn of the TCA cycle generates 3 NADH molecules, which are crucial for oxidative phosphorylation."
  },
  {
    id: "bio-15",
    type: "discrete",
    question: "How many ATP are required to transform pyruvate into glucose?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "6",
    topic: "biochemistry",
    explanation: "Gluconeogenesis requires 6 ATP equivalents to convert pyruvate back into glucose."
  },
  {
    id: "bio-16",
    type: "discrete",
    question: "Which of the following is not an activated carrier?",
    options: ["ATP", "SAM", "TPP", "GMP"],
    correctAnswer: "GMP",
    topic: "biochemistry",
    explanation: "Activated carriers like ATP, SAM, and TPP transfer functional groups, whereas GMP is a nucleotide."
  },
  {
    id: "bio-17",
    type: "discrete",
    question: "Which of the following is not a derivative of the amino acid Tryptophan?",
    options: ["Melatonin", "Serotonin", "Creatine", "Niacin"],
    correctAnswer: "Creatine",
    topic: "biochemistry",
    explanation: "Tryptophan derivatives include serotonin, melatonin, and niacin, but creatine is derived from glycine, arginine, and methionine."
  },
  {
    id: "bio-18",
    type: "discrete",
    question: "Which of the following is NOT considered a pyrimidine?",
    options: ["C", "T", "U", "G"],
    correctAnswer: "G",
    topic: "organicChemistry",
    explanation: "Pyrimidines include cytosine (C), thymine (T), and uracil (U). Guanine (G) is a purine."
  },
  // Circulation Practice Questions
  {
    id: "bio-19",
    type: "discrete",
    question: "Prothrombin is a ____ globulin and is produced by the _____.",
    options: ["Alpha, Kidney", "Alpha, Liver", "Beta, Kidney", "Beta, Liver"],
    correctAnswer: "Alpha, Liver",
    topic: "biology",
    explanation: "Prothrombin, a clotting factor, is an alpha globulin synthesized by the liver and plays a key role in blood coagulation."
  },
  {
    id: "bio-20",
    type: "discrete",
    question: "The right coronary artery divides to form the posterior artery.",
    options: ["Marginal", "LVC", "RVC", "LAD"],
    correctAnswer: "Marginal",
    topic: "biology",
    explanation: "The right coronary artery branches into the marginal artery and posterior descending artery, supplying blood to the right ventricle."
  },
  {
    id: "bio-21",
    type: "discrete",
    question: "Blood flowing into the cardiac veins enters the _______ next.",
    options: ["Coronary Sinus", "Left Ventricle", "Right Ventricle", "Left Atrium"],
    correctAnswer: "Coronary Sinus",
    topic: "biology",
    explanation: "Cardiac veins drain into the coronary sinus, which then empties deoxygenated blood into the right atrium."
  },
  {
    id: "bio-22",
    type: "discrete",
    question: "If you are using a stethoscope and trying to detect the tricuspid valve, which of the following would be the best location?",
    options: [
      "Within 2 inches of the xyphoid process",
      "On the right side of the sternum",
      "On the left side of the sternum near the midpoint",
      "On the left side of the sternum near the midpoint of the sixth rib"
    ],
    correctAnswer: "Within 2 inches of the xyphoid process",
    topic: "biology",
    explanation: "The tricuspid valve is best auscultated at the left lower sternal border, near the xyphoid process."
  },
  {
    id: "bio-23",
    type: "discrete",
    question: "Which of the following occurs during ventricular systole?",
    options: ["Increased aortic pressure", "Increased ventricular volume", "Dup heart sound", "P wave"],
    correctAnswer: "Increased aortic pressure",
    topic: "biology",
    explanation: "During ventricular systole, the ventricles contract, increasing aortic pressure as blood is ejected into the circulation."
  },
  {
    id: "bio-24",
    type: "discrete",
    question: "Which of the following occurs during ventricular diastole?",
    options: ["Increased aortic pressure", "Increased ventricular volume", "Lub heart sound", "T wave"],
    correctAnswer: "Increased ventricular volume",
    topic: "biology",
    explanation: "During ventricular diastole, the ventricles relax and fill with blood, leading to an increase in ventricular volume."
  },
  {
    id: "bio-25",
    type: "discrete",
    question: "The innermost layer of a blood vessel is lined with _______ ______ cells.",
    options: ["Simple squamous", "Stratified squamous", "Simple cuboidal epithelium", "Stratified cuboidal epithelium"],
    correctAnswer: "Simple squamous",
    topic: "biology",
    explanation: "The endothelium of blood vessels is composed of simple squamous epithelial cells, allowing for efficient gas and nutrient exchange."
  },
  {
    id: "bio-26",
    type: "discrete",
    question: "Angiotensin can directly cause the release of ____ from the adrenal cortex.",
    options: ["Renin", "Aldosterone", "Calcitonin", "Thyroxine"],
    correctAnswer: "Aldosterone",
    topic: "biology",
    explanation: "Angiotensin II stimulates the adrenal cortex to release aldosterone, which increases sodium retention and blood pressure."
  },
  {
    id: "bio-27",
    type: "discrete",
    question: "Cardiac output is the product of ____ and ____. ",
    options: ["HR and Diastolic pressure", "HR and Stroke Volume", "HR and EF", "Diastolic and Systolic pressure"],
    correctAnswer: "HR and Stroke Volume",
    topic: "biology",
    explanation: "Cardiac output is calculated as heart rate (HR) multiplied by stroke volume (SV), representing the volume of blood pumped per minute."
  },
  {
    id: "bio-28",
    type: "discrete",
    question: "Pulmonary edema is most likely associated with a failing _____ _____.",
    options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
    correctAnswer: "Left ventricle",
    topic: "biology",
    explanation: "Left ventricular failure leads to pulmonary congestion and edema due to increased pressure in the pulmonary circulation."
  },
  {
    id: "bio-29",
    type: "discrete",
    question: "Which of the following is the first branch off the aortic arch?",
    options: ["Common carotid", "Brachiocephalic", "Right Subclavian", "Thoracic"],
    correctAnswer: "Brachiocephalic",
    topic: "biology",
    explanation: "The brachiocephalic artery is the first major branch off the aortic arch, supplying the right side of the head and upper limb."
  },
  {
    id: "bio-30",
    type: "discrete",
    question: "The brachiocephalic artery divides to form the right common carotid and the ________ artery.",
    options: ["Left subclavian", "Right subclavian", "Left common carotid", "Right thoracic artery"],
    correctAnswer: "Right subclavian",
    topic: "biology",
    explanation: "The brachiocephalic artery bifurcates into the right subclavian and right common carotid arteries."
  },
  {
    id: "bio-31",
    type: "discrete",
    question: "Which of the following arteries creates the left splenic, hepatic, and gastric arteries?",
    options: ["Left sacral artery", "Celiac artery", "Suprarenal artery", "Phrenic artery"],
    correctAnswer: "Celiac artery",
    topic: "biology",
    explanation: "The celiac artery branches into the left splenic, hepatic, and gastric arteries, supplying the abdominal organs."
  },
  {
    id: "bio-32",
    type: "discrete",
    question: "Which of the following is not considered a major branch off of the descending thoracic aorta?",
    options: ["Mediastinal artery", "Renal artery", "Bronchial artery", "Posterior intercostals artery"],
    correctAnswer: "Renal artery",
    topic: "biology",
    explanation: "The renal artery branches off the abdominal aorta, not the thoracic aorta."
  },
  {
    id: "bio-33",
    type: "discrete",
    question: "Which of the following is not considered a major branch off of the abdominal aorta?",
    options: ["Phrenic artery", "Common iliac artery", "Gonadal artery", "Mediastinal artery"],
    correctAnswer: "Mediastinal artery",
    topic: "biology",
    explanation: "The mediastinal artery branches off the thoracic aorta, not the abdominal aorta."
  },
  {
    id: "bio-34",
    type: "discrete",
    question: "Inside the cranial cavity, the vertebral arteries form the ____ artery.",
    options: ["Basilar", "Common Carotid", "MCA", "PCA"],
    correctAnswer: "Basilar",
    topic: "biology",
    explanation: "The vertebral arteries merge to form the basilar artery, supplying blood to the brainstem and posterior brain."
  },
  {
    id: "bio-35",
    type: "discrete",
    question: "Pulse pressure (PP) is considered the _____.",
    options: [
      "Difference between the systolic and diastolic pressure",
      "The sum of the systolic and diastolic pressure",
      "The inverse of the blood pressure",
      "Half of the systolic pressure"
    ],
    correctAnswer: "Difference between the systolic and diastolic pressure",
    topic: "biology",
    explanation: "Pulse pressure is the difference between systolic and diastolic blood pressure, indicating arterial elasticity."
  },
  // Gastrointestinal practice questions
  {
    id: "bio-36",
    type: "discrete",
    question: "Which of the following is not a specific element of duodenal ulcers?",
    options: [
      "Primarily affects males",
      "Occasional malignancy",
      "Can lead to weight gain",
      "Affects people over 65"
    ],
    correctAnswer: "Affects people over 65",
    topic: "biology",
    explanation: "Duodenal ulcers typically affect younger adults and are often associated with H. pylori infection."
  },
  {
    id: "bio-37",
    type: "discrete",
    question: "Which of the following is not a specific element of Hepatitis C?",
    options: [
      "Vaccine available",
      "May be transmitted with sexual contact",
      "Inflammation of the liver",
      "Lifetime carrier"
    ],
    correctAnswer: "Vaccine available",
    topic: "biology",
    explanation: "There is no vaccine available for Hepatitis C, unlike Hepatitis A and B."
  },
  {
    id: "bio-38",
    type: "discrete",
    question: "Which of the following vitamins is not stored in the liver?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: "Vitamin C",
    topic: "biology",
    explanation: "Vitamin C is water-soluble and not stored in the liver, while fat-soluble vitamins (A, D, E, K) are."
  },
  {
    id: "bio-39",
    type: "discrete",
    question: "Which of the following microorganisms has been linked to Parotitis?",
    options: [
      "Staphylococcus aureus",
      "Schistosoma",
      "Wucheria bancrofti",
      "Trypanosoma cruzi"
    ],
    correctAnswer: "Staphylococcus aureus",
    topic: "biology",
    explanation: "Parotitis is inflammation of the parotid gland, commonly caused by Staphylococcus aureus or mumps virus."
  },
  {
    id: "bio-40",
    type: "discrete",
    question: "What type of cell releases somatostatin?",
    options: ["β cells", "α cells", "Plasma cells", "D cells"],
    correctAnswer: "D cells",
    topic: "biochemistry",
    explanation: "D cells in the pancreas release somatostatin, which inhibits the release of other pancreatic hormones."
  },
  {
    id: "bio-41",
    type: "discrete",
    question: "What type of cell releases glucagon?",
    options: ["β cells", "α cells", "Plasma cells", "D cells"],
    correctAnswer: "α cells",
    topic: "biochemistry",
    explanation: "α cells in the pancreas release glucagon, which raises blood glucose levels."
  },
  {
    id: "bio-42",
    type: "discrete",
    question: "What type of cell releases insulin?",
    options: ["β cells", "α cells", "Plasma cells", "D cells"],
    correctAnswer: "β cells",
    topic: "biochemistry",
    explanation: "β cells in the pancreas secrete insulin, which lowers blood glucose levels."
  },
  {
    id: "bio-43",
    type: "discrete",
    question: "Which of the following arteries supplies blood primarily to the midgut?",
    options: ["IMA", "Celiac", "SMA", "Axillary"],
    correctAnswer: "SMA",
    topic: "biology",
    explanation: "The superior mesenteric artery (SMA) supplies blood to the midgut, including parts of the small intestine and colon."
  },
  {
    id: "bio-44",
    type: "discrete",
    question: "Another name for the Myenteric plexus is the ________.",
    options: ["Submucosal plexus", "Branchial plexus", "Auerbach's plexus", "Lumbar plexus"],
    correctAnswer: "Auerbach's plexus",
    topic: "biology",
    explanation: "Auerbach's plexus, also known as the myenteric plexus, controls the motility of the gastrointestinal tract."
  },
  {
    id: "bio-45",
    type: "discrete",
    question: "Which enzyme breaks down starches to maltose?",
    options: ["Amylase", "Lipase", "Trypsinogen", "Pepsin"],
    correctAnswer: "Amylase",
    topic: "biochemistry",
    explanation: "Amylase breaks down starches into maltose, beginning the digestion of carbohydrates."
  },
  // General Science Questions
  {
    id: "bio-46",
    type: "discrete",
    question: "When the chromosomes line up in mitosis, this is known as which phase?",
    options: ["Telophase", "Anaphase", "Metaphase", "Prophase"],
    correctAnswer: "Metaphase",
    topic: "biology",
    explanation: "During metaphase, chromosomes align along the metaphase plate in preparation for separation."
  },
  {
    id: "bio-47",
    type: "discrete",
    question: "Which cellular organelle contains enzymes that are considered digestive?",
    options: ["Golgi Apparatus", "Lysosomes", "Nucleus", "Ribosomes"],
    correctAnswer: "Lysosomes",
    topic: "biology",
    explanation: "Lysosomes contain hydrolytic enzymes that break down cellular waste and foreign substances."
  },
  {
    id: "bio-48",
    type: "discrete",
    question: "Organs repair themselves through a process of?",
    options: ["Meiosis", "Mitosis", "Cellular differentiation", "Transformation"],
    correctAnswer: "Mitosis",
    topic: "biology",
    explanation: "Mitosis is the process by which cells divide for growth and tissue repair."
  },
  {
    id: "bio-49",
    type: "discrete",
    question: "Which of the following is considered a model for enzyme action?",
    options: ["Lock and Key model", "Enzyme interaction model", "Transformation model", "Transcription model"],
    correctAnswer: "Lock and Key model",
    topic: "biochemistry",
    explanation: "The Lock and Key model describes how a substrate fits into the enzyme’s active site precisely."
  },
  {
    id: "bio-50",
    type: "discrete",
    question: "Which of the following statements about enzymes is not true?",
    options: [
      "Enzymes are catalysts.",
      "Almost all enzymes are proteins.",
      "Enzymes operate most efficiently at optimum pH.",
      "Enzymes are destroyed during chemical reactions."
    ],
    correctAnswer: "Enzymes are destroyed during chemical reactions.",
    topic: "biochemistry",
    explanation: "Enzymes are not destroyed during reactions; they are reusable catalysts."
  },
  {
    id: "bio-51",
    type: "discrete",
    question: "Which of the following statements about prostaglandins is not true?",
    options: [
      "Prostaglandins promote inflammation.",
      "Prostaglandins can only constrict blood vessels.",
      "Prostaglandins are made in the renal medulla.",
      "Prostaglandins can lead to pain and fever."
    ],
    correctAnswer: "Prostaglandins can only constrict blood vessels.",
    topic: "biology",
    explanation: "Prostaglandins can either constrict or dilate blood vessels depending on physiological needs."
  },
  {
    id: "bio-52",
    type: "discrete",
    question: "Cholesterol that is known as (LDL) stands for:",
    options: ["Low-density lipoproteins", "Low-density lysosomes", "Level-density lipoproteins", "Level-density lysosomes"],
    correctAnswer: "Low-density lipoproteins",
    topic: "biochemistry",
    explanation: "LDL (low-density lipoproteins) is often referred to as 'bad cholesterol' because high levels can lead to plaque buildup in arteries."
  },
  {
    id: "bio-53",
    type: "discrete",
    question: "Hardening of the arteries is known as:",
    options: ["Atheriosclerosis", "Venous narrowing", "Micro-circulation", "Hypertension"],
    correctAnswer: "Atheriosclerosis",
    topic: "biology",
    explanation: "Atherosclerosis is a condition where plaque builds up in the arteries, leading to reduced blood flow."
  },
  {
    id: "bio-54",
    type: "discrete",
    question: "Breathing properly requires the presence of what compound that affects surface tension of alveoli in the lungs?",
    options: ["Potassium", "Plasma", "Surfactant", "Sodium Chloride"],
    correctAnswer: "Surfactant",
    topic: "biology",
    explanation: "Surfactant reduces surface tension in alveoli, preventing their collapse and facilitating gas exchange."
  },
  {
    id: "bio-55",
    type: "discrete",
    question: "Which of the following is not considered a function of the kidneys?",
    options: ["Secretion", "Reabsorption", "Transport", "Filtration"],
    correctAnswer: "Transport",
    topic: "biology",
    explanation: "The kidneys function in filtration, reabsorption, and secretion but do not play a primary role in transport."
  },
  {
    id: "bio-56",
    type: "discrete",
    question: "The functional unit of the kidney is known as?",
    options: ["Medulla", "Glomerulus", "Pyramid", "Nephron"],
    correctAnswer: "Nephron",
    topic: "biology",
    explanation: "The nephron is the functional unit of the kidney, responsible for filtering blood and forming urine."
  },
  {
    id: "bio-57",
    type: "discrete",
    question: "What anatomical structure connects the stomach and the mouth?",
    options: ["Trachea", "Spinal column", "Hepatic duct", "Esophagus"],
    correctAnswer: "Esophagus",
    topic: "biology",
    explanation: "The esophagus is the muscular tube that transports food from the mouth to the stomach."
  },
  // General Science 2
  {
    id: "bio-58",
    type: "discrete",
    question: "The movement of food through the intestines is known as:",
    options: ["Peristalsis", "Ileum translation", "Microvilli propulsion", "Flexure propulsion"],
    correctAnswer: "Peristalsis",
    topic: "biology",
    explanation: "Peristalsis is the involuntary contraction and relaxation of muscles in the intestines to move food along the digestive tract."
  },
  {
    id: "bio-59",
    type: "discrete",
    question: "The enzyme maltase does the following:",
    options: [
      "Breaks down lactose to glucose",
      "Turns glucose into maltose",
      "Breaks down maltose to glucose",
      "Turns glucose into lactose"
    ],
    correctAnswer: "Breaks down maltose to glucose",
    topic: "biochemistry",
    explanation: "Maltase is an enzyme that hydrolyzes maltose into two glucose molecules."
  },
  {
    id: "bio-60",
    type: "discrete",
    question: "High levels of bilirubin in the bloodstream can result in:",
    options: ["Uric acid overexposure", "Jaundice", "Bile salt production", "Hepatic mutation"],
    correctAnswer: "Jaundice",
    topic: "biology",
    explanation: "Bilirubin buildup due to liver dysfunction or bile duct blockage leads to jaundice, causing yellowing of the skin and eyes."
  },
  {
    id: "bio-61",
    type: "discrete",
    question: "The two bones found in the area between the knee and ankle in humans are known as:",
    options: ["Femur and Tibia", "Fibula and Tibia", "Ulna and Tibia", "Radius and Tibia"],
    correctAnswer: "Fibula and Tibia",
    topic: "biology",
    explanation: "The tibia (shinbone) and fibula are the two bones located between the knee and ankle."
  },
  // General Science 3
  {
    id: "bio-62",
    type: "discrete",
    question: "Which of the following is considered a component of?",
    options: ["Plasma cells", "Fatty acids", "Nucleic acids", "Zinc"],
    correctAnswer: "Fatty acids",
    topic: "biochemistry",
    explanation: "Fatty acids are components of lipids and serve as an energy source in metabolism."
  },
  {
    id: "bio-63",
    type: "discrete",
    question: "Blood enters the lungs from which chamber of the heart?",
    options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
    correctAnswer: "Right ventricle",
    topic: "biology",
    explanation: "Deoxygenated blood is pumped from the right ventricle to the lungs via the pulmonary artery."
  },
  {
    id: "bio-64",
    type: "discrete",
    question: "Excessive consumption of alcohol is most likely to damage which organ of the body over a long period of time?",
    options: ["Kidney", "Liver", "Pancreas", "Gallbladder"],
    correctAnswer: "Liver",
    topic: "biology",
    explanation: "The liver processes alcohol, and excessive consumption over time leads to liver damage such as cirrhosis."
  },
  {
    id: "bio-65",
    type: "discrete",
    question: "A molecule of hemoglobin can hold how many molecules of oxygen in the blood for transport?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
    topic: "biology",
    explanation: "Each hemoglobin molecule contains four heme groups, each capable of binding to one oxygen molecule."
  },
  {
    id: "bio-66",
    type: "discrete",
    question: "Which of the following best describes the biomechanics of breathing?",
    options: ["Pump handle motion", "Lever action", "Inspiration", "Expiration"],
    correctAnswer: "Pump handle motion",
    topic: "biology",
    explanation: "The movement of the ribs during breathing is similar to a pump handle motion, aiding in lung expansion."
  },
  {
    id: "bio-67",
    type: "discrete",
    question: "Animals that eat meat almost exclusively are known as:",
    options: ["Herbivores", "Carnivores", "Arthropods", "Prolific organisms"],
    correctAnswer: "Carnivores",
    topic: "biology",
    explanation: "Carnivores primarily consume meat as their main source of nutrition."
  },
  {
    id: "bio-68",
    type: "discrete",
    question: "The physical expressions of a gene are known as an organism's:",
    options: ["Transcription", "Genotype", "Phenotype", "Translation"],
    correctAnswer: "Phenotype",
    topic: "biology",
    explanation: "Phenotype refers to the observable traits of an organism resulting from gene expression."
  },
  {
    id: "bio-69",
    type: "discrete",
    question: "Neurons connect together at a ______.",
    options: ["Synergy", "Terminal site", "Docking station", "Synapse"],
    correctAnswer: "Synapse",
    topic: "biology",
    explanation: "A synapse is the junction between two neurons where neurotransmitters are released."
  },
  {
    id: "bio-70",
    type: "discrete",
    question: "Which of the following is another word for the kneecap in the human body?",
    options: ["Pisiform", "Meniscus", "Popliteal bursa", "Patella"],
    correctAnswer: "Patella",
    topic: "biology",
    explanation: "The patella is the scientific term for the kneecap, a small bone protecting the knee joint."
  },
  {
    id: "bio-71",
    type: "discrete",
    question: "Which of the following describes the shoulder joint?",
    options: ["Ball and socket joint", "Saddle joint", "Hinge joint", "Pivot joint"],
    correctAnswer: "Ball and socket joint",
    topic: "biology",
    explanation: "The shoulder joint is a ball and socket joint, allowing for a wide range of movement."
  },
  {
    id: "bio-72",
    type: "discrete",
    question: "The organ of Corti is found in what area of the body?",
    options: ["Mouth", "Ear", "Nose", "Lungs"],
    correctAnswer: "Ear",
    topic: "biology",
    explanation: "The organ of Corti is located in the cochlea of the inner ear and is responsible for detecting sound."
  },
  {
    id: "bio-73",
    type: "discrete",
    question: "The condition of rickets is associated with a deficiency in which vitamin?",
    options: ["A", "C", "D", "Z"],
    correctAnswer: "D",
    topic: "biology",
    explanation: "Rickets is caused by vitamin D deficiency, leading to weakened and deformed bones."
  },
  {
    id: "bio-74",
    type: "discrete",
    question: "A steroid is considered a ______.",
    options: ["Lipid", "Protein", "Enzyme", "Weak acid"],
    correctAnswer: "Lipid",
    topic: "biochemistry",
    explanation: "Steroids are a class of lipids that include cholesterol and hormones such as testosterone."
  },
  {
    id: "bio-75",
    type: "discrete",
    question: "The X cranial nerve is the ____ nerve.",
    options: ["Abducens", "Hypoglossal", "Facial", "Vagus"],
    correctAnswer: "Vagus",
    topic: "biology",
    explanation: "The vagus nerve (cranial nerve X) is involved in autonomic functions such as heart rate and digestion."
  },
  {
    id: "bio-76",
    type: "discrete",
    question: "Which chamber of the heart pumps blood to the systemic circulation?",
    options: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"],
    correctAnswer: "Left Ventricle",
    topic: "biology",
    explanation: "The left ventricle pumps oxygenated blood into the systemic circulation via the aorta."
  },
  // Gross Anatomy Questions
  {
    id: "bio-77",
    type: "discrete",
    question: "Which of the following is not a muscle identified in the rotator cuff?",
    options: ["Teres Major", "Teres Minor", "Infraspinatus", "Supraspinatus"],
    correctAnswer: "Teres Major",
    topic: "anatomy",
    explanation: "The rotator cuff consists of four muscles: Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis (SITS)."
  },
  {
    id: "bio-78",
    type: "discrete",
    question: "Which of the following is not a component of the unhappy triad?",
    options: ["MCL", "PCL", "ACL", "Medial Meniscus"],
    correctAnswer: "PCL",
    topic: "anatomy",
    explanation: "The 'unhappy triad' refers to simultaneous injury to the ACL, MCL, and medial meniscus."
  },
  {
    id: "bio-79",
    type: "discrete",
    question: "Which of the following is not included in the femoral triangle?",
    options: ["Femoral Artery", "Femoral Nerve", "Femoral Vein", "Femoral Ligament"],
    correctAnswer: "Femoral Ligament",
    topic: "anatomy",
    explanation: "The femoral triangle contains the femoral nerve, artery, and vein, but no femoral ligament exists."
  },
  {
    id: "bio-80",
    type: "discrete",
    question: "Which of the following is not a component of the carotid sheath?",
    options: ["Cranial nerve X", "Common carotid artery", "Internal jugular vein", "Cranial nerve IX"],
    correctAnswer: "Cranial nerve IX",
    topic: "anatomy",
    explanation: "The carotid sheath contains the common carotid artery, internal jugular vein, and cranial nerve X (vagus nerve)."
  },
  {
    id: "bio-81",
    type: "discrete",
    question: "Which of the following spinal dermatome levels corresponds with the landmark of the inguinal ligament?",
    options: ["T10", "L1", "L3", "L5"],
    correctAnswer: "L1",
    topic: "anatomy",
    explanation: "The L1 dermatome corresponds to the inguinal ligament and lower abdominal region."
  },
  {
    id: "bio-82",
    type: "discrete",
    question: "Which of the following nerves innervates the deltoid?",
    options: ["Radial", "Cranial nerve XI", "Subscapular", "Axillary"],
    correctAnswer: "Axillary",
    topic: "anatomy",
    explanation: "The axillary nerve innervates the deltoid and teres minor muscles."
  },
  {
    id: "bio-83",
    type: "discrete",
    question: "Wrist extensors are primarily controlled by what nerve?",
    options: ["Radial", "Ulnar", "Median", "Tibial"],
    correctAnswer: "Radial",
    topic: "anatomy",
    explanation: "The radial nerve controls wrist extension, as well as some elbow and finger extension."
  },
  {
    id: "bio-84",
    type: "discrete",
    question: "Adductor pollicis in the hand is controlled by which nerve?",
    options: ["Radial", "Ulnar", "Median", "Tibial"],
    correctAnswer: "Ulnar",
    topic: "anatomy",
    explanation: "The adductor pollicis, responsible for thumb adduction, is innervated by the ulnar nerve."
  },
  {
    id: "bio-85",
    type: "discrete",
    question: "Which of the following arteries is the most frequent site of coronary artery stenosis?",
    options: ["LCA", "RCA", "LAD", "PD"],
    correctAnswer: "LAD",
    topic: "anatomy",
    explanation: "The left anterior descending (LAD) artery is the most common site of coronary artery blockage."
  },
  {
    id: "bio-86",
    type: "discrete",
    question: "Which of the following nerves is not directly linked to the L2-L3 spinal level?",
    options: ["Tibial", "Obturator", "Femoral"],
    correctAnswer: "Tibial",
    topic: "anatomy",
    explanation: "The tibial nerve originates from the L4-S3 spinal levels, while the obturator and femoral nerves come from L2-L3."
  },
  {
    id: "bio-87",
    type: "discrete",
    question: "Which of the following passageways contains the maxillary nerve and blood vessels?",
    options: ["Stylomastoid foramen", "Inferior orbital fissure", "Foramen ovale", "Carotid canal"],
    correctAnswer: "Inferior orbital fissure",
    topic: "anatomy",
    explanation: "The maxillary nerve (V2) and associated blood vessels pass through the inferior orbital fissure."
  },
  {
    id: "bio-88",
    type: "discrete",
    question: "Which of the following passageways contains the facial nerve and blood vessels?",
    options: ["Stylomastoid foramen", "Inferior orbital fissure", "Foramen ovale", "Carotid canal"],
    correctAnswer: "Stylomastoid foramen",
    topic: "anatomy",
    explanation: "The stylomastoid foramen allows passage of the facial nerve (cranial nerve VII) and blood vessels."
  },
  {
    id: "bio-89",
    type: "discrete",
    question: "Which of the following passageways contains the internal carotid artery?",
    options: ["Foramen rotundum", "Condylar canal", "Foramen ovale", "Carotid canal"],
    correctAnswer: "Carotid canal",
    topic: "anatomy",
    explanation: "The internal carotid artery enters the skull through the carotid canal."
  },
  {
    id: "bio-90",
    type: "discrete",
    question: "Which of the following is the most common site of disc herniation?",
    options: ["C6-7", "T12-L1", "L4-5", "L5-S1"],
    correctAnswer: "L5-S1",
    topic: "anatomy",
    explanation: "The L5-S1 spinal segment is the most common site for herniated discs due to high mechanical stress."
  },
  {
    id: "bio-91",
    type: "discrete",
    question: "Which of the following ligaments is not found in the knee?",
    options: ["Patellar ligament", "Oblique popliteal ligament", "Arcuate popliteal ligament", "Deltoid ligament"],
    correctAnswer: "Deltoid ligament",
    topic: "anatomy",
    explanation: "The deltoid ligament is located in the ankle, while the other ligaments support the knee."
  },
  {
    id: "bio-92",
    type: "discrete",
    question: "Which of the following nerves innervates the teres minor muscle?",
    options: ["Subscapular nerve", "Suprascapular nerve", "Axillary nerve", "Pectoral nerve"],
    correctAnswer: "Axillary nerve",
    topic: "anatomy",
    explanation: "The axillary nerve innervates the teres minor and deltoid muscles."
  },
  //  Integumentary Practice Questions
  {
    id: "bio-93",
    type: "discrete",
    question: "Which of the following terms matches: water and electrolytes (clear)?",
    options: ["Exudate", "Transudate", "Serosanguineous", "Induration"],
    correctAnswer: "Transudate",
    topic: "integumentary",
    explanation: "Transudate is a clear fluid containing water and electrolytes that leaks from blood vessels due to changes in pressure."
  },
  {
    id: "bio-94",
    type: "discrete",
    question: "Which of the following matches the definition: The loss of circulatory fluids into interstitial spaces?",
    options: ["Hypovolemia", "Necrosis", "Eschar", "Maceration"],
    correctAnswer: "Hypovolemia",
    topic: "integumentary",
    explanation: "Hypovolemia is the loss of circulatory fluid volume, which can lead to shock and decreased tissue perfusion."
  },
  {
    id: "bio-95",
    type: "discrete",
    question: "An emollient has a/an _____ effect.",
    options: ["Pruritic", "Antipruritic", "Rupture", "Impetigo"],
    correctAnswer: "Antipruritic",
    topic: "integumentary",
    explanation: "An emollient has an antipruritic effect, meaning it soothes and prevents itching."
  },
  {
    id: "bio-96",
    type: "discrete",
    question: "Which of the following is the outermost layer of the epidermis?",
    options: ["Stratum spinosum", "Stratum corneum", "Stratum granulosum", "Stratum basale"],
    correctAnswer: "Stratum corneum",
    topic: "integumentary",
    explanation: "The stratum corneum is the outermost layer of the epidermis, consisting of dead, flattened skin cells that provide a barrier."
  },
  {
    id: "bio-97",
    type: "discrete",
    question: "Which of the following is the deepest layer of the epidermis?",
    options: ["Stratum spinosum", "Stratum corneum", "Stratum granulosum", "Stratum basale"],
    correctAnswer: "Stratum basale",
    topic: "integumentary",
    explanation: "The stratum basale is the deepest layer of the epidermis, where new skin cells are generated."
  },
  {
    id: "bio-98",
    type: "discrete",
    question: "Which of the following is beneath the stratum corneum?",
    options: ["Stratum spinosum", "Stratum corneum", "Stratum granulosum", "Stratum basale"],
    correctAnswer: "Stratum granulosum",
    topic: "integumentary",
    explanation: "The stratum granulosum is the layer beneath the stratum corneum and plays a role in waterproofing the skin."
  },
  {
    id: "bio-99",
    type: "discrete",
    question: "Vitamin D is created from _________ by skin cells.",
    options: ["Dehydrocholesterol", "Cholesterol", "Hydrocholesterol", "Hydrodermis"],
    correctAnswer: "Dehydrocholesterol",
    topic: "integumentary",
    explanation: "Dehydrocholesterol in the skin is converted into Vitamin D when exposed to UV light."
  },
  {
    id: "bio-100",
    type: "discrete",
    question: "Which of the following is another name for blackheads associated with acne?",
    options: ["Pustules", "Sebaceous", "Eccrine", "Comedones"],
    correctAnswer: "Comedones",
    topic: "integumentary",
    explanation: "Comedones are clogged hair follicles that appear as blackheads or whiteheads in acne."
  },
  {
    id: "bio-101",
    type: "discrete",
    question: "Which of the following identifies skin from a cadaver used in a burn graft?",
    options: ["Homograft", "Autograft", "Allograft", "Xenograft"],
    correctAnswer: "Homograft",
    topic: "integumentary",
    explanation: "A homograft, also called an allograft, is a skin graft taken from another human donor, often a cadaver."
  },
  {
    id: "bio-102",
    type: "discrete",
    question: "Sebaceous glands secrete _______.",
    options: ["Sebum", "Impetigo", "Serous", "Sirius"],
    correctAnswer: "Sebum",
    topic: "integumentary",
    explanation: "Sebaceous glands secrete sebum, an oily substance that lubricates and protects the skin."
  },
  //  Lymphatic System Practice Questions 
  {
    id: "bio-103",
    type: "discrete",
    question: "Which of the following is not directly associated with the lymphatic system?",
    options: ["Lymphatic trunk", "Collecting duct", "Subclavian vein", "Carotid arteries"],
    correctAnswer: "Carotid arteries",
    topic: "lymphaticSystem",
    explanation: "The carotid arteries supply blood to the brain and are part of the circulatory system, not the lymphatic system."
  },
  {
    id: "bio-104",
    type: "discrete",
    question: "The thymus is responsible for secreting _____ from epithelial cells.",
    options: ["Thymosin", "Growth hormone", "Macrophages", "Plasma cells"],
    correctAnswer: "Thymosin",
    topic: "lymphaticSystem",
    explanation: "Thymosin is a hormone secreted by the thymus that promotes T-cell development."
  },
  {
    id: "bio-105",
    type: "discrete",
    question: "Which of the following types of immunoglobulins is the most responsible for promoting allergic reactions?",
    options: ["IgA", "IgM", "IgD", "IgE"],
    correctAnswer: "IgE",
    topic: "immuneSystem",
    explanation: "IgE plays a key role in allergic reactions by triggering histamine release from mast cells."
  },
  {
    id: "bio-106",
    type: "discrete",
    question: "Which of the following types of immunoglobulins is located on the surface of most B lymphocytes?",
    options: ["IgA", "IgM", "IgD", "IgE"],
    correctAnswer: "IgD",
    topic: "immuneSystem",
    explanation: "IgD is found on the surface of immature B-cells and plays a role in their activation."
  },
  {
    id: "bio-107",
    type: "discrete",
    question: "Which of the following types of immunoglobulins does not cross the barrier between mother and infant in the womb?",
    options: ["IgA", "IgM", "IgD", "IgE"],
    correctAnswer: "IgA",
    topic: "immuneSystem",
    explanation: "IgA is primarily found in secretions like saliva and breast milk but does not cross the placenta."
  },
  {
    id: "bio-108",
    type: "discrete",
    question: "Which of the following is not an autoimmune disease?",
    options: ["Graves disease", "Myasthenia gravis", "Insulin-dependent diabetes mellitus", "Alzheimer's disease"],
    correctAnswer: "Alzheimer's disease",
    topic: "immuneSystem",
    explanation: "Alzheimer’s is a neurodegenerative disease, not an autoimmune disorder."
  },
  {
    id: "bio-109",
    type: "discrete",
    question: "T-cell activation requires a/an _______ cell.",
    options: ["Activation", "Accessory", "Plasma", "Helper"],
    correctAnswer: "Accessory",
    topic: "immuneSystem",
    explanation: "T-cell activation requires an accessory (antigen-presenting) cell to present an antigen."
  },
  {
    id: "bio-110",
    type: "discrete",
    question: "The thymus is located within the _______.",
    options: ["Mediastinum", "Peristinum", "Epistinum", "Endostinum"],
    correctAnswer: "Mediastinum",
    topic: "lymphaticSystem",
    explanation: "The thymus is located in the mediastinum, behind the sternum."
  },
  {
    id: "bio-111",
    type: "discrete",
    question: "Which of the following statements is false regarding the spleen?",
    options: [
      "Divided up into lobules",
      "Similar to a large lymph node",
      "Contains macrophages",
      "Limited blood within the lobules"
    ],
    correctAnswer: "Limited blood within the lobules",
    topic: "lymphaticSystem",
    explanation: "The spleen has a rich blood supply and serves as a blood filter."
  },
  {
    id: "bio-112",
    type: "discrete",
    question: "Which of the following is not considered a central location of lymph nodes?",
    options: ["Cervical", "Axillary", "Inguinal", "Tibial"],
    correctAnswer: "Tibial",
    topic: "lymphaticSystem",
    explanation: "Lymph nodes are found in the cervical, axillary, and inguinal regions but not in the tibial region."
  },
  {
    id: "bio-113",
    type: "discrete",
    question: "Lymphocytes that reach the thymus become _____.",
    options: ["T-cells", "B-cells", "Plasma cells", "Beta cells"],
    correctAnswer: "T-cells",
    topic: "immuneSystem",
    explanation: "Lymphocytes that mature in the thymus become T-cells, which play a central role in cell-mediated immunity."
  },
  {
    id: "bio-114",
    type: "discrete",
    question: "Lymphocytes that do not reach the thymus become _____.",
    options: ["T-cells", "B-cells", "Plasma cells", "Beta cells"],
    correctAnswer: "B-cells",
    topic: "immuneSystem",
    explanation: "Lymphocytes that mature in the bone marrow become B-cells, which produce antibodies."
  },
  {
    id: "bio-115",
    type: "discrete",
    question: "Which of the following types of immunoglobulins binds complement?",
    options: ["IgA", "IgD", "IgE", "IgG"],
    correctAnswer: "IgG",
    topic: "immuneSystem",
    explanation: "IgG is the most abundant immunoglobulin in the blood and binds complement proteins to enhance immune response."
  },
  {
    id: "bio-116",
    type: "discrete",
    question: "Which of the following is a key component of cytotoxic T cells?",
    options: ["CD2", "CD4", "CD8", "CD10"],
    correctAnswer: "CD8",
    topic: "immuneSystem",
    explanation: "CD8 is a surface protein on cytotoxic T-cells that allows them to recognize infected cells."
  },
  {
    id: "bio-117",
    type: "discrete",
    question: "Which of the following is not a primary target group of immune responses?",
    options: ["Viruses", "Toxins", "Fungi", "TB"],
    correctAnswer: "Toxins",
    topic: "immuneSystem",
    explanation: "The immune system targets pathogens like viruses, bacteria, and fungi but does not directly attack toxins."
  },
  //  Microbiology Practice Questions
  {
    id: "bio-118",
    type: "discrete",
    question: "Which of the following structures contains genes for enzymes and antibiotic resistance?",
    options: ["Plasmid", "Pilus", "Capsule", "Plasma Membrane"],
    correctAnswer: "Plasmid",
    topic: "microbiology",
    explanation: "Plasmids are small, circular DNA molecules that carry genes for antibiotic resistance and metabolic enzymes."
  },
  {
    id: "bio-119",
    type: "discrete",
    question: "Which of the following is the most important structure related to microbial attachment to cells?",
    options: ["Flagellum", "Plasmid", "Peptidoglycan", "Glycocalyx"],
    correctAnswer: "Glycocalyx",
    topic: "microbiology",
    explanation: "The glycocalyx helps bacteria adhere to host cells, playing a key role in biofilm formation."
  },
  {
    id: "bio-120",
    type: "discrete",
    question: "Which of the following is not a gram-negative bacterium?",
    options: ["Clostridium perfringens", "Vibrio cholerae", "Escherichia coli", "Bordetella pertussis"],
    correctAnswer: "Clostridium perfringens",
    topic: "microbiology",
    explanation: "Clostridium perfringens is a gram-positive, spore-forming bacterium."
  },
  {
    id: "bio-121",
    type: "discrete",
    question: "Which of the following is not true related to endotoxins?",
    options: [
      "Endotoxins are secreted from cells.",
      "Can be linked to Meningococcemia",
      "Produced by gram-negative microorganisms",
      "Can cause fever"
    ],
    correctAnswer: "Endotoxins are secreted from cells.",
    topic: "microbiology",
    explanation: "Endotoxins are not secreted; they are part of the outer membrane of gram-negative bacteria and released upon cell death."
  },
  {
    id: "bio-122",
    type: "discrete",
    question: "Which of the following microorganisms stain well?",
    options: ["Escherichia coli", "Legionella pneumophila", "Treponema", "Chlamydia"],
    correctAnswer: "Escherichia coli",
    topic: "microbiology",
    explanation: "E. coli stains well using Gram staining, unlike Legionella, Treponema, and Chlamydia, which require special stains."
  },
  {
    id: "bio-123",
    type: "discrete",
    question: "Which of the following microorganisms is not correctly matched with its isolation media?",
    options: [
      "Fungi - Sabouraud's agar",
      "Neisseria gonorrhoeae - Pink colonies media",
      "Haemophilus influenzae - Chocolate agar",
      "Mycobacterium tuberculosis - Lowenstein-Jensen agar"
    ],
    correctAnswer: "Neisseria gonorrhoeae - Pink colonies media",
    topic: "microbiology",
    explanation: "Neisseria gonorrhoeae is grown on Thayer-Martin agar, not pink colonies media."
  },
  {
    id: "bio-124",
    type: "discrete",
    question: "Which of the following diseases and bacteria are mismatched?",
    options: [
      "Cellulitis - Pasteurella multocida",
      "Tularemia - Francisella tularensis",
      "Gastritis - Helicobacter pylori",
      "Lyme disease - Yersinia pestis"
    ],
    correctAnswer: "Lyme disease - Yersinia pestis",
    topic: "microbiology",
    explanation: "Lyme disease is caused by Borrelia burgdorferi, while Yersinia pestis causes plague."
  },
  {
    id: "bio-125",
    type: "discrete",
    question: "Which of the following diseases and bacteria are mismatched?",
    options: [
      "Treponema pallidum - Syphilis",
      "Tinea nigra - Cladosporium werneckii",
      "Borrelia burgdorferi - Lyme disease",
      "Yersinia enterocolitica - Diphtheria"
    ],
    correctAnswer: "Yersinia enterocolitica - Diphtheria",
    topic: "microbiology",
    explanation: "Diphtheria is caused by Corynebacterium diphtheriae, not Yersinia enterocolitica."
  },
  {
    id: "bio-126",
    type: "discrete",
    question: "Which of the following is not true concerning Staphylococcus aureus?",
    options: [
      "S. aureus is related to inflammation.",
      "S. aureus can cause pneumonia",
      "S. aureus can lead to acute bacterial endocarditis",
      "S. aureus does not make coagulase"
    ],
    correctAnswer: "S. aureus does not make coagulase",
    topic: "microbiology",
    explanation: "S. aureus produces coagulase, an enzyme that promotes clot formation."
  },
  {
    id: "bio-127",
    type: "discrete",
    question: "The Tsetse fly is a transmission factor for which of the following organisms?",
    options: ["Trichomonas vaginalis", "Trypanosoma gambiense", "Entamoeba histolytica", "Toxoplasma"],
    correctAnswer: "Trypanosoma gambiense",
    topic: "microbiology",
    explanation: "Trypanosoma gambiense, the causative agent of African sleeping sickness, is transmitted by the Tsetse fly."
  },
  {
    id: "bio-128",
    type: "discrete",
    question: "Which of the following is not a DNA virus?",
    options: ["Adenovirus", "Calicivirus", "Papovirus", "Poxvirus"],
    correctAnswer: "Calicivirus",
    topic: "virology",
    explanation: "Calicivirus is an RNA virus, while adenovirus, papovirus, and poxvirus are DNA viruses."
  },
  {
    id: "bio-129",
    type: "discrete",
    question: "Which of the following is not a RNA virus?",
    options: ["Reovirus", "Orthomyxovirus", "Deltavirus", "Herpesvirus"],
    correctAnswer: "Herpesvirus",
    topic: "virology",
    explanation: "Herpesvirus is a DNA virus, whereas the others are RNA viruses."
  },
  {
    id: "bio-130",
    type: "discrete",
    question: "Which of the following microorganisms has not been linked to UTIs?",
    options: ["E. coli", "Pseudomonas", "Klebsiella", "Haemophilus"],
    correctAnswer: "Haemophilus",
    topic: "microbiology",
    explanation: "Haemophilus species are not commonly associated with urinary tract infections."
  },
  // Nutrition Practice Questions
  {
    id: "biochemistry-14",
    type: "discrete",
    question: "Which of the following is not considered a fat-soluble vitamin?",
    options: ["Vitamin A", "Vitamin B", "Vitamin K", "Vitamin E"],
    correctAnswer: "Vitamin B",
    topic: "biochemistry",
    explanation: "Fat-soluble vitamins include A, D, E, and K. Vitamin B is water-soluble."
  },
  {
    id: "biochemistry-15",
    type: "discrete",
    question: "Which of the following vitamins is most common in oils from cereal seeds, salad oils, margarine, and shortenings?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    correctAnswer: "Vitamin E",
    topic: "biochemistry",
    explanation: "Vitamin E is abundant in vegetable oils and acts as an antioxidant."
  },
  {
    id: "biochemistry-16",
    type: "discrete",
    question: "Which of the following is caused by a B5 deficiency?",
    options: ["Ectopic pregnancy", "Nausea", "Dermatitis", "Fever"],
    correctAnswer: "Dermatitis",
    topic: "biochemistry",
    explanation: "Vitamin B5 (Pantothenic acid) deficiency can lead to dermatitis and other skin disorders."
  },
  {
    id: "biochemistry-17",
    type: "discrete",
    question: "Which of the following is caused by a B6 deficiency?",
    options: ["Excessive irritability", "Nonproductive cough", "Dry mouth", "Depression"],
    correctAnswer: "Excessive irritability",
    topic: "biochemistry",
    explanation: "Vitamin B6 (Pyridoxine) deficiency is associated with neurological symptoms, including irritability."
  },
  {
    id: "biochemistry-18",
    type: "discrete",
    question: "Which of the following is caused by a B12 deficiency?",
    options: ["Glossitis", "Fever", "Hypertension", "Edema"],
    correctAnswer: "Glossitis",
    topic: "biochemistry",
    explanation: "Vitamin B12 deficiency can lead to glossitis (inflammation of the tongue) and anemia."
  },
  {
    id: "biochemistry-19",
    type: "discrete",
    question: "Which of the following is caused by a Vitamin C deficiency?",
    options: ["Fever", "Anemia", "Headaches", "Nausea"],
    correctAnswer: "Anemia",
    topic: "biochemistry",
    explanation: "Vitamin C is essential for collagen synthesis and iron absorption, preventing anemia."
  },
  {
    id: "biochemistry-20",
    type: "discrete",
    question: "Which of the following is caused by a Vitamin K deficiency?",
    options: ["Bruising", "Optic Nerve degeneration", "Anemia", "Hemorrhage (infants)"],
    correctAnswer: "Hemorrhage (infants)",
    topic: "biochemistry",
    explanation: "Vitamin K is necessary for blood clotting; its deficiency can lead to bleeding disorders in infants."
  },
  {
    id: "biochemistry-21",
    type: "discrete",
    question: "Another name for Vitamin B1 is ____.",
    options: ["Thiamine", "Riboflavin", "Pyridoxine", "Cobalamin"],
    correctAnswer: "Thiamine",
    topic: "biochemistry",
    explanation: "Vitamin B1, also called Thiamine, is essential for carbohydrate metabolism."
  },
  {
    id: "biochemistry-22",
    type: "discrete",
    question: "Which of the following foods is not high in potassium?",
    options: ["Oranges", "Bananas", "Tomatoes", "Turnips"],
    correctAnswer: "Turnips",
    topic: "biochemistry",
    explanation: "Turnips contain lower amounts of potassium compared to bananas, oranges, and tomatoes."
  },
  {
    id: "biochemistry-23",
    type: "discrete",
    question: "Which of the following vitamins is most common in leafy green vegetables, egg yolk, and soy oil?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    correctAnswer: "Vitamin K",
    topic: "biochemistry",
    explanation: "Vitamin K is abundant in leafy greens and plays a crucial role in blood clotting."
  },
  {
    id: "biochemistry-24",
    type: "discrete",
    question: "Which of the following vitamins is most common in fish liver oils, milk, and egg yolk?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    correctAnswer: "Vitamin D",
    topic: "biochemistry",
    explanation: "Vitamin D is found in fish liver oils, dairy products, and helps in calcium absorption."
  },
  {
    id: "biochemistry-25",
    type: "discrete",
    question: "Which of the following does not contain a high concentration of Niacin?",
    options: ["Yeast", "Meat", "Liver", "Corn"],
    correctAnswer: "Corn",
    topic: "biochemistry",
    explanation: "Corn is low in niacin unless processed using alkaline treatment (nixtamalization)."
  },
  {
    id: "biochemistry-26",
    type: "discrete",
    question: "Which of the following does not contain a high concentration of Vitamin A?",
    options: ["Strawberries", "Oranges", "Green Vegetables", "Yellow Vegetables"],
    correctAnswer: "Strawberries",
    topic: "biochemistry",
    explanation: "Vitamin A is found in yellow and green vegetables but not in significant amounts in strawberries."
  },
  // Physiology Practice Questions
  {
    id: "biology-44",
    type: "discrete",
    question: "Which of the following hormones causes increased atrial pressure and decreases sodium reabsorption in the kidneys?",
    options: ["Atrial natriuretic peptide", "PTH", "Aldosterone", "Vasopressin"],
    correctAnswer: "Atrial natriuretic peptide",
    topic: "biology",
    explanation: "Atrial natriuretic peptide (ANP) is released by atrial cells in response to increased atrial pressure, promoting sodium excretion and reducing blood volume and pressure."
  },
  {
    id: "biology-45",
    type: "discrete",
    question: "Angiotensin I is changed by which of the following into Angiotensin II?",
    options: ["ACE", "AVT", "Pepsin", "Adenosine"],
    correctAnswer: "ACE",
    topic: "biology",
    explanation: "Angiotensin-converting enzyme (ACE) converts Angiotensin I into Angiotensin II, a potent vasoconstrictor involved in blood pressure regulation."
  },
  {
    id: "biology-46",
    type: "discrete",
    question: "Which of the following during an electrocardiogram is associated with hypokalemia?",
    options: ["QRS complex", "U wave", "PR segment", "ST segment"],
    correctAnswer: "U wave",
    topic: "biology",
    explanation: "Hypokalemia (low potassium levels) can cause the presence of prominent U waves in an electrocardiogram (ECG)."
  },
  {
    id: "biology-47",
    type: "discrete",
    question: "An S3 heart sound is often associated with?",
    options: ["CHF", "COPD", "Atrial fib.", "Ventricular fib."],
    correctAnswer: "CHF",
    topic: "biology",
    explanation: "An S3 heart sound is often linked to congestive heart failure (CHF), resulting from increased atrial pressure and rapid ventricular filling."
  },
  {
    id: "biology-48",
    type: "discrete",
    question: "Mean arterial pressure is the product of:",
    options: ["TPR x SV", "TPR x CO", "CO/SV", "SV/EDV"],
    correctAnswer: "TPR x CO",
    topic: "biology",
    explanation: "Mean arterial pressure (MAP) is determined by total peripheral resistance (TPR) and cardiac output (CO), following the equation MAP = CO × TPR."
  },
  {
    id: "biology-49",
    type: "discrete",
    question: "An ejection fraction can be calculated as:",
    options: ["SV/TPR", "CO/TPR", "SV/EDV", "CO/EDV"],
    correctAnswer: "SV/EDV",
    topic: "biology",
    explanation: "Ejection fraction (EF) is a measure of heart efficiency, calculated as stroke volume (SV) divided by end-diastolic volume (EDV)."
  },
  {
    id: "biology-50",
    type: "discrete",
    question: "PAH is secreted in which of the following locations?",
    options: ["Distal tubule", "Loop of Henle", "Collecting tubule", "Proximal tubule"],
    correctAnswer: "Proximal tubule",
    topic: "biology",
    explanation: "Para-aminohippurate (PAH) is secreted in the proximal tubule and is used to measure renal plasma flow."
  },
  {
    id: "biology-51",
    type: "discrete",
    question: "Which of the following is not an anterior pituitary gland secretion?",
    options: ["TSH", "GH", "Vasopressin", "Prolactin"],
    correctAnswer: "Vasopressin",
    topic: "biology",
    explanation: "Vasopressin (antidiuretic hormone, ADH) is secreted by the posterior pituitary, while TSH, GH, and prolactin are secreted by the anterior pituitary."
  },
  {
    id: "biology-52",
    type: "discrete",
    question: "Thyroid Hormone T3 does not have which of the following functions?",
    options: ["Stimulate bone development and growth", "Create beta-adrenergic responses", "Cause brain development", "Decrease calcium re-absorption"],
    correctAnswer: "Decrease calcium re-absorption",
    topic: "biology",
    explanation: "T3 plays a role in metabolic regulation, growth, and brain development but does not directly regulate calcium reabsorption."
  },
  {
    id: "biology-53",
    type: "discrete",
    question: "Which of the following is the source cell for the secretion of Pepsinogen?",
    options: ["Chief cell", "Plasma cell", "G cell", "Parietal cell"],
    correctAnswer: "Chief cell",
    topic: "biology",
    explanation: "Pepsinogen, the inactive form of pepsin, is secreted by chief cells in the stomach and activated in acidic conditions."
  },
  {
    id: "biology-54",
    type: "discrete",
    question: "Which of the following is not a function of Angiotensin II?",
    options: ["Causes release of aldosterone", "Causes vasodilation", "Causes increased posterior pituitary activation", "Elevates blood pressure"],
    correctAnswer: "Causes vasodilation",
    topic: "biology",
    explanation: "Angiotensin II is a potent vasoconstrictor that increases blood pressure and stimulates aldosterone release."
  },
  {
    id: "biology-55",
    type: "discrete",
    question: "Which of the following is not a function of Progesterone?",
    options: ["Causes increased body temperature.", "Causes some smooth muscle relaxation.", "Causes increased spiral artery growth", "Causes activation of FSH"],
    correctAnswer: "Causes activation of FSH",
    topic: "biology",
    explanation: "Progesterone does not activate FSH; instead, it plays a role in maintaining pregnancy and regulating the menstrual cycle."
  },
  {
    id: "biology-56",
    type: "discrete",
    question: "Which of the following is not a function of Estrogen?",
    options: ["Causes breast growth.", "Causes inhibition of FSH", "Increased follicle development", "Decreased overall transport proteins"],
    correctAnswer: "Decreased overall transport proteins",
    topic: "biology",
    explanation: "Estrogen plays a role in secondary sexual characteristics, follicle development, and FSH inhibition but does not decrease transport proteins."
  },
  // Respiration Practice Questions
  {
    id: "biology-42",
    type: "discrete",
    question: "Which of the following is the most common type of lung cancer?",
    options: ["Large cell", "Adenocarcinoma", "Oat cell", "Squamous cell"],
    correctAnswer: "Squamous cell",
    topic: "biology",
    explanation: "Squamous cell carcinoma is the most common type of lung cancer, often associated with smoking and occurring in the central bronchi."
  },
  {
    id: "biology-43",
    type: "discrete",
    question: "What cell type secretes surfactant?",
    options: ["Plasma cell", "Type I alveolar cell", "Type II alveolar cell", "Type III alveolar cell"],
    correctAnswer: "Type II alveolar cell",
    topic: "biology",
    explanation: "Type II alveolar cells secrete surfactant, which reduces surface tension in the alveoli and prevents lung collapse."
  },
  {
    id: "biology-44",
    type: "discrete",
    question: "Which of the following pulmonary terms correlates with the definition: noted obstruction of the trachea or larynx?",
    options: ["Rhonchi", "Stridor", "Wheezes", "Vesicular"],
    correctAnswer: "Stridor",
    topic: "biology",
    explanation: "Stridor is a high-pitched, wheezing sound caused by obstruction of the upper airway, particularly in the trachea or larynx."
  },
  {
    id: "biology-45",
    type: "discrete",
    question: "Which of the following is not generally caused by COPD?",
    options: ["Pneumonia", "Right-sided heart failure", "Headaches", "Cor pulmonale"],
    correctAnswer: "Headaches",
    topic: "biology",
    explanation: "COPD is associated with respiratory complications such as pneumonia and right-sided heart failure (cor pulmonale), but headaches are not a primary symptom."
  },
  {
    id: "biology-46",
    type: "discrete",
    question: "Which of the following is not considered a COPD-related disease?",
    options: ["Bronchiectasis", "Bronchial asthma", "Bronchitis", "Bronchial hypotension"],
    correctAnswer: "Bronchial hypotension",
    topic: "biology",
    explanation: "Bronchial hypotension is not a recognized medical condition. COPD includes chronic bronchitis, bronchial asthma, and bronchiectasis."
  },
  {
    id: "biology-47",
    type: "discrete",
    question: "Which of the following pulmonary terms correlates with the definition: bronchospasm of the bronchial walls?",
    options: ["Wheezes", "Rhonchi", "Stridor", "Pleural Rub"],
    correctAnswer: "Wheezes",
    topic: "biology",
    explanation: "Wheezing occurs due to bronchospasm, commonly associated with asthma and obstructive lung diseases."
  },
  {
    id: "biology-48",
    type: "discrete",
    question: "Which of the following matches the definition: The volume of air that can be inhaled following exhalation of tidal volume?",
    options: ["Expiratory reserve volume", "Inspiratory capacity", "Inspiratory reserve volume", "Vital capacity"],
    correctAnswer: "Inspiratory capacity",
    topic: "biology",
    explanation: "Inspiratory capacity is the amount of air that can be inhaled after normal expiration."
  },
  {
    id: "biology-49",
    type: "discrete",
    question: "Which of the following matches the definition: The maximum volume of air that can be exhaled after taking the deepest breath possible?",
    options: ["Expiratory reserve volume", "Inspiratory capacity", "Inspiratory reserve volume", "Vital capacity"],
    correctAnswer: "Vital capacity",
    topic: "biology",
    explanation: "Vital capacity is the total volume of air that can be forcibly exhaled after maximum inhalation."
  },
  {
    id: "biology-50",
    type: "discrete",
    question: "The respiratory center is located in the ____ and ______.",
    options: ["Midbrain and pons", "Pons and Medulla oblongata", "Midbrain and Medulla oblongata", "Pons and Hypothalamus"],
    correctAnswer: "Pons and Medulla oblongata",
    topic: "biology",
    explanation: "The respiratory center in the brainstem is composed of the medulla oblongata and pons, which regulate breathing patterns."
  },
  // Kidney and Urinary Practice Questions
  {
    id: "biology-51",
    type: "discrete",
    question: "The renal medulla is composed of tissue called ______.",
    options: ["Renal pyramids", "Nephrons", "Renal sinus", "Renal pelvis"],
    correctAnswer: "Renal pyramids",
    topic: "biology",
    explanation: "The renal medulla consists of renal pyramids, which contain the nephron structures responsible for urine formation."
  },
  {
    id: "biology-52",
    type: "discrete",
    question: "Juxtaglomerular cells combine with _______ cells to form the juxtaglomerular apparatus in the kidney.",
    options: ["Macula densa", "Renal pelvis", "Nephron", "Renal sinus"],
    correctAnswer: "Macula densa",
    topic: "biology",
    explanation: "The juxtaglomerular apparatus is formed by juxtaglomerular cells and macula densa cells, which regulate blood pressure and filtration rate."
  },
  {
    id: "biology-53",
    type: "discrete",
    question: "Which of the following is not in the sequence of proper kidney blood flow? The starting point is the renal artery and the finishing point is the renal vein.",
    options: ["Arciform artery", "Afferent arteriole", "Interlobar vein", "Arciform vein"],
    correctAnswer: "Interlobar vein",
    topic: "biology",
    explanation: "The interlobar vein is part of kidney circulation, but the correct sequential flow should include afferent arteriole before venous structures."
  },
  {
    id: "biology-54",
    type: "discrete",
    question: "Which is found in the highest concentration in the urine?",
    options: ["Uric acid", "Urea", "Glucose", "Creatinine"],
    correctAnswer: "Urea",
    topic: "biology",
    explanation: "Urea is the primary waste product in urine, formed from protein metabolism in the liver."
  },
  {
    id: "biology-55",
    type: "discrete",
    question: "The primary function of the ascending loop of Henle in the kidney is?",
    options: ["The active re-absorption of sodium", "The active re-absorption of chloride ions", "The passive re-absorption of potassium", "The passive re-absorption of urea"],
    correctAnswer: "The active re-absorption of chloride ions",
    topic: "biology",
    explanation: "The ascending loop of Henle is impermeable to water and actively transports chloride ions to maintain osmolarity."
  },
  {
    id: "biology-56",
    type: "discrete",
    question: "The middle layer of the urinary bladder is identified as ___________.",
    options: ["Mucous coat", "Submucous coat", "Muscular coat", "Sphincter coat"],
    correctAnswer: "Submucous coat",
    topic: "biology",
    explanation: "The submucous coat is the middle layer of the bladder, providing structural support and elasticity."
  },
  {
    id: "biology-57",
    type: "discrete",
    question: "The micturition reflex center is located in the _____.",
    options: ["Pons", "Midbrain", "Lumbar plexus", "Sacral plexus"],
    correctAnswer: "Sacral plexus",
    topic: "biology",
    explanation: "The micturition reflex, responsible for bladder control, is regulated by the sacral plexus in the spinal cord."
  },
  {
    id: "biology-58",
    type: "discrete",
    question: "Which of the following matches with the definition: a poor output of urine?",
    options: ["Oliguria", "Pyuria", "Enuresis", "Diuresis"],
    correctAnswer: "Oliguria",
    topic: "biology",
    explanation: "Oliguria refers to abnormally low urine output, often caused by dehydration or kidney dysfunction."
  },
  {
    id: "biology-59",
    type: "discrete",
    question: "Capillary loops located in the medulla are also known as ______.",
    options: ["Vasa recta", "Urea collectors", "Trigone", "Macula densa"],
    correctAnswer: "Vasa recta",
    topic: "biology",
    explanation: "The vasa recta are specialized capillaries in the renal medulla that help maintain the osmotic gradient required for urine concentration."
  },
  {
    id: "biology-60",
    type: "discrete",
    question: "The primary function of the descending loop of Henle in the kidney is?",
    options: ["Reabsorption of sodium ions", "Reabsorption of water by osmosis", "Secretion of hydrogen ions", "Secretion of potassium ions"],
    correctAnswer: "Reabsorption of water by osmosis",
    topic: "biology",
    explanation: "The descending loop of Henle is permeable to water, allowing for osmotic reabsorption to concentrate urine."
  },
  {
    id: "biology-61",
    type: "discrete",
    question: "Which of the following is not considered a part of the male urethra?",
    options: ["Prostatic", "Membranous", "Vasapore", "Penile"],
    correctAnswer: "Vasapore",
    topic: "biology",
    explanation: "The male urethra consists of the prostatic, membranous, and penile sections. 'Vasapore' is not a recognized anatomical term."
  },
  {
    id: "biology-62",
    type: "discrete",
    question: "When glucose is found in urine, it is called _____.",
    options: ["Glucosuria", "Uremia", "Ureteritis", "Glucose intolerance"],
    correctAnswer: "Glucosuria",
    topic: "biology",
    explanation: "Glucosuria is the presence of glucose in the urine, which is often an indicator of diabetes mellitus."
  },
  {
    id: "biology-63",
    type: "discrete",
    question: "The function occurring at the distal convoluted tubule in the kidney is?",
    options: ["Passive secretion of hydrogen ions", "Passive secretion of potassium ions", "Limited re-absorption of water", "No re-absorption of sodium"],
    correctAnswer: "Passive secretion of potassium ions",
    topic: "biology",
    explanation: "The distal convoluted tubule is involved in potassium secretion and sodium reabsorption under hormonal regulation."
  },
  {
    id: "biology-64",
    type: "discrete",
    question: "ADH has which of the following effects on the distal convoluted tubule?",
    options: ["Decrease water re-absorption", "Increase water re-absorption", "Decrease the concentration of urine", "Increase the urine volume"],
    correctAnswer: "Increase water re-absorption",
    topic: "biology",
    explanation: "Antidiuretic hormone (ADH) increases water reabsorption in the distal convoluted tubule, leading to concentrated urine."
  },
  {
    id: "biology-65",
    type: "discrete",
    question: "Which of the following is not associated with the role of the kidneys?",
    options: ["Release of erythropoietin (hormone)", "Release of renin (enzyme)", "Release of Vitamin E", "Activate Vitamin D"],
    correctAnswer: "Release of Vitamin E",
    topic: "biology",
    explanation: "The kidneys are involved in erythropoietin and renin secretion as well as vitamin D activation, but they do not release vitamin E."
  },
  {
    id: "biology-66",
    type: "discrete",
    question: "Each kidney contains approximately ______ nephrons.",
    options: ["10 million", "1 million", "100,000", "10,000"],
    correctAnswer: "1 million",
    topic: "biology",
    explanation: "Each human kidney contains about 1 million nephrons, which are the functional units responsible for urine formation."
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

