const Json = (json) => {
  return(
    <pre>
      {JSON.stringify(json.json, null, 2)}
    </pre>
  );
}

export default Json;