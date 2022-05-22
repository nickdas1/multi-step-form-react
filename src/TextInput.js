export default function TextInput({ stage, setAnswer }) {
  return (
    <div>
      <input
        type="text"
        placeholder={stage === 0 ? "What's your email?" : ""}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}
