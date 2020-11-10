// https://www.terraform.io/docs/providers/github/r/branch_protection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BranchProtectionConfig extends TerraformMetaArguments {
  readonly branch: string;
  readonly enforceAdmins?: boolean;
  readonly repository: string;
  readonly requireSignedCommits?: boolean;
  /** required_pull_request_reviews block */
  readonly requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[];
  /** required_status_checks block */
  readonly requiredStatusChecks?: BranchProtectionRequiredStatusChecks[];
  /** restrictions block */
  readonly restrictions?: BranchProtectionRestrictions[];
}
export interface BranchProtectionRequiredPullRequestReviews {
  readonly dismissStaleReviews?: boolean;
  readonly dismissalTeams?: string[];
  readonly dismissalUsers?: string[];
  readonly includeAdmins?: boolean;
  readonly requireCodeOwnerReviews?: boolean;
  readonly requiredApprovingReviewCount?: number;
}
export interface BranchProtectionRequiredStatusChecks {
  readonly contexts?: string[];
  readonly includeAdmins?: boolean;
  readonly strict?: boolean;
}
export interface BranchProtectionRestrictions {
  readonly apps?: string[];
  readonly teams?: string[];
  readonly users?: string[];
}

// Resource

export class BranchProtection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BranchProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'github_branch_protection',
      terraformGeneratorMetadata: {
        providerName: 'github'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branch = config.branch;
    this._enforceAdmins = config.enforceAdmins;
    this._repository = config.repository;
    this._requireSignedCommits = config.requireSignedCommits;
    this._requiredPullRequestReviews = config.requiredPullRequestReviews;
    this._requiredStatusChecks = config.requiredStatusChecks;
    this._restrictions = config.restrictions;
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

  // enforce_admins - computed: false, optional: true, required: false
  private _enforceAdmins?: boolean;
  public get enforceAdmins() {
    return this.getBooleanAttribute('enforce_admins');
  }
  public set enforceAdmins(value: boolean ) {
    this._enforceAdmins = value;
  }
  public resetEnforceAdmins() {
    this._enforceAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAdminsInput() {
    return this._enforceAdmins
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // require_signed_commits - computed: false, optional: true, required: false
  private _requireSignedCommits?: boolean;
  public get requireSignedCommits() {
    return this.getBooleanAttribute('require_signed_commits');
  }
  public set requireSignedCommits(value: boolean ) {
    this._requireSignedCommits = value;
  }
  public resetRequireSignedCommits() {
    this._requireSignedCommits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedCommitsInput() {
    return this._requireSignedCommits
  }

  // required_pull_request_reviews - computed: false, optional: true, required: false
  private _requiredPullRequestReviews?: BranchProtectionRequiredPullRequestReviews[];
  public get requiredPullRequestReviews() {
    return this.interpolationForAttribute('required_pull_request_reviews') as any;
  }
  public set requiredPullRequestReviews(value: BranchProtectionRequiredPullRequestReviews[] ) {
    this._requiredPullRequestReviews = value;
  }
  public resetRequiredPullRequestReviews() {
    this._requiredPullRequestReviews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPullRequestReviewsInput() {
    return this._requiredPullRequestReviews
  }

  // required_status_checks - computed: false, optional: true, required: false
  private _requiredStatusChecks?: BranchProtectionRequiredStatusChecks[];
  public get requiredStatusChecks() {
    return this.interpolationForAttribute('required_status_checks') as any;
  }
  public set requiredStatusChecks(value: BranchProtectionRequiredStatusChecks[] ) {
    this._requiredStatusChecks = value;
  }
  public resetRequiredStatusChecks() {
    this._requiredStatusChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredStatusChecksInput() {
    return this._requiredStatusChecks
  }

  // restrictions - computed: false, optional: true, required: false
  private _restrictions?: BranchProtectionRestrictions[];
  public get restrictions() {
    return this.interpolationForAttribute('restrictions') as any;
  }
  public set restrictions(value: BranchProtectionRestrictions[] ) {
    this._restrictions = value;
  }
  public resetRestrictions() {
    this._restrictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictionsInput() {
    return this._restrictions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: this._branch,
      enforce_admins: this._enforceAdmins,
      repository: this._repository,
      require_signed_commits: this._requireSignedCommits,
      required_pull_request_reviews: this._requiredPullRequestReviews,
      required_status_checks: this._requiredStatusChecks,
      restrictions: this._restrictions,
    };
  }
}
