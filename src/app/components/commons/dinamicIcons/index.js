import dynamic from "next/dynamic";
const DinamicIcons = ({ library, tag }) => {
  const Icon = dynamic(async () => {
    if (library === "boxicons") {
      const result = await import("@styled-icons/boxicons-logos").then((res) => res[tag]);
      return result;
    }
    if (library === "boxicons-regular") {
      const result = await import("@styled-icons/boxicons-regular").then((res) => res[tag]);
      return result;
    }
    if (library === "material") {
      const result = await import("@styled-icons/material").then((res) => res[tag]);
      return result;
    }
    if (library === "material-rounded") {
      const result = await import("@styled-icons/material-rounded").then((res) => res[tag]);
      return result;
    }
    const result = await import("@styled-icons/material-rounded/Warning").then(
      (res) => res.Warning
    );
    return result;
  });
  return <Icon />;
};
export default DinamicIcons;
