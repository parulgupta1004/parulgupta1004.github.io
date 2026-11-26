import { greeting } from "../portfolio";
import downloadStats from "./pypi-stats.json";

export const projects = [
  {
    id: "fairlearn",
    name: "Fairlearn",
    role: "Maintainer",
    description: "Assess and improve machine learning fairness.",
    url: greeting.fairlearnUrl,
    repository: "https://github.com/fairlearn/fairlearn",
    linkLabel: "View on PyPI",
    stats: downloadStats.fairlearn,
  },
  {
    id: "fair-seldonian",
    name: "Fair-Seldonian",
    role: "Creator",
    description: "Machine learning with fairness and safety guarantees.",
    url: greeting.fairSeldonianUrl,
    repository: "https://github.com/parulgupta1004/fair-seldonian",
    linkLabel: "View on PyPI",
    stats: downloadStats["fair-seldonian"],
  },
  {
    id: "cpython",
    name: "CPython",
    role: "Triager",
    description: "Contributing to the Python interpreter.",
    url: "https://discuss.python.org/t/parul-gupta-and-jason-fried-added-to-the-triage-team/67686",
    repository: "https://github.com/python/cpython",
    linkLabel: "Triage announcement",
  },
];
