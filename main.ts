/* Copyright (c) 2020 MTHS All rights reserved
 * Created by: katherine
 * Created on: Apr 2026
 * This program will make the wheels go spinnyspinny
*/

let started = false
basic.showIcon(IconNames.Asleep)

input.onButtonPressed(Button.A, function () {
    started = true
    basic.showIcon(IconNames.Happy)
})

while (true) {

    if (started) {

        const distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

        // Object detected
        if (distance > 0 && distance < 10) {
            basic.showIcon(IconNames.No)

            // Stop
            robotbit.MotorStopAll()
            basic.pause(200)

            // Reverse 10 cm
            robotbit.StpCarMove(-10, 48)
            basic.pause(200)

            // Turn approx 90°
            robotbit.MotorRun(robotbit.Motors.M1A, 80)
            robotbit.MotorRun(robotbit.Motors.M2A, -80)
            basic.pause(400)

            robotbit.MotorStopAll()
            basic.pause(200)

            basic.showIcon(IconNames.Happy)
        }

        // Keep moving forward in small steps
        if (distance >= 10 || distance == 0) {
            robotbit.StpCarMove(1, 48)
        }
    }
    basic.pause(50) // tiny delay to let sensor respond
}