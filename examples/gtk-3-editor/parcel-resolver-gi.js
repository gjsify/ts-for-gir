import {Resolver} from '@parcel/plugin';

const externalImports = ['gettext', 'system', 'cairo'];
const externalProtocols = ['gi://', 'resource://'];

export default new Resolver({
  async resolve({specifier}) {
    if (externalImports.includes(specifier)) {
      return{isExcluded: true};
    }
    if(externalProtocols.some(protocol => specifier.startsWith(protocol))) {
      return {isExcluded: true};
    }
    // Let the next resolver in the pipeline handle
    // this dependency.
    return null;
  }
});