const enum HREFS {
  NOXLIGHT7 = "https://github.com/noxlight7",
}

const enum NICKNAMES {
  NOXLIGHT7 = "noxlight7",
}

export const DESCRIPTION = {
  EDUCATION: (
    <>
      {`A fully functional website similar to the Google Classroom service for a
      university environment with statistics collection. Created in 
      collaboration with `}
      <a href={HREFS.NOXLIGHT7} target="_blank">
        {NICKNAMES.NOXLIGHT7}
      </a>
      {`. Design by IIyCbKA.`}
    </>
  ),
  GRP_AI: (
    <>
      {`A service for exploring a neural network model that predicts the gross
      regional product of Russian regions based on available data. Developed in
      collaboration with `}
      <a href={HREFS.NOXLIGHT7} target="_blank">
        {NICKNAMES.NOXLIGHT7}
      </a>
      {`. Design by IIyCbKA.`}
    </>
  ),
};
