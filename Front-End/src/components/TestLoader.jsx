import useLoading from "../hooks/useLoading";

export default function TestLoader() {
  const { withLoading } = useLoading();

  const handleClick = () =>
    withLoading(async () => {
      // Fake delay to show loader
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Done!");
    });

  return <button onClick={handleClick}>Test Loader</button>;
}
