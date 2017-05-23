import Base from './Base';
import Credential from './Credential';
import CredentialType from './CredentialType';

angular
    .module('at.lib.models', [])
    .service('BaseModel', Base)
    .service('CredentialModel', Credential)
    .service('CredentialTypeModel', CredentialType);

