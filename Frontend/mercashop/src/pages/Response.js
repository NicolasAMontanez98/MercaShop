function Response({ location }) {
  useEffect(() => {
    const { ref_payco } = queryString(location.search);

    axios({
      method: "GET",
      url: `https://secure.epayco.co/validation/v1/reference/${ref_payco}`,
    }).then(({ data }) => console.log(data));
  }, [location]);

  return (
    <>
      <h1>Response</h1>
    </>
  );
}
