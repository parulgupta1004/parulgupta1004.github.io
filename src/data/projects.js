import { greeting } from "../portfolio";
import downloadStats from "./pypi-stats.json";

export const projects = [
  {
    id: "fairlearn",
    name: "Fairlearn",
    role: "Maintainer",
    description: "Assess and improve machine learning fairness.",
    url: greeting.fairlearnUrl,
    linkLabel: "View on PyPI",
    stats: downloadStats.fairlearn,
  },
  {
    id: "fair-seldonian",
    name: "Fair-Seldonian",
    role: "Creator",
    description: "Machine learning with fairness and safety guarantees.",
    url: greeting.fairSeldonianUrl,
    linkLabel: "View on PyPI",
    stats: downloadStats["fair-seldonian"],
  },
  {
    id: "cpython",
    name: "CPython",
    role: "Triager",
    description: "Contributing to the Python interpreter.",
    url: "https://discuss.python.org/t/parul-gupta-and-jason-fried-added-to-the-triage-team/67686",
    linkLabel: "Triage announcement",
  },
];
