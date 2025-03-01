// https://www.terraform.io/docs/providers/github/r/actions_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActionsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret.html#plaintext_value ActionsSecret#plaintext_value}
  */
  readonly plaintextValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret.html#repository ActionsSecret#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/actions_secret.html#secret_name ActionsSecret#secret_name}
  */
  readonly secretName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/github/r/actions_secret.html github_actions_secret}
*/
export class ActionsSecret extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/github/r/actions_secret.html github_actions_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: ActionsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'github_actions_secret',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._plaintextValue = config.plaintextValue;
    this._repository = config.repository;
    this._secretName = config.secretName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plaintext_value - computed: false, optional: false, required: true
  private _plaintextValue: string;
  public get plaintextValue() {
    return this.getStringAttribute('plaintext_value');
  }
  public set plaintextValue(value: string) {
    this._plaintextValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plaintextValueInput() {
    return this._plaintextValue
  }

  // repository - computed: false, optional: false, required: true
  private _repository: string;
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName: string;
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      plaintext_value: cdktf.stringToTerraform(this._plaintextValue),
      repository: cdktf.stringToTerraform(this._repository),
      secret_name: cdktf.stringToTerraform(this._secretName),
    };
  }
}
