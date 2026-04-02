/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program will make the wheels go spinnyspinny
*/

// setup
basic.showIcon(IconNames.Happy)

// loop forever
while (true) {
    // Read sensor (P1 is Trig, P2 is Echo)
    const distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    // If something is closer than 10cm
    if (distance > 0 && distance < 10) {
        basic.showIcon(IconNames.No)

        // 1. Stop everything
        robotbit.MotorStopAll()
        basic.pause(200)

        // 2. Reverse 10cm
        robotbit.StpCarMove(-10, 48)
        basic.pause(200)

        // 3. Turn 90 degrees
        // (Degrees, Wheel Diameter, Track Width)
        robotbit.StpCarTurn(90, 48, 120)
        basic.pause(200)

        basic.showIcon(IconNames.Happy)
    } else {
        // 4. Move forward
        robotbit.StpCarMove(1, 48)
    }
}