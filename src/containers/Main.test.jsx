import { act } from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main";

let container;
let root;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => {
    root.render(<Main />);
  });
});
afterEach(() => {
  act(() => {
    root.unmount();
  });
  container.remove();
});
const click = (element) =>
  act(() => {
    element.click();
  });

it("renders all archive entries without needing a JavaScript expansion", () => {
  for (const [section, total] of [
    ["talks", 22],
    ["community", 30],
  ]) {
    expect(
      container.querySelectorAll(`#${section} .engagement-row`),
    ).toHaveLength(total);
    const archive = container.querySelector(`#${section} details`);
    expect(archive.open).toBe(false);
    expect(archive.querySelectorAll(".engagement-row")).toHaveLength(total - 3);
    click(archive.querySelector("summary"));
    expect(archive.open).toBe(true);
    click(archive.querySelector("summary"));
    expect(archive.open).toBe(false);
  }
});

it("closes the mobile navigation after choosing a section", () => {
  const toggle = container.querySelector(".menu-toggle");
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  click(toggle);
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  click(container.querySelector('.site-navigation a[href="#opensource"]'));
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(
    container
      .querySelector('.site-navigation a[href="#opensource"]')
      .getAttribute("aria-current"),
  ).toBe("location");
});

it("closes the menu with Escape and returns keyboard focus to its toggle", () => {
  const toggle = container.querySelector(".menu-toggle");
  click(toggle);
  act(() => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", bubbles: true }),
    );
  });
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  expect(document.activeElement).toBe(toggle);
});

it("closes the menu when interacting outside the header", () => {
  const toggle = container.querySelector(".menu-toggle");
  click(toggle);
  act(() => {
    container
      .querySelector("main")
      .dispatchEvent(new Event("pointerdown", { bubbles: true }));
  });
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
});

it("loads a video player only after it is requested and preserves social links", () => {
  expect(container.querySelectorAll("iframe")).toHaveLength(0);
  expect(container.querySelectorAll(".video-preview")).toHaveLength(3);
  click(container.querySelector(".video-preview"));
  expect(container.querySelectorAll("iframe")).toHaveLength(1);
  expect(container.querySelector("iframe").getAttribute("src")).toContain(
    "youtube-nocookie.com/embed/BdTv07T7hmg",
  );
  expect(
    container.querySelectorAll(
      '.social-post-link[href*="linkedin.com/feed/update/"]',
    ),
  ).toHaveLength(3);
  expect(
    container.querySelectorAll('.social-post-link[href*="instagram.com/p/"]'),
  ).toHaveLength(3);
});

it("shows dated project download snapshots with their sources", () => {
  const projects = container.querySelectorAll(".opensource-card");
  expect(
    projects[0].querySelector(".project-downloads strong").textContent,
  ).toMatch(/^[\d,]+$/);
  expect(
    projects[1].querySelector(".project-downloads strong").textContent,
  ).toMatch(/^[\d,]+$/);
  expect(projects[0].querySelector(".project-downloads a").href).toBe(
    "https://pypistats.org/packages/fairlearn",
  );
  expect(projects[1].querySelector(".project-downloads a").href).toBe(
    "https://pypistats.org/packages/fair-seldonian",
  );
  expect(projects[0].querySelector("time").getAttribute("datetime")).toMatch(
    /^\d{4}-\d{2}-\d{2}$/,
  );
  expect(projects[2].querySelector(".project-downloads")).toBeNull();
});

it("preserves the external-arrow exceptions for events, greeting roles, and footer profiles", () => {
  const links = container.querySelectorAll('a[target="_blank"]');
  expect(links.length).toBeGreaterThan(0);
  for (const link of links) {
    const withoutArrow = link.closest(
      ".engagement-list, .greeting-roles, .footer-links",
    );
    expect(link.getAttribute("data-external-arrow")).toBe(
      withoutArrow ? "false" : "true",
    );
    expect(link.getAttribute("rel")).toBe("noopener noreferrer");
  }
});
