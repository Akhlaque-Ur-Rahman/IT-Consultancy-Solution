export const getOGImage = (subTitle?: string) => (
  <div
    style={{
      fontSize: 100,
      background: "black",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      <span style={{ color: "white" }}>EDUNEX</span>
      {subTitle && (
        <>
          <span style={{ margin: "0 30px", color: "#f59e0b" }}>/</span>
          <span style={{ color: "#a1a1a1", fontSize: 80 }}>
            {subTitle.toUpperCase()}
          </span>
        </>
      )}
    </div>
    <div
      style={{
        fontSize: 36,
        marginTop: 40,
        color: "#a1a1a1",
        textAlign: "center",
      }}
    >
      IT Consulting & Software Development
    </div>
  </div>
);
