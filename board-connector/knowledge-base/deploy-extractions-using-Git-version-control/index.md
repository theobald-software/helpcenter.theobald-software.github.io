The following article describes versioning of newly developed extractions using [Git](https://gitforwindows.org/).

Versioning ensures a seamless synchronization of new developments on a test environment with the productive system. The implementation of various [Git](https://gitforwindows.org/) security techniques ensures an error-free transfer without compromising the production system.

Note

Target audience: Customers who use a production and a development environment for SAP data replications.

### Prerequisites

- Technically separate development and production environment.
- Developers have [read-only access](../../documentation/access-restrictions/) to Board Connector on the production system.
- Git client installed locally on the development environment and the production environment, e.g., [Fork](https://fork.dev).
- The Board Connector installation must have the identical release version on the servers.

### Set Up a new Environment

1. Create a new Git repository. How to do this depends on the technology you use, e.g.:
   - [GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo)
   - [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-new-repo?view=azure-devops)
   - [Git-scm](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)
1. Clone the repository into the installation directory of Board Connector, e.g., `C:\Program Files\BOARDConnector`.\
   The repository directory **must** be named `config`!
1. Use dedicated branches for test and development environments and the main branch for the production system.

Tip

The initial initialization of the Git version control requires an empty `config` folder. For this reason, the existing `config` folder must first be renamed and then filled with the configuration files.

### Set Up an existing Environment

1. Create a new Git Repository. How to do this depends on the technology you use, e.g.:
   - [GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo)
   - [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-new-repo?view=azure-devops)
   - [Git-scm](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)
1. Initialize a local repository in the installation directory of Board Connector, e.g., `C:\Program Files\BOARDConnector\config` using the command `git init`.
1. Attach the remote repository to your local one using the command `git remote add origin [ssh/https]://git-server-address/path/to/repo.git`.
1. Commit the current `config` folder.

### Advantage & Usage of Versioning

- By using the main branch for the production environment and development branches for the development or test environments, the former is separated from the latter.
- Applying appropriate and established techniques such as [pull requests](https://www.git-scm.com/docs/git-request-pull) and Git user rights allows the changes to be checked and corrected in advance.
- New developments can **not** cause fundamental damage to the data load of the productive landscape with this approach.
- Versioning enables quick and easy rollbacks of changes by reverting them in Git and is agnostic towards the use of containers (such as Docker).

Note

This scenario can also be implemented with Azure DevOps and Git. For more information, see [Microsoft Documentation](https://docs.microsoft.com/en-us/azure/devops/repos/?view=azure-devops).

______________________________________________________________________

#### Releated Links

- [GitForWindows Download](https://gitforwindows.org/)
- [Manual Migration to a Different Machine](../../documentation/setup/migration/)
- [Getting Started - About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [Git Basics - Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Git Branching - Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [Distributed Git - Distributed Workflows](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
- [Git Basics - Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
