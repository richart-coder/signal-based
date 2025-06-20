export default function mergeStaticParts(sequence) {
  const merged = [];
  let currentStatic = "";

  sequence.forEach((item) => {
    if (item.type === "static") {
      currentStatic += item.content;
    } else {
      if (currentStatic) {
        merged.push({ type: "static", content: currentStatic });
        currentStatic = "";
      }
      merged.push(item);
    }
  });

  if (currentStatic) {
    merged.push({ type: "static", content: currentStatic });
  }

  return merged;
}
