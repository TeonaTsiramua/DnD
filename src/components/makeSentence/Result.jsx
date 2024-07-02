import { SResult } from './styles';

const Result = ({ selectedWords }) => (
  <SResult>
    {selectedWords.noun1?.word}
    {selectedWords.sign1?.word} {selectedWords.noun2?.word}
    {selectedWords.sign2?.word} {selectedWords.noun3?.word}
    {selectedWords.sign3?.word} {selectedWords.verb?.word}
  </SResult>
);
export default Result;
