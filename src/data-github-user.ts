// https://www.terraform.io/docs/providers/github/r/data_github_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGithubUserConfig extends TerraformMetaArguments {
  readonly username: string;
}

// Resource

export class DataGithubUser extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGithubUserConfig) {
    super(scope, id, {
      terraformResourceType: 'github_user',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // bio - computed: true, optional: false, required: false
  public get bio() {
    return this.getStringAttribute('bio');
  }

  // blog - computed: true, optional: false, required: false
  public get blog() {
    return this.getStringAttribute('blog');
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // followers - computed: true, optional: false, required: false
  public get followers() {
    return this.getNumberAttribute('followers');
  }

  // following - computed: true, optional: false, required: false
  public get following() {
    return this.getNumberAttribute('following');
  }

  // gpg_keys - computed: true, optional: false, required: false
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }

  // gravatar_id - computed: true, optional: false, required: false
  public get gravatarId() {
    return this.getStringAttribute('gravatar_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // public_gists - computed: true, optional: false, required: false
  public get publicGists() {
    return this.getNumberAttribute('public_gists');
  }

  // public_repos - computed: true, optional: false, required: false
  public get publicRepos() {
    return this.getNumberAttribute('public_repos');
  }

  // site_admin - computed: true, optional: false, required: false
  public get siteAdmin() {
    return this.getBooleanAttribute('site_admin');
  }

  // ssh_keys - computed: true, optional: false, required: false
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // username - computed: false, optional: false, required: true
  private _username: string;
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      username: this._username,
    };
  }
}
