import { FunctionContext, FunctionEvent } from '8base-cli-types';

interface SampleResolverInput {
  payload: any
}

type ResultData = {
  data: {
    success: boolean;
  };
};

const sampleResolver = async (event: FunctionEvent<SampleResolverInput>, ctx: FunctionContext): Promise<ResultData> => {

  return {
    data: {
      success: true
    }
  }
}

export default sampleResolver;
