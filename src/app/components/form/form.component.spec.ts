import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
import { PAService } from './../../services/player.service';
import { PAFormComponent } from './form.component';

describe('Player Search Form Component', () => {

    let paFormFixture: ComponentFixture<PAFormComponent>;
    let paFormComponent: PAFormComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PAFormComponent],
            imports: [FormsModule, HttpClientModule],
            providers: [PAService]
        }).compileComponents();
    });

    it('should call the onSubmit function on clicking Go CTA', fakeAsync(() => {
        
        paFormFixture = TestBed.createComponent(PAFormComponent);
        paFormComponent = paFormFixture.componentInstance;
        spyOn(paFormComponent, 'onSubmit');

        let button: HTMLButtonElement = paFormFixture.nativeElement.querySelector('.submit-button');
        button.click();
        tick();
        expect(paFormComponent.onSubmit).toHaveBeenCalled();
    }));
});