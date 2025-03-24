import type { Question } from "./exam-data"

// Function to update question metadata with foundational concepts and content categories
export function updateQuestionMetadata(question: Question): Question {
  // Create a copy of the question to avoid modifying the original
  const updatedQuestion = { ...question }

  // Assign foundational concept and content category based on topic and section
  switch (question.topic) {
    // Biology topics
    case "biology":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "2"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "2A"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["BIO"]
      }
      break

    // Biochemistry topics
    case "biochemistry":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "1"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "1D"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["BC"]
      }
      break

    // Organic Chemistry topics
    case "organicChemistry":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "5"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "5D"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["OC"]
      }
      break

    // General Chemistry topics
    case "generalChemistry":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "5"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "5A"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["GC"]
      }
      break

    // Physics topics
    case "physics":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "4"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "4A"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["PHY"]
      }
      break

    // Psychology topics
    case "psychology":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "6"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "6B"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["PSY"]
      }
      break

    // Sociology topics
    case "sociology":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "9"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "9A"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["SOC"]
      }
      break

    // Critical Thinking topics (CARS section)
    case "criticalThinking":
      // CARS doesn't have foundational concepts in the same way
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["CARS"]
      }
      break

    // Ethics topics
    case "ethics":
      if (!updatedQuestion.foundationalConcept) {
        updatedQuestion.foundationalConcept = "10"
      }
      if (!updatedQuestion.contentCategory) {
        updatedQuestion.contentCategory = "10A"
      }
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["SOC"]
      }
      break

    // Scientific History topics
    case "scientificHistory":
      if (!updatedQuestion.disciplines) {
        updatedQuestion.disciplines = ["CARS"]
      }
      break

    // Default case for any other topics
    default:
      // If we can't determine the metadata, leave it as is
      break
  }

  // Add subtopics based on question content if not already present
  if (!updatedQuestion.subtopics) {
    // Update the subtopic detection to be more comprehensive
    // Replace the existing subtopicKeywords definition with this more detailed one:

    const subtopicKeywords: Record<string, Record<string, string[]>> = {
      biology: {
        "Cell Biology": ["cell membrane", "organelle", "cytoskeleton", "cell cycle", "mitosis", "meiosis"],
        Genetics: ["dna", "rna", "gene", "chromosome", "mutation", "heredity", "allele", "genome"],
        "Molecular Biology": ["transcription", "translation", "replication", "protein synthesis"],
        "Anatomy & Physiology": ["organ", "tissue", "system", "homeostasis", "muscle", "nerve", "bone"],
        Evolution: ["natural selection", "adaptation", "speciation", "phylogeny", "taxonomy"],
        Microbiology: ["bacteria", "virus", "prokaryote", "pathogen", "infection"],
      },
      biochemistry: {
        "Amino Acids & Proteins": ["amino acid", "protein", "peptide", "enzyme", "structure", "folding"],
        Carbohydrates: ["glucose", "glycolysis", "gluconeogenesis", "glycogen", "monosaccharide"],
        Lipids: ["fatty acid", "triglyceride", "phospholipid", "steroid", "cholesterol"],
        Enzymes: ["enzyme", "kinetics", "inhibition", "active site", "cofactor", "coenzyme"],
        Metabolism: ["metabolism", "atp", "krebs cycle", "citric acid", "electron transport", "oxidative"],
        Bioenergetics: ["energy", "thermodynamics", "atp", "redox", "oxidation", "reduction"],
      },
      organicChemistry: {
        "Functional Groups": ["functional group", "alcohol", "aldehyde", "ketone", "carboxylic", "amine"],
        Reactions: ["reaction", "mechanism", "substitution", "addition", "elimination", "redox"],
        Stereochemistry: ["stereochemistry", "isomer", "enantiomer", "chirality", "optical"],
        Spectroscopy: ["nmr", "ir", "spectroscopy", "mass spec", "uv-vis"],
        "Aromatic Compounds": ["aromatic", "benzene", "phenyl", "resonance"],
      },
      generalChemistry: {
        "Atomic Structure": ["atom", "electron", "proton", "neutron", "orbital", "quantum"],
        Bonding: ["bond", "ionic", "covalent", "metallic", "hydrogen bonding", "intermolecular"],
        Thermodynamics: ["thermodynamics", "enthalpy", "entropy", "gibbs", "spontaneous"],
        Equilibrium: ["equilibrium", "le chatelier", "constant", "reaction quotient"],
        "Acids & Bases": ["acid", "base", "ph", "buffer", "titration", "pka"],
        Solutions: ["solution", "solubility", "concentration", "colligative", "osmosis"],
      },
      physics: {
        Mechanics: ["force", "motion", "newton", "momentum", "work", "energy", "power"],
        Fluids: ["fluid", "pressure", "flow", "bernoulli", "viscosity", "surface tension"],
        "Electricity & Magnetism": ["electric", "magnetic", "current", "voltage", "resistance", "circuit"],
        "Waves & Optics": ["wave", "light", "sound", "refraction", "diffraction", "interference"],
        Thermodynamics: ["heat", "temperature", "thermal", "entropy", "enthalpy"],
      },
      psychology: {
        Cognition: ["memory", "attention", "language", "thinking", "problem solving", "decision"],
        Development: ["development", "piaget", "erikson", "kohlberg", "attachment", "childhood"],
        Learning: ["learning", "conditioning", "reinforcement", "punishment", "behaviorism"],
        "Social Psychology": ["social", "group", "conformity", "obedience", "attitude", "prejudice"],
        "Abnormal Psychology": ["disorder", "mental illness", "anxiety", "depression", "schizophrenia"],
        "Biological Bases": ["neuron", "brain", "neurotransmitter", "hormone", "nervous system"],
      },
      sociology: {
        "Social Structure": ["structure", "institution", "role", "status", "norm", "socialization"],
        "Social Inequality": ["inequality", "class", "stratification", "poverty", "mobility"],
        Demographics: ["demographic", "population", "age", "sex", "gender", "race", "ethnicity"],
        Culture: ["culture", "subculture", "value", "belief", "symbol", "language"],
        "Social Change": ["change", "movement", "revolution", "modernization", "globalization"],
      },
      criticalThinking: {
        "Argument Analysis": ["argument", "premise", "conclusion", "validity", "soundness"],
        "Evidence Evaluation": ["evidence", "data", "support", "warrant", "backing"],
        Inference: ["inference", "implication", "deduction", "induction", "reasoning"],
        "Rhetorical Analysis": ["rhetoric", "persuasion", "appeal", "ethos", "pathos", "logos"],
      },
    }

    // Update the subtopic detection code to use the new structure
    // Replace the existing subtopic detection code with this:

    // Check for keywords in the question text
    const potentialSubtopics: string[] = []
    const questionText = question.question.toLowerCase()

    // Check each discipline's subtopics
    for (const [discipline, subtopicCategories] of Object.entries(subtopicKeywords)) {
      // Only check relevant disciplines based on the question's topic
      if (
        discipline === question.topic ||
        (question.disciplines && question.disciplines.includes(discipline.toUpperCase()))
      ) {
        // Check each subtopic category
        for (const [category, keywords] of Object.entries(subtopicCategories)) {
          // Check if any keywords match
          for (const keyword of keywords) {
            if (questionText.includes(keyword)) {
              potentialSubtopics.push(category)
              break // Once we've matched a category, move to the next one
            }
          }
        }
      }
    }

    if (potentialSubtopics.length > 0) {
      updatedQuestion.subtopics = [...new Set(potentialSubtopics)] // Remove duplicates
    } else {
      // If no specific subtopics found, assign a general subtopic based on the topic
      switch (question.topic) {
        case "biology":
          updatedQuestion.subtopics = ["General Biology"]
          break
        case "biochemistry":
          updatedQuestion.subtopics = ["General Biochemistry"]
          break
        case "organicChemistry":
          updatedQuestion.subtopics = ["General Organic Chemistry"]
          break
        case "generalChemistry":
          updatedQuestion.subtopics = ["General Chemistry"]
          break
        case "physics":
          updatedQuestion.subtopics = ["General Physics"]
          break
        case "psychology":
          updatedQuestion.subtopics = ["General Psychology"]
          break
        case "sociology":
          updatedQuestion.subtopics = ["General Sociology"]
          break
        case "criticalThinking":
          updatedQuestion.subtopics = ["General Critical Thinking"]
          break
        default:
          updatedQuestion.subtopics = ["General"]
      }
    }
  }

  // Add difficulty level if not present
  if (!updatedQuestion.difficulty) {
    // Simple heuristic: longer questions tend to be more difficult
    const questionLength = question.question.length
    if (questionLength > 300) {
      updatedQuestion.difficulty = "Advanced"
    } else if (questionLength > 150) {
      updatedQuestion.difficulty = "Intermediate"
    } else {
      updatedQuestion.difficulty = "Beginner"
    }
  }

  // Add skills tested if not present
  if (!updatedQuestion.skillsTested) {
    // Default to knowledge of scientific concepts
    updatedQuestion.skillsTested = ["Skill 1"]

    // Check for problem-solving elements
    if (
      question.question.includes("calculate") ||
      question.question.includes("determine") ||
      question.question.includes("predict")
    ) {
      updatedQuestion.skillsTested.push("Skill 2")
    }

    // Check for research design elements
    if (
      question.question.includes("experiment") ||
      question.question.includes("study") ||
      question.question.includes("research")
    ) {
      updatedQuestion.skillsTested.push("Skill 3")
    }

    // Check for data analysis elements
    if (
      question.question.includes("data") ||
      question.question.includes("graph") ||
      question.question.includes("table") ||
      question.question.includes("statistical")
    ) {
      updatedQuestion.skillsTested.push("Skill 4")
    }
  }

  return updatedQuestion
}

// Function to update all questions in a section
export function updateSectionQuestions(questions: Question[]): Question[] {
  return questions.map((question) => updateQuestionMetadata(question))
}

