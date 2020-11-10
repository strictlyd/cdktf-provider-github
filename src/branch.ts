// https://www.terraform.io/docs/providers/github/r/branch.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BranchConfig extends TerraformMetaArguments {
  readonly branch: string;
  readonly repository: string;
  readonly sourceBranch?: string;
  readonly sourceSha?: string;
}

// Resource

export class Branch extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BranchConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._repository = config.repository;
    this._sourceBranch = config.sourceBranch;
    this._sourceSha = config.sourceSha;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: false, required: true
  private _branch: string;
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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

  // sha - computed: true, optional: false, required: false
  public get sha() {
    return this.getStringAttribute('sha');
  }

  // source_branch - computed: false, optional: true, required: false
  private _sourceBranch?: string;
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }
  public set sourceBranch(value: string ) {
    this._sourceBranch = value;
  }
  public resetSourceBranch() {
    this._sourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchInput() {
    return this._sourceBranch
  }

  // source_sha - computed: true, optional: true, required: false
  private _sourceSha?: string;
  public get sourceSha() {
    return this.getStringAttribute('source_sha');
  }
  public set sourceSha(value: string) {
    this._sourceSha = value;
  }
  public resetSourceSha() {
    this._sourceSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceShaInput() {
    return this._sourceSha
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: this._branch,
      repository: this._repository,
      source_branch: this._sourceBranch,
      source_sha: this._sourceSha,
    };
  }
}
