# Angular Workspace - Multi-projects - Monorepo

#### Steps

```sh
ng new main --create-application=false
ng generate application admin --routing=false --style=scss
ng generate application ticketing --routing=false --style=scss
ng generate application delivery --routing=false --style=scss
ng generate library features --project-root=shared/features
ng generate library layout --project-root=shared/layout
ng generate library services --project-root=shared/services
ng generate library utilities --project-root=shared/utilities
```

main/projects/admin/tsconfig.app.json  
```json
    "paths": {
      "features": [
        "../../../main/dist/features"
      ]
    }
```

main/projects/admin/src/app/app.component.ts  
```ts
import { FancyButtonComponent } from 'features';

@Component({
  ...
  imports: [FancyButtonComponent],
  ...
```

#### Links

https://dev.to/codesuman/angular-workspace-4o7c